import os
from dotenv import load_dotenv

class Settings:
    PROJECT_NAME = "api de personas"
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:sierra123@db:5432/sierra_db")

settings = Settings()