# from sqlalchemy import Column, String, Numeric, Date
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel

# class Fund(BaseModel):
#     __tablename__ = "funds"

#     name = Column(String(255), nullable=False)
#     ticker = Column(String(20), nullable=False, unique=True, index=True)
#     nav = Column(Numeric(10, 2), nullable=False)
#     nav_date = Column(Date, nullable=False)

#     portfolio_funds = relationship("PortfolioFund", back_populates="fund")