# src/tags/domain/entities/tag_entity.py
from dataclasses import dataclass, field
from .base_entity import BaseEntity

@dataclass
class TagEntity(BaseEntity):
    label: str = ""          # Ej: "Perlita", "Inclusión"
    image_id: str = ""
    # Coordenadas guardadas como diccionario (x, y, w, h)
    points: dict = field(default_factory=dict) 
    confidence: float = 1.0  # Si la hizo un humano es 1.0