#!/usr/bin/python3
# -*- coding:utf8 -*-

import jieba  # 中文分词库
import jieba.analyse  # 词频
from collections import Counter  # 统计单词出现的次数
from wordcloud import WordCloud  # 词云
import matplotlib.pyplot as plt  # 绘图
import re


def start():
    text = get_content()
    # 去掉标点符号等
    punctuation_pattern = re.compile(
        '[\s+\.\!\/_,$%^*(+\"\']+|[+——！，。？“”、~@#￥%……&*（）(\d+)]+')
    text = punctuation_pattern.sub("", text)

    # 分词
    all_words = get_cut_words(text)
    # 清洗数据
    excluded_words = exclude_words(all_words)

    # 统计
    # c = Counter(excluded_words)
    # print(c.most_common(50))

    # 此处与上面统计的词出现数量无关
    # 获取词频
    # word_frequency = get_word_frequency(text)

    # 生成词云
    data = r' '.join(excluded_words)
    generate_word_cloud(data)


def get_content():
    report = open(r'D:\projects\study\python3\report.txt', encoding='utf8')
    content = report.read()
    report.close()
    return content


# 2个字以上
def get_cut_words(text):
    words = [word for word in jieba.cut(text, cut_all=False) if len(word) >= 2]
    return words


def exclude_words(all_words):
    need_exclude_words = ['中国', '国家', '世界', '我国', '政府', '提高', '全面', '推动']
    for word in all_words:
        if word in need_exclude_words:
            all_words.remove(word)

    return all_words


def get_word_frequency(text):
    return jieba.analyse.extract_tags(text, topK=100, withWeight=True)

# 生成词云


def generate_word_cloud(text):
    # font = r'D:\projects\study\python3\SourceCodeVariable-Italic.ttf'
    font = r'C:\Windows\Fonts\simfang.ttf'

    wordcloud = WordCloud(font_path=font,max_font_size=40).generate(text)
    plt.figure()
    plt.imshow(wordcloud, interpolation="bilinear")
    plt.axis("off")
    plt.show()


start()
