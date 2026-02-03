# src/domain/factories/user_factory.py
from datetime import datetime
from ..entities.user_entity import User
from ..rules.text_rules import TextRules
from ..exceptions.exception import DomainException

CHAR_LIMIT:int = 300

class UserFactory:
    @staticmethod
    def create(name: str, email: str, password: str, username: str, sci_role: str) -> User:
        """Create a new User instance."""
        UserFactory.validate_strings(name, "Name")
        UserFactory.validate_strings(username, "Username")
        UserFactory.validate_email(email)
        UserFactory.validate_password(password)

        return User(
            name=name,
            email=email,
            password=password,
            username=username,
            sci_role=sci_role
        )

    @staticmethod
    def update(user: User, **kwargs) -> User:
        """Update an existing User instance with provided fields."""
        valid_fields = {'name', 'username', 'sci_role', 'bio'}
        for key, value in kwargs.items():
            if key in valid_fields:
                UserFactory.validate_strings(value, key.capitalize())
                setattr(user, key, value)
        user.updated_at = datetime.now()
        return user
    
    @staticmethod
    def validate_strings(value:str, property:str) -> None:
        """Validate that string fields are not empty and meet minimum length requirements."""
        if TextRules.is_empty(value): 
            raise DomainException(f"[{property} Exception]: Value cannot be empty.")
        if TextRules.has_less_than_one_char(value):
            raise DomainException(f"[{property} Exception]: Value must have at least one character.")
        if len(value) > CHAR_LIMIT:
            raise DomainException(f"[{property} Exception]: Value exceeds character limit of {CHAR_LIMIT}.")
        
    @staticmethod
    def validate_email(email:str) -> None:
        """Validate email format."""
        if not TextRules.is_valid_email(email):
            raise DomainException("[Email Exception]: Invalid email format.")
        
    @staticmethod
    def validate_password(password:str) -> None:
        """Validate password strength."""
        if not TextRules.validate_password(
            password,
            min_length=4,
            require_upper=False,
            require_lower=False,
            require_digit=False,
            require_special=False
        ):
            raise DomainException("[Password Exception]: Password does not meet strength requirements.")