import pandas as pd
import numpy as np


def main():
    data_all = pd.read_csv('handle-data/0710.csv')
    # print(data_all['0.3um'])
    df = pd.DataFrame([data_all['0.3um'], data_all['0.5um'], data_all['1.0um'],
                       data_all['2.0um'], data_all['5.0um'], data_all['10.0um'], data_all['Sample Number']]).T

    print('df.length = ' + str(df.shape[0]))

    # 获取 次数 分界线 应为 19 个数字
    length = df.shape[0]
    number = []
    for i in range(length):
        row = df.loc[i]
        if row['Sample Number'] == 1:
            number.append(i)
    number.append(length)
    assert(len(number) == 19)

    print(number)

    # 获取每一个次数的 DataFrame 并拼接需要保存的数据
    data = ''
    for n in range(len(number) - 1):
        data += str(n) + '\n' + '0.3um, 0.5um, 1.9um, 2.0um, 5.0um, 10.0um\n'
        # 行切分
        _df = df[number[n]: number[n + 1]]
        # _mean = _df.mean() # 每一列的 平均数
        # _max = _df.max() # 最大值
        # _min = _df.min() # 最小值
        _std = _df.std() # 标准差
        # _median = _df.median() # 中位数

        _df[] = np.nan



main()
