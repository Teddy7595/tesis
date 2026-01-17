from dataclasses import dataclass
from typing import Optional


@dataclass
class CreateUserRequestDTO:
    name: str
    email: str
    password: str
    username: str


@dataclass
class UpdateUserRequestDTO:
    id: str
    name: Optional[str] = None
    email: Optional[str] = None
    password: Optional[str] = None
    username: Optional[str] = None


@dataclass
class UserResponseDTO:
    id: str
    name: str
    email: str
    username: str
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False