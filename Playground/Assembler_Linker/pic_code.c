#include <stdio.h>
void bar() {};
static int count = 0;
void foo(void)
{
    bar();
    printf("Foobar!");
}
int main(){
	return 0;
}
