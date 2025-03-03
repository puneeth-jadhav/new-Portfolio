# from sqlalchemy import Column, String, Enum
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel
# from src.models.alert import Alert
# from src.models.export import Export
# from src.models.portfolio import Portfolio
# from src.models.portfolio_fund import PortfolioFund
# from src.models.fund import Fund

# class User(BaseModel):
#     __tablename__ = "users"

#     username = Column(String(255), unique=True, nullable=False, index=True)
#     email = Column(String(255), unique=True, nullable=False, index=True)
#     password = Column(String(255), nullable=False)
#     status = Column(Enum('active', 'inactive'), nullable=False, default='active')

#     portfolios = relationship("Portfolio", back_populates="user")
#     alerts = relationship("Alert", back_populates="user")
#     exports = relationship("Export", back_populates="user")