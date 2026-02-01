from fastapi import APIRouter


router = APIRouter(prefix="", tags=["chat_management"])

@router.get("/")
async def get_status():
    return {"status": "Chat service is running"}