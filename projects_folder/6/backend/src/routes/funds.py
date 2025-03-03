from typing import Optional
from fastapi import APIRouter, Depends, Query
# from sqlalchemy.orm import Session
# from src.config.database import get_db
# from src.models.fund import Fund
from src.schemas.fund import FundList
from src.routes.data.funds import FUNDS

router = APIRouter()

@router.get("/funds", response_model=FundList)
def list_funds(
    name: Optional[str] = None,
    ticker: Optional[str] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),
    # db: Session = Depends(get_db)
):
    filtered_funds = FUNDS
    if name:
        filtered_funds = [fund for fund in filtered_funds if name.lower() in fund["name"].lower()]
    if ticker:
        filtered_funds = [fund for fund in filtered_funds if ticker.lower() in fund["ticker"].lower()]
    
    total = len(filtered_funds)

    # Pagination
    start = (page - 1) * limit
    end = start + limit
    paginated_funds = filtered_funds[start:end]
    
    return {
        "funds": paginated_funds,
        "pagination": {
            "page": page,
            "limit": limit,
            "total": total
        }
    }