# 4/backend/src/schemas/portfolio_fund.py
from pydantic import BaseModel, Field
from decimal import Decimal
from typing import Optional

class PortfolioFundBase(BaseModel):
    portfolio_id: str
    fund_id: str
    quantity: Decimal = Field(..., gt=0)  # Quantity must be greater than 0
    cost_basis: Decimal = Field(..., ge=0)  # Cost basis should be non-negative

class PortfolioFundCreate(PortfolioFundBase):
    pass

class PortfolioFundResponse(PortfolioFundBase):
    id: str
    
    class Config:
        from_attributes = True