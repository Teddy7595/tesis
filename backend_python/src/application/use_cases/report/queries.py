from dataclasses import dataclass


@dataclass
class GetReportByIdQuery:
    id: str


@dataclass
class GetReportsByProjectQuery:
    project_id: str


@dataclass
class GetAllReportsQuery:
    pass