from dataclasses import dataclass

from ...domain.types.enums import ModelStatus


@dataclass
class CreateModelCommand:
    version: str
    path: str
    status: ModelStatus
    project_id: str
    accuracy: float


@dataclass
class UpdateModelCommand:
    id: str
    version: str
    path: str
    status: ModelStatus
    project_id: str
    accuracy: float


@dataclass
class DeleteModelCommand:
    id: str