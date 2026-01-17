from dataclasses import dataclass
from typing import Optional
from ...domain.types.enums import ImageType


@dataclass
class CreateImageRequestDTO:
    filename: str
    path: str
    url: str
    image_type: ImageType
    project_id: str
    uploaded_by_id: str
    width: int
    height: int
    channels: int


@dataclass
class UpdateImageRequestDTO:
    id: str
    filename: Optional[str] = None
    path: Optional[str] = None
    url: Optional[str] = None
    image_type: Optional[ImageType] = None
    project_id: Optional[str] = None
    uploaded_by_id: Optional[str] = None
    width: Optional[int] = None
    height: Optional[int] = None
    channels: Optional[int] = None


@dataclass
class ImageResponseDTO:
    id: str
    filename: str
    path: str
    url: str
    image_type: ImageType
    project_id: str
    uploaded_by_id: str
    width: int
    height: int
    channels: int
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False