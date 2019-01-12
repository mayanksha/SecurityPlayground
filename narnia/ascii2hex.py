#!/usr/bin/env python3
import sys
import argparse 
parser = argparse.ArgumentParser()
parser.add_argument("ascii_text", help="ascii text to be converted")
parser.add_argument("-x" ,"--shell_code", help="ascii text to be converted", action="store_true")
parser.add_argument("--endian", help="0 for little endian (default), 1 for big endian", default="0")
args = parser.parse_args()

def ascii2hex(ascii_text):
    # 0 => little endian
    # 1 => big endian
    arr = [str(hex(ord(i)))[2:] for i in ascii_text]
    if (args.endian == "0"):
        if (args.shell_code == True):
            return "".join(["\\x" + i for i in arr[::-1]]) 
        else:
            return " ".join(arr[::-1]) 
    else:
        if (args.shell_code == True):
            return "".join(["\\x" + i for i in arr]) 
        else:
            return "".join(arr) 
     
   
def hex2ascii(hex_val):
    return bytearray.fromhex(str(hex_val)).decode()

print(ascii2hex(args.ascii_text))

