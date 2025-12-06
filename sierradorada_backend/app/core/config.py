import os
from dotenv import load_dotenv

class Settings:
    PROJECT_NAME = "api de personas"
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres.jouafghxsudpaoivdxaq:7dejulio@aws-1-us-east-2.pooler.supabase.com:6543/postgres")
settings = Settings()