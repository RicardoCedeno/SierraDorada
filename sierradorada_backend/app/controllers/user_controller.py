from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.user_services import create_user, login_user, get_all_users
from app.schemas.user_schema import UserCreate, UserLogin, UserResponse
from app.utils.auth import get_current_user
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()

@router.post("/registro", response_model=UserResponse, tags=["Usuarios"])
def registro(usuario: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, usuario)

@router.post("/login", tags=["Auth"])
def login(usuario: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, usuario.email, usuario.pasword)

@router.get("/usuarios", response_model=list[UserResponse], tags=["Usuarios"])
def obtener_todos_los_usuarios(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)  # 👈 esto protege el endpoint
):
    usuarios = get_all_users(db)
    return usuarios

# 👇 NUEVO: Endpoint compatible con OAuth2 para Swagger
@router.post("/token", tags=["Auth"])
def token_login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Endpoint OAuth2 compatible para autenticación en Swagger UI.
    Usa el email como username.
    """
    try:
        # Usa el username del form como email
        result = login_user(db, form_data.username, form_data.password)
        
        # OAuth2 requiere este formato exacto de respuesta
        return {
            "access_token": result["access_token"],
            "token_type": "bearer"
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email o contraseña incorrectos",
            headers={"WWW-Authenticate": "Bearer"},
        )