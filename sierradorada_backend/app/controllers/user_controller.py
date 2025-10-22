from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.user_services import create_user, login_user
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse

router = APIRouter()

@router.post("/registro", response_model=UserResponse, tags=["Usuarios"])
def registro(usuario: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, usuario)

@router.post("/login", tags=["Usuarios"])
def login(usuario: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, usuario.correo, usuario.contrasena)
