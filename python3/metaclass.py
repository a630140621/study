# # metaclass 是类的模板，所以必须从 `type` 类型派生：
# class ListMetaclass(type):
#     def __new__(cls, name, bases, attrs):
#         attrs['metaclass'] = 'ListMetaclass'
#         return type.__new__(cls, name, bases, attrs)

# class Demo(metaclass=ListMetaclass):
#     pass

# d = Demo()
# print(d.metaclass)


'''
详细解释元类
'''

# class MyMeta(type):
#     def __new__(meta, name, bases, dct):
#         """
#         this is new doc
#         """
#         print('-----------------------------------')
#         print(f"Allocating memory for class {name}")
#         print(meta)
#         print(name)
#         print(bases)
#         print(dct)
#         return super().__new__(meta, name, bases, dct)
#         # return type.__new__(meta, name, bases, dct)

#     def __init__(cls, name, bases, dct):
#         print('-----------------------------------')
#         print(f"Initializing class {name}")
#         print(cls)
#         print(name)
#         print(bases)
#         print(dct)
#         super().__init__(name, bases, dct)
#         # type.__init__(cls, name, bases, dict)
#         # type.__dict__['__init__'].__get__(cls)(name, bases, dct)


# class MyClass(metaclass=MyMeta):
#     barattr = 2

#     def __init__(self):
#         a = 1
#         self.b = 2

#     def foo(self, param):
#         pass


'''
使用元类实现单例模式
'''
# class MetaSingleton(type):
#     instance = None

#     def __call__(cls, *args, **kwargs):
#         """
#         this is comment
#         """
#         print('in call method')
#         if cls.instance is None:
#             cls.instance = super().__call__(*args, **kwargs)
#             # cls.instance = type.__dict__['__call__'].__get__(cls)(*args, **kwargs)
#             # cls.instance = type.__call__(cls, *args, **kwargs)

#         print(cls.instance)
#         return cls.instance


# class Foo(metaclass=MetaSingleton):
#     def __init__(self, a, b):
#         self.a = a
#         self.b = b

# a = Foo(1, 2)
# b = Foo(3, 4)
# assert a is b
# print(f"a.a = {a.a} a.b = {a.b} b.a = {b.a} b.b = {b.b}")
# print(type(Foo))
# print(Foo.__call__)


class A:
    def __init__(self):
        self.a = 'a'

class B:
    a = 'a'

a1 = A()
a2 = A()
print(f"a1 = {a1.a}")
print(f"a2 = {a2.a}")
a2.a = 'b'
print(f"a1 = {a1.a}")
print(f"a2 = {a2.a}")