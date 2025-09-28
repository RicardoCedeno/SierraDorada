from datetime import datetime, date
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class UserCreate(BaseModel):
    nombre: str = Field(..., example="Ricardo")
    apellido: str = Field(..., example="Cedeño")
    fecha_nacimiento: Optional[date] = Field(None, example="1990-05-10")
    genero: Optional[str] = Field(None, example="M")
    direccion: Optional[str] = Field(None, example="Calle 123")
    email: EmailStr
    telefono: Optional[str] = Field(None, example="+573001234567")
    password: str = Field(..., min_length=6)

class UserOut(BaseModel):
    id: int
    nombre: str
    apellido: str
    fecha_nacimiento: Optional[date]
    genero: Optional[str]
    direccion: Optional[str]
    email: EmailStr
    telefono: Optional[str]
    created_at: datetime

    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
