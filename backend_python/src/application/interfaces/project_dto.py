from dataclasses import dataclass
from typing import List, Optional


@dataclass
class CreateProjectRequestDTO:
    name: str
    description: str
    owner_id: str
    is_public: bool
    organization_id: Optional[str]
    objectives: List[str]


@dataclass
class UpdateProjectRequestDTO:
    id: str
    name: Optional[str] = None
    description: Optional[str] = None
    owner_id: Optional[str] = None
    is_public: Optional[bool] = None
    organization_id: Optional[str] = None
    objectives: Optional[List[str]] = None


@dataclass
class ProjectResponseDTO:
    id: str
    name: str
    description: str
    owner_id: str
    is_public: bool
    organization_id: Optional[str]
    objectives: List[str]
    models: List[str]
    reports: List[str]
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False