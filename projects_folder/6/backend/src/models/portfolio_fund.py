# from sqlalchemy import Column, ForeignKey, Numeric
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel

# class PortfolioFund(BaseModel):
#     __tablename__ = "portfolio_funds"

#     portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
#     fund_id = Column(ForeignKey('funds.id'), nullable=False)
#     quantity = Column(Numeric(10, 2), nullable=False)
#     cost_basis = Column(Numeric(10, 2), nullable=False)

#     portfolio = relationship("Portfolio", back_populates="portfolio_funds")
#     fund = relationship("Fund", back_populates="portfolio_funds")