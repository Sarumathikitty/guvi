#Given a string and character find how many character repeated in string

s,x=map(str,input().split())
count=0
for i in range(len(s)):
	if(x==s[i]):
		count+=1
if(count>0):
	print(count)
else:
	print("-1")  
        
