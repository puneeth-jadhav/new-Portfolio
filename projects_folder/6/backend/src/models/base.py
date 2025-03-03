# from datetime import datetime
# import uuid
# from sqlalchemy import Column, DateTime, String
# from sqlalchemy.dialects.mysql import CHAR
# from src.config.database import Base

# def generate_uuid():
#     return str(uuid.uuid4())

# class BaseModel(Base):
#     __abstract__ = True
    
#     id = Column(CHAR(36), primary_key=True, default=generate_uuid)
#     created_at = Column(DateTime, nullable=False, default=datetime.utcnow)
#     updated_at = Column(DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
#     deleted_at = Column(DateTime, nullable=True)