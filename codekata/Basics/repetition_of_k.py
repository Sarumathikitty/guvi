#Given a number N and K print repetition of K

n,k=map(int,input().split())
a=list(map(int,input().split()))
l=len(a)
sum=0
for i in range(0,l):
    if(k==a[i]):
        sum=sum+1
if(sum<1):
    print(-1)
else:
    print(0)
       
