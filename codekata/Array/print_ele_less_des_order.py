#print all elements lesser than n in descending order

def function(N,n):
    a=[]
    for i in range(len(n)):
	    if(n[i]<N):
		    a.append(n[i])
    a.reverse()
    return(a)

N=int(input())
n=list(map(int,input().split()))
c=function(N,n)
print(*c)
