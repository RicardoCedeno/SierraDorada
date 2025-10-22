from fastapi import FastAPI
from app.core.database import Base, engine
from app.controllers import user_controller

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API de Usuarios",
    description="Registro y login con JWT",
    version="1.0.0"
)

app.include_router(user_controller.router, prefix="/usuarios")
