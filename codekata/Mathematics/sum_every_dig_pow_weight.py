//print sum of every digit to power of weight

#include<stdio.h>
#include<math.h>
int main(void)
{
  int n,dig,rev=0,count=0,i,sq,out=0;
  scanf("%d",&n);
  while(n!=0)
  {
    dig=n%10;
    rev=rev*10+dig;
    n=n/10;
    count=count+1;
  } 
  for(i=0;i<count;i++)
