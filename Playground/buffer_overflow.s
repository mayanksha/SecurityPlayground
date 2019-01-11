	.file	"buffer_overflow.c"
	.text
	.section	.rodata
.LC0:
	.string	"Welcome %s\n"
	.text
	.globl	func
	.type	func, @function
func:
	pushl	%ebp
	movl	%esp, %ebp
	subl	$136, %esp
	movl	8(%ebp), %eax
	movl	%eax, -124(%ebp)
	movl	%gs:20, %eax
	movl	%eax, -12(%ebp)
	xorl	%eax, %eax
	subl	$8, %esp
	pushl	-124(%ebp)
	leal	-112(%ebp), %eax
	pushl	%eax
	call	strcpy
	addl	$16, %esp
	subl	$8, %esp
	leal	-112(%ebp), %eax
	pushl	%eax
	pushl	$.LC0
	call	printf
	addl	$16, %esp
	nop
	movl	-12(%ebp), %eax
	xorl	%gs:20, %eax
	je	.L2
	call	__stack_chk_fail
.L2:
	leave
	ret
	.size	func, .-func
	.globl	main
	.type	main, @function
main:
	leal	4(%esp), %ecx
	andl	$-16, %esp
	pushl	-4(%ecx)
	pushl	%ebp
	movl	%esp, %ebp
	pushl	%ecx
	subl	$4, %esp
	movl	%ecx, %eax
	movl	4(%eax), %eax
	addl	$4, %eax
	movl	(%eax), %eax
	subl	$12, %esp
	pushl	%eax
	call	func
	addl	$16, %esp
	movl	$0, %eax
	movl	-4(%ebp), %ecx
	leave
	leal	-4(%ecx), %esp
	ret
	.size	main, .-main
	.ident	"GCC: (GNU) 8.2.1 20181127"
	.section	.note.GNU-stack,"",@progbits
