#Given a string s convert into ascii values and print sum of numbers

s=input("")
words = s.split(" ")
result = {}
for word in words:
   result[word] = sum(map(ord,word))
totalSum = 0
sumForSentence = [result[word] for word in words]
print (' '.join(map(str, sumForSentence)))
