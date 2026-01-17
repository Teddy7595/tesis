from dataclasses import dataclass


@dataclass
class GetModelByIdQuery:
    id: str


@dataclass
class GetModelsByProjectQuery:
    project_id: str


@dataclass
class GetAllModelsQuery:
    pass