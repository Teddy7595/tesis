# src/main.py
import uvicorn
from fastapi import FastAPI
from src.adapters.bootstrap import createApp

def create_app() -> FastAPI:
    app = FastAPI(
        title="MetalHub API",
        description="GitHub-like system for metallographic image recognition",
        version="1.0.0"
    )
    
    # Invocamos el ensamblado de la infraestructura
    createApp(app)
    
    return app

app = create_app()

if __name__ == "__main__":
    uvicorn.run("src.main:app", host="0.0.0.0", port=8000, reload=True)