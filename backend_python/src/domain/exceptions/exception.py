# src/domain/exceptions/exception.py
from typing import Optional

class DomainException(Exception):
    """Base exception class for domain-specific errors."""

    def __init__(self, message: str, code: Optional[str] = None):
        super().__init__(message)
        self.message = message
        self.code = code

    def __str__(self):
        if self.code:
            return f"[{self.code}] {self.message}"
        return self.message
