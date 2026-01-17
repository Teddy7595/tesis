from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.tag_entity import TagEntity


class TagRepository(ABC):
    @abstractmethod
    def save(self, tag: TagEntity) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[TagEntity]:
        pass

    @abstractmethod
    def find_all(self) -> List[TagEntity]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass