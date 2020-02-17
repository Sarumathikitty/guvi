#Given a string print yes if its a palindrome

s=str(input())
l=s[::-1]
if(s==l):
	print("yes")
else:
	print("no")  
