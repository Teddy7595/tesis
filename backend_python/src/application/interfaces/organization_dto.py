from dataclasses import dataclass
from typing import List, Optional


@dataclass
class CreateOrganizationRequestDTO:
    name: str
    description: str
    project_ids: List[str]
    member_ids: List[str]


@dataclass
class UpdateOrganizationRequestDTO:
    id: str
    name: Optional[str] = None
    description: Optional[str] = None
    project_ids: Optional[List[str]] = None
    member_ids: Optional[List[str]] = None


@dataclass
class OrganizationResponseDTO:
    id: str
    name: str
    description: str
    project_ids: List[str]
    member_ids: List[str]
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False