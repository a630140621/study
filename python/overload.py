import jieba
from collections import Counter


def start():
    words = get_words()
    c = Counter(exclude_words(words))
    print(c.most_common(100))


def get_words():
    file_path = 'overload.txt'
    with open(file_path, 'r', encoding='utf8') as f:
        data = f.read()
        seg_list = jieba.cut(data)
        return [word for word in seg_list if len(word) > 1]


def exclude_words(all_words):
    excluded_words = ['没有', '的话', '自己', '什么', '这个', '这样', '不过', '虽然', '那么', '如果', '可以', '还是', '他们',
                      '应该', '就是', '因为', '大人', '我们', '这种', '一个', '只是', '所以', '声音', '这么', '不会', '这里', '一样', '觉得']

    for word in all_words:
        if word in excluded_words:
            all_words.remove(word)

    return all_words


start()
