from dataclasses import dataclass


@dataclass
class GetImageByIdQuery:
    id: str


@dataclass
class GetImagesByProjectQuery:
    project_id: str


@dataclass
class GetAllImagesQuery:
    pass