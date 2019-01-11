#include <stdio.h>
#include <stdlib.h>
void exec_bash(){
	char buffer[10] = "/bin/sh";
	system(buffer);
}
int main(){
	exec_bash();
}
