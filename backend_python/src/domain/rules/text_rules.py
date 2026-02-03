# src/domain/rules/text_rules.py
import re
import uuid
from typing import Union

class TextRules:
    @staticmethod
    def is_empty(text: str) -> bool:
        """Check if a text variable is empty."""
        return not text or text.strip() == ""

    @staticmethod
    def has_less_than_one_char(text: str) -> bool:
        """Check if a text string has less than 1 character."""
        return len(text) < 1

    @staticmethod
    def is_valid_uuid(value: str) -> bool:
        """Check if the received value is a valid UUID."""
        try:
            uuid.UUID(value)
            return True
        except ValueError:
            return False

    @staticmethod
    def is_number(value: Union[str, int, float]) -> bool:
        """Check if the received value is a number, accepting it as text or numeric."""
        if isinstance(value, (int, float)):
            return True
        if isinstance(value, str):
            try:
                float(value)
                return True
            except ValueError:
                return False
        return False

    @staticmethod
    def validate_password(
        password: str,
        min_length: int = 8,
        require_upper: bool = True,
        require_lower: bool = True,
        require_digit: bool = True,
        require_special: bool = True
    ) -> bool:
        """Check if a password meets the specified characteristics."""
        if len(password) < min_length:
            return False
        if require_upper and not re.search(r'[A-Z]', password):
            return False
        if require_lower and not re.search(r'[a-z]', password):
            return False
        if require_digit and not re.search(r'\d', password):
            return False
        if require_special and not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
            return False
        return True

    @staticmethod
    def is_valid_email(email: str) -> bool:
        """Check if the received string is a valid email address."""
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(email_regex, email) is not None
