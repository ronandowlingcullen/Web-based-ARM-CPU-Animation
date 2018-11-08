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
    for i,line in enumerate(infile):
        # Ignoring comments
        if not re.match('\/\/.*',line):
            # Pattern matching all Line2 constructors
            matchObj = re.match('.*Line2\([\s\S\d]* ?, ?[\s\S\d]* ?, ?[\s\S\d]* ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Line2\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Line2 call.")


            # Pattern matching all Font constructors
            matchObj = re.match('.*Font\([\s\S\d]* ?, ?(\d+) ?,.*\)',line)
            if matchObj:
                old = oldWidth
                new = newWidth
                if (newHeight/oldHeight) > (newWidth/oldWidth):
                    old = oldHeight
                    new = newHeight
                newNums = []
                newNums.append((float(matchObj.group(1))/old)*new)
                for i in range(0,1):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Font\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Font call.")


            # Pattern matching all Rectangle2 constructors
            matchObj = re.match('.*Rectangle2\(.+,.+,.+,.+, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?.*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Rectangle2\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Rectangle2 call.")


            # Pattern matching all SolidPen constructors
            matchObj = re.match('.*SolidPen\(.+, ?(\d+).*\)',line)
            if matchObj:
                old = oldWidth
                new = newWidth
                if (newHeight/oldHeight) > (newWidth/oldWidth):
                    old = oldHeight
                    new = newHeight
                newNums = []
                newNums.append((float(matchObj.group(1))/old)*new)
                for i in range(0,1):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*SolidPen\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for SolidPen call.")


            # Pattern matching all Button constructors
            matchObj = re.match('.*Button\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?.*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Button\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Button call.")

        outfile.write(line)
