from dataclasses import dataclass
from typing import Dict


@dataclass
class CreateReportCommand:
    title: str
    content: str
    project_id: str
    author_id: str
    results_summary: Dict


@dataclass
class UpdateReportCommand:
    id: str
    title: str
    content: str
    project_id: str
    author_id: str
    results_summary: Dict


@dataclass
class DeleteReportCommand:
    id: str