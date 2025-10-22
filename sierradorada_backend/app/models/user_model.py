from sqlalchemy import Column, Integer, String
from app.core.database import Base
from pydantic import BaseModel

class User(Base):
    __tablename__ = "users"
    name = Column(String, nullable=False)
    last_name = Column(String, nullable = False)
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    phone = Column(String)
    address = Column(String)
    age = Column(Integer)
    country = Column(String)
    city = Column(String)

class UserLogin(BaseModel):
    username: str
    password: str