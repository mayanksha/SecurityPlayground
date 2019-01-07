def extendZeroes(d, num):
    a = str(num)
    a = a[::-1]
    l = len(a) 
    for i in range(d-l):
        a += "0"
    a = a[::-1]
    return a
for i in range(10000):
    print(extendZeroes(4, i))
