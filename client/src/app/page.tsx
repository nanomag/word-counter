"use client";

import { FormEvent } from "react";

export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-xl text-center mb-10">Word counter</h1>

      <section className="columns-2">
        <form className="flex flex-col gap-5">
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
            Default
          </button>
        </form>

        <ul>
          <li>Word: 1</li>
        </ul>
      </section>
    </main>
  );
}
