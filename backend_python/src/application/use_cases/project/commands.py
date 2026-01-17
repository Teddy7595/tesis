from dataclasses import dataclass
from typing import List, Optional


@dataclass
class CreateProjectCommand:
    name: str
    description: str
    owner_id: str
    is_public: bool
    organization_id: Optional[str]
    objectives: List[str]


@dataclass
class UpdateProjectCommand:
    id: str
    name: str
    description: str
    owner_id: str
    is_public: bool
    organization_id: Optional[str]
    objectives: List[str]


@dataclass
class DeleteProjectCommand:
    id: str