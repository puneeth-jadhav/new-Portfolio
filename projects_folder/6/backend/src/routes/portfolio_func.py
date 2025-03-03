# # 4/backend/src/routes/portfolio_funds.py
# from fastapi import APIRouter, Depends, HTTPException, Header
# from sqlalchemy.orm import Session
# from src.config.database import get_db
# from src.models.portfolio_fund import PortfolioFund
# from src.schemas.portfolio_fund import PortfolioFundCreate, PortfolioFundResponse
# from src.models.portfolio import Portfolio
# from src.models.fund import Fund

# router = APIRouter()

# @router.post("/portfolio-funds", response_model=PortfolioFundResponse)
# def add_fund_to_portfolio(
#     fund_data: PortfolioFundCreate, 
#     db: Session = Depends(get_db), 
#     authorization: str = Header(...)
# ):
#     # Sample token verification - this should be replaced with actual authentication logic
#     if not authorization.startswith("Bearer "):
#         raise HTTPException(status_code=401, detail="Unauthorized")

#     # Verify existence of the portfolio and fund
#     portfolio = db.query(Portfolio).filter(Portfolio.id == fund_data.portfolio_id).first()
#     fund = db.query(Fund).filter(Fund.id == fund_data.fund_id).first()
    
#     if not portfolio:
#         raise HTTPException(status_code=404, detail="Portfolio not found")
#     if not fund:
#         raise HTTPException(status_code=404, detail="Fund not found")

#     # Create and add new PortfolioFund instance
#     new_portfolio_fund = PortfolioFund(
#         portfolio_id=fund_data.portfolio_id,
#         fund_id=fund_data.fund_id,
#         quantity=fund_data.quantity,
#         cost_basis=fund_data.cost_basis
#     )
#     db.add(new_portfolio_fund)
#     db.commit()
#     db.refresh(new_portfolio_fund)
#     return new_portfolio_fund