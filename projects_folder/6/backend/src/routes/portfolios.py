from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
# from src.config.database import get_db
# from src.models.portfolio import Portfolio
from src.schemas.portfolio import PortfolioCreate, PortfolioResponse, PortfolioList
from src.routes.data.portfolio import PORTFOLIOS
from datetime import datetime

router = APIRouter()

@router.post("/portfolios", response_model=PortfolioResponse)
def create_portfolio(
    portfolio: PortfolioCreate, 
    # db: Session = Depends(get_db)
):
    new_portfolio = {
        "id" : str(len(PORTFOLIOS)),
        "name": portfolio.name,
        "description": portfolio.description,
        "status": "active",
        "created_at": str(datetime.now())
    }
    PORTFOLIOS.append(new_portfolio)
    return new_portfolio

@router.get("/portfolios/{portfolio_id}", response_model=PortfolioResponse)
def get_portfolio(
    portfolio_id: str, 
    # db: Session = Depends(get_db)
):
    for p in PORTFOLIOS:
        if (p["id"] == portfolio_id):
            portfolio = p
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found")
    return portfolio

@router.get("/portfolios", response_model=PortfolioList)
def list_portfolio(
    # db: Session = Depends(get_db)
):
    return {"portfolios": PORTFOLIOS}

