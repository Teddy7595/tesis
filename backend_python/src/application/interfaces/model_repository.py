from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.model_entity import ModelEntity


class ModelRepository(ABC):
    @abstractmethod
    def save(self, model: ModelEntity) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[ModelEntity]:
        pass

    @abstractmethod
    def find_all(self) -> List[ModelEntity]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass