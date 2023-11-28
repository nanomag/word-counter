from constants import EXCLUDED_WORDS


class WordCounter:
    def count_words(self, text):
        words_counter = {}

        for word in text:
            cleaned_word = word.strip()
            is_valid_word = self._is_valid_word(cleaned_word)

            if is_valid_word:
                words_counter[cleaned_word] = words_counter.get(cleaned_word, 0) + 1

        return words_counter

    def sort_by_count(self, words):
        return {
            word: count
            for word, count in sorted(
                words.items(), key=lambda item: item[1], reverse=True
            )
        }

    def _is_valid_word(self, word):
        return word not in EXCLUDED_WORDS and word != ""
