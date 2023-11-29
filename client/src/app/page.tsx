"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [wordsCount, setWordsCount] = useState<{} | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const content = formData.get("content");

    fetch("http://localhost:8000/words/count", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((data) => setWordsCount(data));
  }

  return (
    <main className="p-10 h-full">
      <h1 className="text-2xl font-bold text-center mb-10">Word counter</h1>

      <section className="flex flex-col md:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full md:w-1/2"
        >
          <textarea
            name="content"
            id="content"
            cols={30}
            rows={10}
            placeholder="Enter your content here..."
            className="border p-5"
          ></textarea>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 py-2"
          >
            Count
          </button>
        </form>

        {wordsCount ? (
          <div className="flex flex-col md:w-1/2 h-screen overflow-y-scroll">
            <h2 className="text-lg font-semibold mb-3">Words count</h2>

            <ul className="max-w-md space-y-1 list-disc list-inside">
              {Object.entries(wordsCount).map(([word, count]: any) => (
                <li key={word}>
                  {word}: {count}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No words count yet.</p>
        )}
      </section>
    </main>
  );
}
