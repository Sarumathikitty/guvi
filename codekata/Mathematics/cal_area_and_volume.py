#Write a program to calculate total surface area and volume of cuboid

l,b,h=map(int,input().split())
sa=2*((l*b)+(l*h)+(b*h))
area=l*b*h
print(sa,area)
