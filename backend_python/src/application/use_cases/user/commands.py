from dataclasses import dataclass


@dataclass
class CreateUserCommand:
    name: str
    email: str
    password: str
    username: str


@dataclass
class UpdateUserCommand:
    id: str
    name: str
    email: str
    password: str
    username: str


@dataclass
class DeleteUserCommand:
    id: str