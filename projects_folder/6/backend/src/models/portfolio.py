# from sqlalchemy import Column, String, Text, Enum, ForeignKey
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel

# class Portfolio(BaseModel):
#     __tablename__ = "portfolios"

#     user_id = Column(ForeignKey('users.id'), nullable=False)
#     name = Column(String(255), nullable=False)
#     description = Column(Text, nullable=True)
#     status = Column(Enum('active', 'archived'), nullable=False, default='active')

#     user = relationship("User", back_populates="portfolios")
#     portfolio_funds = relationship("PortfolioFund", back_populates="portfolio")
#     alerts = relationship("Alert", back_populates="portfolio")
#     exports = relationship("Export", back_populates="portfolio")