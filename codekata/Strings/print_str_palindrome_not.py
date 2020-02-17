#print 1 for palindrome and 0 for not

n=str(input())
s=n[::-1]
if(s==n):
	print("1")
else:
	print("0")  
