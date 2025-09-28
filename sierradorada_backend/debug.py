import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import psycopg2

load_dotenv()

def test_direct_psycopg2():
    """Prueba conexión directa con psycopg2"""
    print("🔍 DIAGNÓSTICO DE CONEXIÓN")
    print("=" * 50)
    
    # Mostrar variables de entorno (sin password)
    db_url_async = os.getenv("DATABASE_URL")
    db_url_sync = os.getenv("DATABASE_URL_SYNC")
    
    print(f"📋 DATABASE_URL: {db_url_async.replace(':7dejulio', ':****') if db_url_async else 'NO CONFIGURADA'}")
    print(f"📋 DATABASE_URL_SYNC: {db_url_sync.replace(':7dejulio', ':****') if db_url_sync else 'NO CONFIGURADA'}")
    
    if not db_url_sync:
        print("❌ DATABASE_URL_SYNC no está configurada")
        return False
    
    # Extraer componentes de la URL
    # postgresql+psycopg2://postgres:7dejulio@db.jouafghxsudpaoivdxaq.supabase.co:5432/postgres
    try:
        url_parts = db_url_sync.replace("postgresql+psycopg2://", "").split("/")
        auth_host = url_parts[0]
        database = url_parts[1]
        
        auth_parts = auth_host.split("@")
        user_pass = auth_parts[0]
        host_port = auth_parts[1]
        
        user, password = user_pass.split(":")
        host, port = host_port.split(":")
        
        print(f"🔗 Host: {host}")
        print(f"🔗 Port: {port}")
        print(f"🔗 Database: {database}")
        print(f"🔗 User: {user}")
        print(f"🔗 Password: {'*' * len(password)}")
        
    except Exception as e:
        print(f"❌ Error parseando URL: {e}")
        return False
    
    # Probar conexión directa con psycopg2
    print("\n🧪 Probando conexión directa con psycopg2...")
    try:
        conn = psycopg2.connect(
            host=host,
            port=port,
            database=database,
            user=user,
            password=password
        )
        
        cursor = conn.cursor()
        cursor.execute("SELECT version();")
        version = cursor.fetchone()[0]
        print(f"✅ Conexión psycopg2 exitosa!")
        print(f"📊 PostgreSQL: {version.split()[0]} {version.split()[1]}")
        
        cursor.close()
        conn.close()
        
        # Si psycopg2 funciona, probar SQLAlchemy
        print("\n🧪 Probando conexión con SQLAlchemy...")
        engine = create_engine(db_url_sync)
        with engine.connect() as connection:
            result = connection.execute(text("SELECT version();"))
            version = result.fetchone()[0]
            print(f"✅ Conexión SQLAlchemy exitosa!")
            print(f"📊 PostgreSQL: {version.split()[0]} {version.split()[1]}")
            return True
            
    except psycopg2.OperationalError as e:
        print(f"❌ Error psycopg2: {e}")
        return False
    except Exception as e:
        print(f"❌ Error SQLAlchemy: {e}")
        return False

if __name__ == "__main__":
    success = test_direct_psycopg2()
    
    if not success:
        print("\n🔧 POSIBLES SOLUCIONES:")
        print("1. Verifica que la contraseña sea correcta")
        print("2. Verifica que el host sea correcto")
        print("3. Chequea que tu IP esté en la whitelist de Supabase")
        print("4. Verifica que la base de datos esté activa")
        print("5. Intenta resetear la contraseña de la BD en Supabase")