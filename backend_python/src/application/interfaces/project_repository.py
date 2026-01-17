from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.project_entity import Project


class ProjectRepository(ABC):
    @abstractmethod
    def save(self, project: Project) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[Project]:
        pass

    @abstractmethod
    def find_all(self) -> List[Project]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass