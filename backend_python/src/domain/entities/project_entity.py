# src/domain/entities/project.py
from .base_entity import BaseEntity
from .user_entity import User
from .organization_entity import Organization  # Asumiendo que migramos OrganizationEntity
from dataclasses import dataclass, field
from typing import List, Optional

@dataclass
class Project(BaseEntity):
    name: str = ""
    description: str = ""
    owner: User = field(default_factory=User)
    is_public: bool = False
    organization: Optional['Organization'] = None
    objectives: List[str] = field(default_factory=list)
    # Estos se cargarán bajo demanda (Lazy loading manual en el repositorio)
    models: List[str] = field(default_factory=list) 
    reports: List[str] = field(default_factory=list)