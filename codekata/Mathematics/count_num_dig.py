#count number of digits of given number

n=int(input())
sum=0
rev=0
temp=n
count=0
while(temp!=0):
    dig=temp%10
    rev=rev*10+dig
    temp=temp/10
    count=count+1
for i in range(1,count,1):
    dig=rev%10
    temp=pow(dig,count)
    rev=rev/10
    sum+=temp
print(sum)



