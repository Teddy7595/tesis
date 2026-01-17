from dataclasses import dataclass
from typing import Dict, Optional


@dataclass
class CreateTagRequestDTO:
    label: str
    image_id: str
    points: Dict
    confidence: float


@dataclass
class UpdateTagRequestDTO:
    id: str
    label: Optional[str] = None
    image_id: Optional[str] = None
    points: Optional[Dict] = None
    confidence: Optional[float] = None


@dataclass
class TagResponseDTO:
    id: str
    label: str
    image_id: str
    points: Dict
    confidence: float
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False