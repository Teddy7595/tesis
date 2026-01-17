from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.image_entity import ImageEntity


class ImageRepository(ABC):
    @abstractmethod
    def save(self, image: ImageEntity) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[ImageEntity]:
        pass

    @abstractmethod
    def find_all(self) -> List[ImageEntity]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass