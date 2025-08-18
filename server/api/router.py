from fastapi import APIRouter, Request, Body
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
from api.sandbox import safe_execute

router = APIRouter()


class Code(BaseModel):
    task_id: int
    code: str

@router.post('/execute')
def checkResult(request_data: Code):
    
    text = request_data.code
    id = request_data.task_id
    
    result = safe_execute(id, text)
    return result
