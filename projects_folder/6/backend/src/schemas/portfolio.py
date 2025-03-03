from datetime import datetime
from typing import Optional
from pydantic import BaseModel
from typing import List

class PortfolioBase(BaseModel):
    name: str
    description: Optional[str] = None

class PortfolioCreate(PortfolioBase):
    pass

class PortfolioResponse(PortfolioBase):
    id: str
    status: str
    created_at: str
    # updated_at: datetime
    
    class Config:
        from_attributes = True

class PortfolioList(BaseModel):
    portfolios: List[PortfolioResponse]