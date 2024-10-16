from flask import Flask

# Crear la aplicación Flask
app = Flask(__name__)

# Ruta de ejemplo
@app.route('/')
def home():
    return "Hello, Flask!"

# Asegurarse de que la aplicación se ejecute solo si se llama directamente
if __name__ == "__main__":
    # Puedes habilitar el modo de depuración aquí si lo necesitas
    app.run(host='0.0.0.0', port=5000, debug=True)
