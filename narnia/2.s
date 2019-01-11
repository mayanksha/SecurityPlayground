	.file	"2.c"
	.text
	.section	.rodata
.LC0:
	.string	"EGG"
	.align 4
.LC1:
	.string	"Give me something to execute at the env-variable EGG"
.LC2:
	.string	"Trying to execute EGG!"
	.text
	.globl	main
	.type	main, @function
main:
.LFB6:
	.cfi_startproc
	leal	4(%esp), %ecx
	.cfi_def_cfa 1, 0
	andl	$-16, %esp
	pushl	-4(%ecx)
	pushl	%ebp
	.cfi_escape 0x10,0x5,0x2,0x75,0
	movl	%esp, %ebp
	pushl	%ecx
	.cfi_escape 0xf,0x3,0x75,0x7c,0x6
	subl	$20, %esp
	subl	$12, %esp
	pushl	$.LC0
	call	getenv
	addl	$16, %esp
	testl	%eax, %eax
	jne	.L2
	subl	$12, %esp
	pushl	$.LC1
	call	puts
	addl	$16, %esp
	subl	$12, %esp
	pushl	$1
	call	exit
.L2:
	subl	$12, %esp
	pushl	$.LC2
	call	puts
	addl	$16, %esp
	subl	$12, %esp
	pushl	$.LC0
	call	getenv
	addl	$16, %esp
	movl	%eax, -12(%ebp)
	movl	-12(%ebp), %eax
	call	*%eax
	movl	$0, %eax
	movl	-4(%ebp), %ecx
	.cfi_def_cfa 1, 0
	leave
	.cfi_restore 5
	leal	-4(%ecx), %esp
	.cfi_def_cfa 4, 4
	ret
	.cfi_endproc
.LFE6:
	.size	main, .-main
	.ident	"GCC: (GNU) 8.2.1 20181127"
	.section	.note.GNU-stack,"",@progbits
