# src/reports/domain/entities/report_entity.py
from dataclasses import dataclass, field
from .base_entity import BaseEntity

@dataclass
class ReportEntity(BaseEntity):
    title: str = ""
    content: str = ""        # Puede ser Markdown o texto enriquecido
    project_id: str = ""
    author_id: str = ""
    results_summary: dict = field(default_factory=dict) # Resumen de hallazgos