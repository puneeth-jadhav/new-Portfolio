from datetime import date
from decimal import Decimal
from typing import List, Optional
from pydantic import BaseModel

class FundBase(BaseModel):
    name: str
    ticker: str
    nav: Decimal
    nav_date: date

class FundResponse(FundBase):
    id: str
    
    class Config:
        from_attributes = True

class FundList(BaseModel):
    funds: List[FundResponse]
    pagination: dict