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

            # Pattern matching all Image constructors
            matchObj = re.match('.*Image\( ?.+ ?, ?.+ ?, ?.+ ?,.+, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?.*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(5))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(6))/oldHeight)*newHeight)
                for i in range(0,9):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Image\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Image call.")

            # Txt(0, HLEFT | VTOP, 10, 46, darkGrayPen, font, "instructions executed:");
            matchObj = re.match('.*Txt\( ?.+ ?,.+, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                for i in range(0,2):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Txt\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Txt call.")


            # InstructionMemory(10, 80, 100, 320);
            matchObj = re.match('.*InstructionMemory\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*InstructionMemory\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for InstructionMemory call.")

            # AnimatedClock(20, 410, 80, 30);
            matchObj = re.match('.*AnimatedClock\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*AnimatedClock\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for AnimatedClock call.")

            # Register(200, 210, 20, 40, TOP, "PC");
            matchObj = re.match('.*Register\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Register\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Register/InstructionRegister call.")

            # Component(200, 170, 30, 10, "mux 2");
            matchObj = re.match('.*Component\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Component\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Component call.")

            # .addPoint(110, 390);
            matchObj = re.match('.*.addPoint\( ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                for i in range(0,2):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*.addPoint\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for .addPoint call.")

            # Rectangle(activePipesLayer, 0, 0, redBrush, 180,390, -30,-6, 60,12, whitePen, font);
            matchObj = re.match('.*Rectangle\(.+,.+,.+,.+, ?(\d+) ?, ?(\d+) ?, ?-?(\d+) ?, ?-?(\d+) ?, ?(\d+) ?, ?(\d+) ?.*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(5))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(6))/oldHeight)*newHeight)
                for i in range(0,6):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Rectangle\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Rectangle call.")

            # Line(valuesLayer, ABSOLUTE, controlPen, 0,0, 370,135, 345,135, 345,160);
            matchObj = re.match('.*Line\(.+,.+,.+, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+) ?.*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(5))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(6))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(7))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(8))/oldHeight)*newHeight)
                for i in range(0,8):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*Line\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for Line call.")

            # .setPoint(0, 420, 205);
            matchObj = re.match('.*.setPoint\(.+, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                for i in range(0,2):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*.setPoint\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for .setPoint call.")

            # .setPt(0, 420, 205);
            matchObj = re.match('.*.setPt\(.+, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                for i in range(0,2):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*.setPt\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for .setPt call.")

            # ALU(490, 190, 40, 80);
            matchObj = re.match('.*ALU\( ?(\d+) ?, ?(\d+) ?, ?(\d+) ?, ?(\d+).*\)',line)
            if matchObj:
                newNums = []
                newNums.append((float(matchObj.group(1))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(2))/oldHeight)*newHeight)
                newNums.append((float(matchObj.group(3))/oldWidth)*newWidth)
                newNums.append((float(matchObj.group(4))/oldHeight)*newHeight)
                for i in range(0,4):
                    line = line.replace(matchObj.group(i+1),str(round(newNums[i])))
            elif re.match('.*ALU\(.*\)',line):
                print("Manual update needed at line " + str(i+1) + " for ALU call.")

        outfile.write(line)

print("\nScaled version of " + ifil + " generated in testo.txt")
