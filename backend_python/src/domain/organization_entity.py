# src/organization/domain/entities/organization_entity.py
from dataclasses import dataclass, field
from typing import List
from .base_entity import BaseEntity

@dataclass
class Organization(BaseEntity):
    name: str = ""
    description: str = ""
    # IDs de referencia para evitar acoplamiento circular en el dominio
    project_ids: List[str] = field(default_factory=list)
    member_ids: List[str] = field(default_factory=list)