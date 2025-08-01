from fastapi import FastAPI, Request, Body
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from uvicorn import run
from api.router import router

app = FastAPI()

app.include_router(router)


if __name__=='__main__':
    run('main:app', port = 8000, reload=True)