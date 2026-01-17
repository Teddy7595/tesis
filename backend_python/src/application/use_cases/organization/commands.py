from dataclasses import dataclass
from typing import List


@dataclass
class CreateOrganizationCommand:
    name: str
    description: str
    project_ids: List[str]
    member_ids: List[str]


@dataclass
class UpdateOrganizationCommand:
    id: str
    name: str
    description: str
    project_ids: List[str]
    member_ids: List[str]


@dataclass
class DeleteOrganizationCommand:
    id: str