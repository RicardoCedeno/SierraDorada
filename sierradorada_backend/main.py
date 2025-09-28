from fastapi import FastAPI
from sierradorada_backend.database import async_engine, Base
from .users.routes import router as users_router

app = FastAPI(title="Auth API - FastAPI + PostgreSQL + JWT")

# Crear tablas al inicio
@app.on_event("startup")
async def on_startup():
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# Incluir routers por módulo/entidad
app.include_router(users_router)
