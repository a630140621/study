import pandas as pd


def main(files_tumple):
    '''
    '''

    # 读取平均值数据,并保存到数组
    df_mean_data_all = []
    for file_tumple in files_tumple:
        df_mean_data_all.append(pd.read_csv(file_tumple[0]))

    # 读取 df 数组的每一列, 将其合并并分别保存
    df_mean_data_result = [pd.DataFrame(), pd.DataFrame(
    ), pd.DataFrame(), pd.DataFrame(), pd.DataFrame(), pd.DataFrame()]

    for df_mean_data in df_mean_data_all:
        df_mean_data_result[0] = pd.concat(
            [df_mean_data_result[0], df_mean_data['0.3um']], ignore_index=True, axis=1)
        df_mean_data_result[1] = pd.concat(
            [df_mean_data_result[1], df_mean_data['0.5um']], ignore_index=True, axis=1)
        df_mean_data_result[2] = pd.concat(
            [df_mean_data_result[2], df_mean_data['1.0um']], ignore_index=True, axis=1)
        df_mean_data_result[3] = pd.concat(
            [df_mean_data_result[3], df_mean_data['2.0um']], ignore_index=True, axis=1)
        df_mean_data_result[4] = pd.concat(
            [df_mean_data_result[4], df_mean_data['5.0um']], ignore_index=True, axis=1)
        df_mean_data_result[5] = pd.concat(
            [df_mean_data_result[5], df_mean_data['10.0um']], ignore_index=True, axis=1)

    for j in range(len(df_mean_data_result) - 1):
        save(df_mean_data_result[j], files_tumple[j][1])


def save(df, filename):
    print('save filename = ' + filename)
    df = df.T
    df.index = ['0703', '0710', '0712', '0713',
                '0714', '0715', '0716', '0717', '0718', '0719', '0720']
    df.columns = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18'.split(',')
    with open(filename + '.csv', 'w') as f:
        f.write(df.to_csv())


files_tumple = [
    ('handle-data/output_0703_mean.csv', 'handle-data/output_0703_mean_merge'),
    ('handle-data/output_0710_mean.csv', 'handle-data/output_0710_mean_merge'),
    ('handle-data/output_0712_mean.csv', 'handle-data/output_0712_mean_merge'),
    ('handle-data/output_0713_mean.csv', 'handle-data/output_0713_mean_merge'),
    ('handle-data/output_0714_mean.csv', 'handle-data/output_0714_mean_merge'),
    ('handle-data/output_0715_mean.csv', 'handle-data/output_0715_mean_merge'),
    ('handle-data/output_0716_mean.csv', 'handle-data/output_0716_mean_merge'),
    ('handle-data/output_0717_mean.csv', 'handle-data/output_0717_mean_merge'),
    ('handle-data/output_0718_mean.csv', 'handle-data/output_0718_mean_merge'),
    ('handle-data/output_0719_mean.csv', 'handle-data/output_0719_mean_merge'),
    ('handle-data/output_0720_mean.csv', 'handle-data/output_0720_mean_merge')
]

main(files_tumple)
