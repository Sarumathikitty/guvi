#Given a number print even factors

N=int(input())
count=0
a=[]
for i in range(2,N+1):
	if(N%i==0):
		a.append(i)
for i in range(len(a)):
	if(a[i]%2==0):
		print(a[i],end=" ")      
