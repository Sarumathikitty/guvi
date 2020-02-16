#Write a program to convert celcius into Fahrenheit.
def celcius():
    A=float(input())
    fahrenheat= float((A*9/5)+32)
    fh=round(fahrenheat,2)
    return fh
res=celcius()
print(res)
