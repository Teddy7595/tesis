# src/infrastructure/bootstrap.py
from fastapi import FastAPI
from fastapi.routing import APIRoute
""" from src.infrastructure.web.api_v1.endpoints import (
    users, projects, images, models, tags, reports, organizations
) """

#Controllers de ensamblado de la aplicación
import src.adapters.api.status as status_controller

def createApp(app: FastAPI) -> None:
    """
    Configura y ensambla los componentes de la aplicación.
    Aquí se registran routers, middlewares y se inicializan conexiones.
    """
    
    # Registro de Namespaces (Routers) con prefijos de versión
    api_prefix = "/api/v1"
    
    """ app.include_router(users.router, prefix=f"{api_prefix}/users", tags=["Users"])
    app.include_router(projects.router, prefix=f"{api_prefix}/projects", tags=["Projects"])
    app.include_router(images.router, prefix=f"{api_prefix}/images", tags=["Images"])
    app.include_router(models.router, prefix=f"{api_prefix}/models", tags=["Models"])
    app.include_router(tags.router, prefix=f"{api_prefix}/tags", tags=["Tags"])
    app.include_router(reports.router, prefix=f"{api_prefix}/reports", tags=["Reports"])
    app.include_router(organizations.router, prefix=f"{api_prefix}/organizations", tags=["Organizations"]) """
    app.include_router(status_controller.router, prefix=f"{api_prefix}/status", tags=["Status"])
    
    # Listar rutas registradas estilo NestJS
    print("\nRutas registradas:\n")
    for route in app.routes:
        if isinstance(route, APIRoute) and hasattr(route, 'path'):
            methods_str = ', '.join(route.methods)
            print(f" - 🤖: {methods_str} {route.path}")
    print("\n")
    # Aquí podrías añadir también la configuración de CORS o Middlewares

