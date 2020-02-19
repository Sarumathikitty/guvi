#Check username and password

user_name="saru"
password="1998"
output=hash(password)
i=0
while(i<5):
    user=input("enter the password:")
    new_password=hash(user)
    if(output==new_password):
        print("ok")
        exit()
    else:
        i=i+1
exit()        
