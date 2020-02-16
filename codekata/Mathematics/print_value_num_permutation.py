#Given 2 numbers print value of npk permutation

n,k=map(int,input().split())
if(n>k):
	great=n
	small=k
else:
	great=k
	small=n
pro=1
for i in range(small):
	pro=pro*great
	great-=1
print(pro)
