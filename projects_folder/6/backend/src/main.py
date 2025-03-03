from fastapi import FastAPI
from src.routes import users, portfolios, funds
from fastapi.middleware.cors import CORSMiddleware
# from src.config.database import engine, Base

# Create database tables
# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio Management API",
    description="API for managing investment portfolios",
    version="1.0.0"
)


# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # You can also specify specific methods like ["GET", "POST"]
    allow_headers=["*"],  # You can also specify specific headers
)

# Include routers
# app.include_router(users.router, prefix="/api/v1", tags=["users"])
app.include_router(portfolios.router, prefix="/api/v1", tags=["portfolios"])
app.include_router(funds.router, prefix="/api/v1", tags=["funds"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Portfolio Management API"}