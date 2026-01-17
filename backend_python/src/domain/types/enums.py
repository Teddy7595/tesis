# src/core/types/enums.py
from enum import Enum

class ImageType(Enum):
    ORIGINAL = "original"
    PROCESSED = "processed"
    AUGMENTED = "augmented"

class ModelStatus(Enum):
    TRAINING = "training"
    READY = "ready"
    FAILED = "failed"