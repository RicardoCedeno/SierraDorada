import os
from dotenv import load_dotenv

class Settings:
    PROJECT_NAME = "api de personas"
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:7dejulio@localhost:5432/sierradorada")
settings = Settings()