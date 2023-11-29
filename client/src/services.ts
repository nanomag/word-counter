export async function countWordsFromContent(
  content: FormDataEntryValue
): Promise<any> {
  return fetch("http://localhost:8000/words/count", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });
}

export async function countWordsFromFile(
  file: FormDataEntryValue
): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  return fetch("http://localhost:8000/files/count", {
    method: "post",
    body: formData,
  });
}
