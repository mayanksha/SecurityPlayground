#include <stdio.h>
#include <stdlib.h>
#include <string.h>


// Compiled using gcc vuln.c -o vuln -fno-stack-protector -m32 -z execstack
void func(char *name)
{
    char buf[100];
    strcpy(buf, name);
    printf("Welcome %s\n", buf);
}

int main(int argc, char *argv[])
{
    func(argv[1]);
    return 0;
}
