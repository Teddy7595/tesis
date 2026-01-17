from dataclasses import dataclass


@dataclass
class GetTagByIdQuery:
    id: str


@dataclass
class GetTagsByImageQuery:
    image_id: str


@dataclass
class GetAllTagsQuery:
    pass