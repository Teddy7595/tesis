from dataclasses import dataclass
from typing import Optional


@dataclass
class GetProjectByIdQuery:
    id: str


@dataclass
class GetProjectsByOrganizationQuery:
    organization_id: Optional[str]


@dataclass
class GetAllProjectsQuery:
    pass