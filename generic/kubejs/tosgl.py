#!/usr/bin/python3

import sys

text:list = list(sys.argv[1])
end = "//br"
text.append(end)
abc = {"a":"ᔑ", "b":"ʖ", "c":"ᓵ", "d":"↸", "e":"ᒷ", "f":"⎓",
       "g":"┫", "h":"〒", "i":"￤", "j":"⋮", "k":"ꖌ", "l":"ꖎ",
       "m":"ᒲ", "n":"リ", "o":"フ", "p":"i!", "q":"ᑑ", "r":"∷",
       "s":"ᓭ", "t":"勹", "u":"⚍", "v":"⍊", "w":"∴", "x":"冫",
       "y":"‖", "z":"∧", "&":"\\n"}
for i in range(len(text)):
    if text[i] != end:
        letter = text[i]
        if letter in abc:
            text.append(abc[letter])
        else:
            text.append(letter)
    else:
        text.remove(end)
        break

for i in range(len(text)//2):
    letter = text[0]
    text.remove(letter)

converted_list = map(str, text)
text = ''.join(converted_list)

print(str(text))
