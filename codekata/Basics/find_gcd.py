#find gcd of n and m

n,k=map(int,input().split())
if(n>k):
    great=n
else:
	great=k
for i in range (1,great+1):
	if(n%i==0 and k%i==0):
		gcd=i
print(gcd)
