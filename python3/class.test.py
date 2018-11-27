class A:
    a = 'a'


class B:
    def __init__(self):
        self.b = 'b'


a1 = A()
a2 = A()
A.a = "A"
a1.a = "a1"
print(f"A.a = {A.a}")
print(f"a1.a = {a1.a}")
print(f"a2.a = {a2.a}")


b1 = B()
b2 = B()
print(f"b1.b = {b1.b}")
print(f"b2.b = {b2.b}")