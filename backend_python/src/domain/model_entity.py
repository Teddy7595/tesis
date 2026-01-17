# src/models/domain/entities/model_entity.py
from dataclasses import dataclass
from base_entity import BaseEntity
from .types.enums import ModelStatus

@dataclass
class ModelEntity(BaseEntity):
    version: str = "1.0.0"
    path: str = ""           # Ruta al archivo .pth o .h5
    status: ModelStatus = ModelStatus.TRAINING
    project_id: str = ""
    accuracy: float = 0.0