from dataclasses import dataclass
from typing import Dict, Optional


@dataclass
class CreateReportRequestDTO:
    title: str
    content: str
    project_id: str
    author_id: str
    results_summary: Dict


@dataclass
class UpdateReportRequestDTO:
    id: str
    title: Optional[str] = None
    content: Optional[str] = None
    project_id: Optional[str] = None
    author_id: Optional[str] = None
    results_summary: Optional[Dict] = None


@dataclass
class ReportResponseDTO:
    id: str
    title: str
    content: str
    project_id: str
    author_id: str
    results_summary: Dict
    created_at: str
    updated_at: Optional[str] = None
    is_deleted: bool = False