from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()


class RequestBody(BaseModel):
    text: str


@app.post("/words/count")
async def count_words(body: RequestBody):
    return {}
