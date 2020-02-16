//print sum of squares of its digits

#include <stdio.h>
int main(void)
{
  int N,dig,sq,sum=0;
  scanf("%d",&N);
  while(N!=0)
  {
    dig=N%10;
    sq=dig*dig;
    sum=sum+sq;
    N=N/10;
  }
