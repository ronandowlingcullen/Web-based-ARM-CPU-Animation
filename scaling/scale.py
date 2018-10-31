#!/usr/bin/python

import sys
import re

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))

args = sys.argv
ifil = args[1]
oldWidth = float(args[2])
newWidth = float(args[3])
oldHeight = float(args[4])
newHeight = float(args[5])


with open(ifil) as infile, open('./testo.txt', 'w') as outfile:
    for line in infile:
        numStrings = re.findall('\d+, \d+',line)
        newNums = []
        for tuple in numStrings:
            xy = re.findall('\d+',tuple)
            x = float(xy[0])
            y = float(xy[1])
            if ((x >= 10.0) & (y >= 10.0)) | ((x >= 10.0) & (y==0)) | ((x==0) & (y >= 10.0)):
                x = (x/oldWidth)*newWidth
                y = (y/oldHeight)*newHeight
                newStr = str(round(x)) + ", " + str(round(y))
                newNums.append(newStr)
            else:
                newNums.append(tuple)

        # numbers = list(map(float,numStrings))
        # newNums = [i * 2 for i in numbers]
        tups = zip(numStrings,newNums)
        for numString,newNum in tups:
            line = line.replace(numString, str(newNum))
        outfile.write(line)


print(newNums)
