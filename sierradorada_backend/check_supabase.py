import socket
import requests
from urllib.parse import urlparse

def test_network_connectivity():
    """Verifica la conectividad de red"""
    host = "db.jouafghxsudpaoivdxaq.supabase.co"
    port = 5432
    
    print("🌐 VERIFICANDO CONECTIVIDAD DE RED")
    print("=" * 50)
    
    # 1. Verificar resolución DNS
    print(f"🔍 Resolviendo DNS para {host}...")
    try:
        ip = socket.gethostbyname(host)
        print(f"✅ DNS resuelto: {ip}")
    except socket.gaierror as e:
        print(f"❌ Error DNS: {e}")
        return False
    
    # 2. Verificar conectividad al puerto
    print(f"🔌 Verificando conectividad al puerto {port}...")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(10)
    
    try:
        result = sock.connect_ex((host, port))
        if result == 0:
            print(f"✅ Puerto {port} accesible")
            sock.close()
        else:
            print(f"❌ Puerto {port} no accesible (código: {result})")
            sock.close()
            return False
    except Exception as e:
        print(f"❌ Error de conectividad: {e}")
        sock.close()
        return False
    
    # 3. Verificar API de Supabase
    print("🌐 Verificando API de Supabase...")
    try:
        api_url = "https://jouafghxsudpaoivdxaq.supabase.co/rest/v1/"
        response = requests.get(api_url, timeout=10)
        if response.status_code in [200, 401, 403]:  # 401/403 son normales sin auth
            print(f"✅ API Supabase accesible (status: {response.status_code})")
        else:
            print(f"⚠️ API Supabase respuesta inesperada: {response.status_code}")
    except Exception as e:
        print(f"❌ Error API Supabase: {e}")
    
    # 4. Verificar tu IP pública
    print("🔍 Verificando tu IP pública...")
    try:
        response = requests.get("https://api.ipify.org", timeout=10)
        ip = response.text.strip()
        print(f"📍 Tu IP pública: {ip}")
        print("   ⚠️ Verifica que esta IP esté permitida en Supabase")
    except Exception as e:
        print(f"❌ No se pudo obtener IP pública: {e}")
    
    return True

def check_supabase_status():
    """Verifica el estado del servicio de Supabase"""
    print("\n📊 VERIFICANDO ESTADO DE SUPABASE")
    print("=" * 50)
    
    try:
        # Página de estado de Supabase
        status_url = "https://status.supabase.com/api/v2/status.json"
        response = requests.get(status_url, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            status = data.get('status', {}).get('description', 'Desconocido')
            print(f"🟢 Estado de Supabase: {status}")
        else:
            print(f"⚠️ No se pudo verificar estado de Supabase")
            
    except Exception as e:
        print(f"❌ Error verificando estado: {e}")

if __name__ == "__main__":
    if test_network_connectivity():
        print("\n✅ Conectividad básica OK")
    else:
        print("\n❌ Problemas de conectividad detectados")
    
    check_supabase_status()
    
    print("\n🔧 PRÓXIMOS PASOS:")
    print("1. Ve a tu proyecto Supabase → Settings → Database")
    print("2. En 'Network restrictions', asegúrate que esté en 'Allow all' o incluya tu IP")
    print("3. En 'Connection parameters', copia la URL exacta")
    print("4. Si el problema persiste, ejecuta: python test_ssl.py")