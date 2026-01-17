from abc import ABC, abstractmethod
from typing import List, Optional

from ...domain.organization_entity import Organization


class OrganizationRepository(ABC):
    @abstractmethod
    def save(self, organization: Organization) -> None:
        pass

    @abstractmethod
    def find_by_id(self, id: str) -> Optional[Organization]:
        pass

    @abstractmethod
    def find_all(self) -> List[Organization]:
        pass

    @abstractmethod
    def delete(self, id: str) -> None:
        pass