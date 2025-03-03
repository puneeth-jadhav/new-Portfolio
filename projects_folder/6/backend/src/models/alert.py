# from sqlalchemy import Column, String, Text, Enum, ForeignKey
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel

# class Alert(BaseModel):
#     __tablename__ = "alerts"

#     user_id = Column(ForeignKey('users.id'), nullable=False)
#     portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
#     alert_type = Column(String(50), nullable=False)
#     message = Column(Text, nullable=False)
#     status = Column(Enum('active', 'inactive'), nullable=False, default='active')

#     user = relationship("User", back_populates="alerts")
#     portfolio = relationship("Portfolio", back_populates="alerts")