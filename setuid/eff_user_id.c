#include<stdio.h>
#include<unistd.h>
#include<stdlib.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
void getIDs(){
	printf(
			"         \t\tUID           GID  \n"
			"Real (Owner)      \t\t%d  Real      %d  \n"
			"Effective (Prileved Person) \t %d  Effective %d  \n",
			getuid (),     getgid (),
			geteuid(),     getegid()
			);
}

int main(void) {
	getIDs();
	/*int out = seteuid(1001);*/
	/*int out = setreuid(0, geteuid());
	 *if (out == -1){
	 *  printf("You don't have permissions to use 'setuid' function\n");
	 *  _exit(out);
	 *}*/
	/*getIDs();*/
	/*int fd = open("./s", O_RDONLY);
	 *if (fd == -1){
	 *  printf("Some issue opening the file!\n");
	 *  _exit(fd);
	 *}
	 *char buf[100];*/
	setreuid(getuid(), getuid());
	system("/usr/bin/cat a && bash -p");	
	/*int read_bytes = read(fd, buf, 10);*/
	printf("The buffer read =\n");
	/*close(fd);*/
}
