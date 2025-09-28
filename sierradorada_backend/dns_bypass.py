import socket
from sqlalchemy import create_engine, text

def resolve_with_public_dns():
    """Intenta resolver usando DNS públicos"""
    host = "db.jouafghxsudpaoivdxaq.supabase.co"
    
    print("🔍 INTENTANDO RESOLVER DNS")
    print("=" * 50)
    
    # DNS públicos para probar
    dns_servers = [
        "8.8.8.8",      # Google
        "1.1.1.1",      # Cloudflare
        "8.8.4.4",      # Google secundario
    ]
    
    print(f"🌐 Host a resolver: {host}")
    
    # Intentar con DNS del sistema primero
    try:
        ip = socket.gethostbyname(host)
        print(f"✅ Resuelto con DNS local: {ip}")
        return ip
    except socket.gaierror as e:
        print(f"❌ DNS local falló: {e}")
    
    # Si falla, intentar cambiar DNS temporalmente
    print("\n🔄 Intentando con DNS públicos...")
    
    try:
        # Método alternativo usando socket directo
        import subprocess
        result = subprocess.run(['nslookup', host, '8.8.8.8'], 
                              capture_output=True, text=True, timeout=10)
        
        if result.returncode == 0:
            # Parsear la salida de nslookup
            lines = result.stdout.split('\n')
            for line in lines:
                if 'Address:' in line and not '8.8.8.8' in line:
                    ip = line.split('Address:')[1].strip()
                    if ip and '.' in ip:
                        print(f"✅ Resuelto con DNS público: {ip}")
                        return ip
    except Exception as e:
        print(f"❌ Error con DNS público: {e}")
    
    return None

def test_with_ip(ip):
    """Prueba conexión directa con IP"""
    if not ip:
        print("❌ No se pudo resolver la IP")
        return False
        
    print(f"\n🧪 PROBANDO CONEXIÓN DIRECTA CON IP: {ip}")
    print("=" * 40)
    
    # Construir URL con IP en lugar del host
    url_with_ip = f"postgresql+psycopg2://postgres:7dejulio@{ip}:5432/postgres?sslmode=require"
    
    try:
        engine = create_engine(
            url_with_ip,
            connect_args={
                "host": ip,
                "port": 5432,
                "sslmode": "require",
                "connect_timeout": 30
            }
        )
        
        with engine.connect() as conn:
            result = conn.execute(text("SELECT version()"))
            version = result.fetchone()[0]
            print(f"✅ ¡CONEXIÓN EXITOSA CON IP!")
            print(f"📊 PostgreSQL: {version.split()[0]} {version.split()[1]}")
            
            # Mostrar las URLs corregidas
            print(f"\n📝 URLS CORREGIDAS (usar IP):")
            print(f"DATABASE_URL_SYNC=postgresql+psycopg2://postgres:7dejulio@{ip}:5432/postgres?sslmode=require")
            print(f"DATABASE_URL=postgresql+asyncpg://postgres:7dejulio@{ip}:5432/postgres?ssl=require")
            
            return True
            
    except Exception as e:
        print(f"❌ Error con IP: {e}")
        return False

def try_alternative_methods():
    """Métodos alternativos si todo falla"""
    print(f"\n🔧 MÉTODOS ALTERNATIVOS:")
    print("=" * 40)
    
    print("1. 🌐 Cambiar DNS temporalmente:")
    print("   - Windows: Control Panel → Network → Change adapter settings")
    print("   - Cambiar DNS a 8.8.8.8 y 8.8.4.4")
    
    print("\n2. 📱 Probar desde hotspot móvil:")
    print("   - Conecta tu PC al hotspot de tu teléfono")
    print("   - Ejecuta el test nuevamente")
    
    print("\n3. 🔥 Revisar firewall:")
    print("   - Windows Defender puede estar bloqueando")
    print("   - Temporalmente desactívalo y prueba")
    
    print("\n4. ✅ Verificar en Supabase:")
    print("   - Dashboard → Settings → Database")
    print("   - Verificar que el proyecto esté 'Active'")
    print("   - Verificar Network restrictions")

if __name__ == "__main__":
    # Intentar resolver IP
    ip = resolve_with_public_dns()
    
    if ip:
        # Probar conexión con IP
        success = test_with_ip(ip)
        if not success:
            try_alternative_methods()
    else:
        print("❌ No se pudo resolver la IP")
        try_alternative_methods()