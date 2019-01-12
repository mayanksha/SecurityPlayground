xor %eax, %eax	;
push $0x68732f2f ;
push $0x6e69622f ;
mov %esp, %ebx	;
pushl %ebx;
mov %esp, %ecx;
mov $0x0b, %al;
int $0x80;



