from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    name: str | None = None
    last_name: str | None = None
    email: EmailStr
    phone: str | None = None
    address: str | None = None
    age: int | None = None
    country: str | None = None
    city: str | None = None

class UserCreate(UserBase):
    contrasena: str

class UserLogin(BaseModel):
    correo: EmailStr
    contrasena: str

class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True
