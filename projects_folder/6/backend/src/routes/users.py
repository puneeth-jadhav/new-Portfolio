# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session
# from src.config.database import get_db
# from src.models.user import User
# from src.schemas.user import UserCreate, UserResponse

# router = APIRouter()

# @router.post("/users", response_model=UserResponse)
# def create_user(user: UserCreate, db: Session = Depends(get_db)):
#     db_user = db.query(User).filter(
#         (User.username == user.username) | (User.email == user.email)
#     ).first()
#     if db_user:
#         raise HTTPException(status_code=400, detail="Username or email already registered")
    
#     new_user = User(
#         username=user.username,
#         email=user.email,
#         password=user.password  # In production, hash the password
#     )
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)
#     return new_user

# @router.get("/users/{user_id}", response_model=UserResponse)
# def get_user(user_id: str, db: Session = Depends(get_db)):
#     user = db.query(User).filter(User.id == user_id).first()
#     if not user:
#         raise HTTPException(status_code=404, detail="User not found")
#     return user