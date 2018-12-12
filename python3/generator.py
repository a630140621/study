def countdown(n):
    print('begin')
    while n > 0:
        print('before yield')
        yield n
        print('end yield')
        n -= 1
    print('Done!')


if __name__ == '__main__':
    c = countdown(3)
    print(next(c))
    print(next(c))