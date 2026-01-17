from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.report_entity import ReportEntity


class ReportRepository(ABC):
    @abstractmethod
    def save(self, report: ReportEntity) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[ReportEntity]:
        pass

    @abstractmethod
    def find_all(self) -> List[ReportEntity]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass