#Given a number print suffix sum of the array

def function(N,s):
	sum,a=0,[]
	for i in range(N):
		sum=s[i]+sum
		a.append(sum)
	a.reverse()
	return(a)


N=int(input())
s=list(map(int,input().split()))
c=function(N,s)
print(*c)
