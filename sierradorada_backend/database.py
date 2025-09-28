import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path)
DATABASE_URL = os.getenv("DATABASE_URL")

# Engine async para FastAPI
async_engine = create_async_engine(
    DATABASE_URL,
    echo=True,  # Mostrar queries para depuración
    future=True,
    pool_pre_ping=True,         # Previene errores de conexión cerrada
    connect_args={"statement_cache_size": 0},  # Para compatibilidad Windows + asyncpg
)

# Sesión async
AsyncSessionLocal = sessionmaker(
    bind=async_engine,
    expire_on_commit=False,
    class_=AsyncSession
)

# Base para modelos
Base = declarative_base()

# Dependency FastAPI
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
