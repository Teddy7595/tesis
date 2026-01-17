# src/domain/entities/base_entity.py
from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import uuid

@dataclass
class BaseEntity:
    id: str = field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = field(default_factory=datetime.now)
    updated_at: Optional[datetime] = field(default_factory=datetime.now)
    is_deleted: bool = False