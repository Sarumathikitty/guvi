#Given a number print sum of each dig to power of num of digits in input

n=int(input())
count=0
su=0
rev=0
temp=n
while(temp!=0):
    dig=temp%10
    rev=rev*10+dig
    temp=temp/10
    count+=1
for i in range(1,count):
    dig=rev%10
    temp=pow(dig,count)
    rev=rev/10
    su=su+temp
print(su)
   
