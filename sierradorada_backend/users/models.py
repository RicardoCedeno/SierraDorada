from sqlalchemy import Column, Integer, String, Date, DateTime, Text
from datetime import datetime
from ..database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    apellido = Column(String(100), nullable=False)
    fecha_nacimiento = Column(Date, nullable=True)
    genero = Column(String(30), nullable=True)
    direccion = Column(Text, nullable=True)
    email = Column(String(256), unique=True, index=True, nullable=False)
    telefono = Column(String(50), nullable=True)
    hashed_password = Column(String(256), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)