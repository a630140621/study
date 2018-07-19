# demo print some thing

typedef i32 int
typedef i64 long


enum Sex {
    MALE,
    FEMALE
}

struct Demo {
    1: optional int id = 0,
    2: string name,
    3: optional Sex sex
}

service HelloWorldService {
    void ping(),

    string echoSomeThing(1: Demo demo, 2: string name)
}