"use client";

import { countWordsFromContent, countWordsFromFile } from "@/services";
import { FormEvent, useState } from "react";

export default function Home() {
  const [wordsCount, setWordsCount] = useState<{} | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const content = formData.get("content");
    const file = formData.get("file");

    if (content) {
      countWordsFromContent(content)
        .then((res) => res.json())
        .then((data) => setWordsCount(data));
    } else if (file) {
      countWordsFromFile(file)
        .then((res) => res.json())
        .then((data) => setWordsCount(data));
    }
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
            className="border p-5 resize-none rounded-md"
          ></textarea>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="file"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 "
              id="file"
              name="file"
              type="file"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 py-2 rounded-md"
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
