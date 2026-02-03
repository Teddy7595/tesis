# src/images/domain/entities/image_entity.py
from dataclasses import dataclass
from .base_entity import BaseEntity
from .types.enums import ImageType

@dataclass
class ImageEntity(BaseEntity):
    filename: str = ""
    path: str = ""  # Ruta en el storage (S3/Local)
    url: str = ""
    image_type: ImageType = ImageType.ORIGINAL
    project_id: str = ""
    uploaded_by_id: str = ""
    
    # Metadatos técnicos que OpenCV podría llenar
    width: int = 0
    height: int = 0
    channels: int = 3