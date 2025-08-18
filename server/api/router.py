from fastapi import APIRouter, Request, Body
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
from api.sandbox import safe_execute

router = APIRouter()


class Code(BaseModel):
    task_id: int
    code: str
    func_name: str  # Name of user's function

@router.post('/execute')
def checkResult(request_data: Code):
    
    id = request_data.task_id
    text = request_data.code
    func_name = request_data.func_name

    
    result = safe_execute(id, text, func_name)
    return result
