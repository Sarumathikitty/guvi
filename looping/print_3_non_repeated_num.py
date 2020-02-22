#find 3 non repeating number

n=int(input())
nrn=[]
np=[]
l=list(map(int,input().split()))
for i in range(len(l)):
    for j in range(i+1,len(l)):
        if l[i]==l[j]:
            np.append(l[i])
            break
    else:
        nrn.append(l[i])
if(len(np)>0):
    for i in np:
        c=nrn.index(i)
        nrn.pop(c)
if len(nrn)>=2:
    print(nrn[2])
else:
    print('none')
