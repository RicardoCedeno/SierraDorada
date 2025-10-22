from sqlalchemy.orm import Session
from app.models.user_model import User
from app.schemas.user_schema import UserCreate
from app.utils.hashing import hash_password, verify_password
from app.utils.auth import create_access_token
from fastapi import HTTPException, status

def create_user(db: Session, user: UserCreate):
    db_usuario = db.query(User).filter(User.email == user.email).first()
    if db_usuario:
        raise HTTPException(status_code=400, detail="Correo ya registrado")

    hashed = hash_password(user.contrasena)
    nuevo_usuario = User(
        name = user.name,
        last_name = user.last_name,
        email=user.email,
        password=hashed,
        phone=user.phone,
        address=user.address,
        age=user.age,
        country=user.country,
        city=user.city
    )
    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)
    return nuevo_usuario

def login_user(db: Session, email: str, password: str):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Credenciales incorrectas")

    token = create_access_token({"sub": user.email})
    return {"access_token": token, "token_type": "bearer"}

def get_all_users(db: Session):
    return db.query(User).all()
