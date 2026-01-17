from dataclasses import dataclass
from typing import Optional
from ...domain.types.enums import ModelStatus


@dataclass
class CreateModelRequestDTO:
    version: str
    path: str
    status: ModelStatus
    project_id: str
    accuracy: float


@dataclass
class UpdateModelRequestDTO:
    id: str
    version: Optional[str] = None
    path: Optional[str] = None
    status: Optional[ModelStatus] = None
    project_id: Optional[str] = None
    accuracy: Optional[float] = None


@dataclass
class ModelResponseDTO:
    id: str
    version: str
    path: str
    status: ModelStatus
    project_id: str
    accuracy: float
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False