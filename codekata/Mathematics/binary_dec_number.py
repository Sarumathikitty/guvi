//Given a number binary convert into decimal number

#include<stdio.h>
#include<math.h>
int main(void)
{
  int n,i=1,dig,sum=0,ans;
  scanf("%d",&n);
  while(n!=0)
   {
     dig=n%10;
     if(dig==1)
     {
       ans=pow(i,dig);
       sum=ans+sum;
