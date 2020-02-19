#Given a number N print yes for composite number

n=int(input())
counter=0
prime=0
for i in range(1,n):
    if((n%i)==0):
        prime=1
        break
if(prime==0):
    print("yes")
else:
    print("no")
  
