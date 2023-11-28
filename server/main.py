from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services import WordCounter


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RequestBody(BaseModel):
    content: str


@app.post("/words/count")
async def count_words(body: RequestBody):
    cleaned_text = body.content.split(" ")

    word_counter = WordCounter()
    words = word_counter.count_words(cleaned_text)
    sorted_count = word_counter.sort_by_count(words)

    return sorted_count
