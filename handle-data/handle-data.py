import pandas as pd
import numpy as np


'''
file: 输入文件
output: 输出文件
'''


def main(file, output):
    data_all = pd.read_csv(file)
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
    print(str(number))
    assert(len(number) == 19)

    # print(number)

    # 获取每一个次数的 DataFrame 并拼接需要保存的数据
    for n in range(len(number) - 1):
        # 行切分
        _df = df[number[n]: number[n + 1]]
        # 剔除异常值
        excluding_outliers_df = excluding_outliers(_df)
        # 保存
        save(n + 1, excluding_outliers_df, output)


def excluding_outliers(df):
    mean = df.mean()
    std = df.std()

    return df[(df - mean).abs() <= 3 * std]


def save(n, df, output):
    data = str(n) + '\n'
    _mean = df.mean().values  # 每一列的 平均数 list
    _max = df.max().values  # 最大值 list
    _min = df.min().values  # 最小值 list
    _std = df.std().values  # 标准差 list
    _median = df.median().values  # 中位数 list

    data += df.to_csv()
    data += 'mean, ' + ', '.join(str(x) for x in _mean) + '\n'
    data += 'max, ' + ','.join(str(x) for x in _max) + '\n'
    data += 'min, ' + ','.join(str(x) for x in _min) + '\n'
    data += 'std, ' + ','.join(str(x) for x in _std) + '\n'
    data += 'median, ' + ','.join(str(x) for x in _median) + '\n'
    with open(output, 'a') as f:
        f.write(data)


files = [('handle-data/0703.csv', 'handle-data/output_0703.csv'),
         ('handle-data/0710.csv', 'handle-data/output_0710.csv'),
         ('handle-data/0712.csv', 'handle-data/output_0712.csv'),
         ('handle-data/0713.csv', 'handle-data/output_0713.csv'),
         ('handle-data/0714.csv', 'handle-data/output_0714.csv'),
         ('handle-data/0715.csv', 'handle-data/output_0715.csv'),
         ('handle-data/0716.csv', 'handle-data/output_0716.csv'),
         ('handle-data/0717.csv', 'handle-data/output_0717.csv'),
         ('handle-data/0718.csv', 'handle-data/output_0718.csv')]

# 执行
for file in files:
    main(file[0], file[1])
