# from sqlalchemy import Column, String, Text, ForeignKey
# from sqlalchemy.orm import relationship
# from src.models.base import BaseModel

# class Export(BaseModel):
#     __tablename__ = "exports"

#     user_id = Column(ForeignKey('users.id'), nullable=False)
#     portfolio_id = Column(ForeignKey('portfolios.id'), nullable=False)
#     file_type = Column(String(10), nullable=False)
#     file_path = Column(Text, nullable=False)

#     user = relationship("User", back_populates="exports")
#     portfolio = relationship("Portfolio", back_populates="exports")