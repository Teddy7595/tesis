from dataclasses import dataclass


@dataclass
class GetUserByIdQuery:
    id: str


@dataclass
class GetUserByEmailQuery:
    email: str


@dataclass
class GetAllUsersQuery:
    pass