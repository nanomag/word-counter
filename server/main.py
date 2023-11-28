from fastapi import FastAPI
from pydantic import BaseModel

from services import WordCounter


app = FastAPI()


class RequestBody(BaseModel):
    text: str


@app.post("/words/count")
async def count_words(body: RequestBody):
    cleaned_text = body.text.split(" ")

    word_counter = WordCounter()
    words = word_counter.count_words(cleaned_text)
    sorted_count = word_counter.sort_by_count(words)

    return sorted_count
