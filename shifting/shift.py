#!/usr/bin/python

import sys
import re

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))

args = sys.argv
ifil = args[1]
minX = float(args[2])
shiftX = float(args[3])


with open(ifil) as infile, open('./testo.txt', 'w') as outfile:
    for i,line in enumerate(infile):
        # Ignoring comments
        if not re.match('\/\/.*',line):
            # .setPoint(0, 420, 205);
            matchObj = re.match('.*.setPoint\(.+, ?-?(\d+) ?, ?-?(\d+).*\)',line)
            if matchObj:
                num = int(matchObj.group(1))
                if(num > minX): line = line.replace(str(num),str(num+shiftX))
            elif re.match('.*.setPoint\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for .setPoint call.")

            # .setPt(0, 420, 205);
            matchObj = re.match('.*.setPt\(.+, ?-?(\d+) ?, ?-?(\d+).*\)',line)
            if matchObj:
                num = int(matchObj.group(1))
                if(num > minX): line = line.replace(str(num),str(num+shiftX))
            elif re.match('.*.setPt\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for .setPt call.")

            # Match non setPoint
            numTups = re.findall('\d+ ?, ?\d+',line)
            i = 0;
            while i < len(numTups):
                nums = [int(s) for s in re.findall('\d+',numTups[i])]
                if nums[0] > minX:
                    line = line.replace(str(nums[0]),str(nums[0]+shiftX))
                i+=1
        outfile.write(line)


print("\Shifted version of " + ifil + " generated in testo.txt")
