from fastapi import APIRouter, Request, Body
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List


router = APIRouter()

@router.get('/')
def get():
    return JSONResponse({'result':'True'})

class Code(BaseModel):
    code: str
    func_name: str
    args: List[float]

@router.post('/check')
def checkResult(code: Code):
    text_code = code.code
    func_name = code.func_name
    args = code.args
    # return JSONResponse({'code': code,
    #                      'func_name': func_name,
    #                      'args': args})
    return {'message':'Получена функция',
            'Имя функции': func_name,
            'Код': text_code,
            'аргументы': args}

