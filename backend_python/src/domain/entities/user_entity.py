# src/domain/entities/user.py
from datetime import datetime
from .base_entity import BaseEntity
from dataclasses import dataclass

@dataclass
class User(BaseEntity):
    name: str = ""
    email: str = ""
    password: str = ""
    username: str = ""
    sci_role: str = "" # e.g. 'metalurgist', 'geologist', etc.

    def update_details(self, name: str, email: str, username: str):
        self.name = name
        self.email = email
        self.username = username
        self.updated_at = datetime.now()

    def mark_as_deleted(self):
        self.is_deleted = True
        self.updated_at = datetime.now()