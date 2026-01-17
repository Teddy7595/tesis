from dataclasses import dataclass

from ...domain.types.enums import ImageType


@dataclass
class CreateImageCommand:
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
class UpdateImageCommand:
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


@dataclass
class DeleteImageCommand:
    id: str