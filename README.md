# Word counter

Create a small API that counts words which:

The POST endpoint Accepts as input:

- A common words file
- Text containing words to count

Output a json with:
The word counts of the input text after the 100 most common English words have been removed, sorted by count descending and formatted nicely.

Example Output:

```
{
  "Alice": 10203,
  "Foo": 12,
  "Bar": 11,
  "Baz": 3,
  "Longword": 1
}
```

The application should read a common words file at startup. Here is a list of 1000 common English words that the application should read at startup. https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt

For testing purposes the input text should be the complete text of Alice in Wonderland:
http://websites.umich.edu/~umfandsf/other/ebooks/alice30.txt
