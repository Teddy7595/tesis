from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.user_entity import User


class UserRepository(ABC):
    @abstractmethod
    def save(self, user: User) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[User]:
        pass

    @abstractmethod
    def find_all(self) -> List[User]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass