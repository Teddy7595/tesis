from dataclasses import dataclass
from typing import Dict


@dataclass
class CreateTagCommand:
    label: str
    image_id: str
    points: Dict
    confidence: float


@dataclass
class UpdateTagCommand:
    id: str
    label: str
    image_id: str
    points: Dict
    confidence: float


@dataclass
class DeleteTagCommand:
    id: str