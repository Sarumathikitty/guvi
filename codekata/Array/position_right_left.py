#print position of first number from right to left

n=int(input())
count=0
while(n>0):
	d=n%10
    count+=1
    n=int(n/10)
    if(d==1):
		print(count)
        break
