from dataclasses import dataclass


@dataclass
class GetOrganizationByIdQuery:
    id: str


@dataclass
class GetAllOrganizationsQuery:
    pass