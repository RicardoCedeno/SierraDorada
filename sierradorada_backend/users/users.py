from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from .models import User
from .auth import get_password_hash, get_user_by_email
from .schemas import UserCreate

async def create_user(db: AsyncSession, user_in: UserCreate) -> User:
    existing = await get_user_by_email(db, user_in.email)
    if existing:
        raise ValueError("Email ya registrado")
    hashed = get_password_hash(user_in.password)
    user = User(
        nombre=user_in.nombre,
        apellido=user_in.apellido,
        fecha_nacimiento=user_in.fecha_nacimiento,
        genero=user_in.genero,
        direccion=user_in.direccion,
        email=user_in.email,
        telefono=user_in.telefono,
        hashed_password=hashed
    )
    db.add(user)
    try:
        await db.commit()
        await db.refresh(user)
    except IntegrityError:
        await db.rollback()
        raise
    return user


