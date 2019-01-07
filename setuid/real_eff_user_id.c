#include<stdio.h>
#include<unistd.h>
/*#include <sys/types.h>
 *#include <sys/stat.h>
 *#include <fcntl.h>*/
	#include<stdio.h>
	#include<unistd.h>
	void printIDs(){
		printf("ruid = %d, euid = %d\n", getuid(), geteuid());
	}
	int main(){
		printIDs();
		int ret_val = setuid(0);
		if (ret_val == -1){
			perror("Errored!");
			_exit(-1);
		}
		printIDs();
		return 0;
	}
/*int main(void) {
 *  printf(
 *      "         UID           GID  \n"
 *      "Real      %d  Real      %d  \n"
 *      "Effective %d  Effective %d  \n",
 *      getuid (),     getgid (),
 *      geteuid(),     getegid()
 *      );
 *
 *  setuid(600);
 *
 *  printf(
 *      "         UID           GID  \n"
 *      "Real      %d  Real      %d  \n"
 *      "Effective %d  Effective %d  \n",
 *      getuid (),     getgid (),
 *      geteuid(),     getegid()
 *      );
 *  seteuid(600);
 *  printf(
 *      "         UID           GID  \n"
 *      "Real      %d  Real      %d  \n"
 *      "Effective %d  Effective %d  \n",
 *      getuid (),     getgid (),
 *      geteuid(),     getegid()
 *      );
 *
 *  setuid(1000);
 *
 *  printf(
 *      "         UID           GID  \n"
 *      "Real      %d  Real      %d  \n"
 *      "Effective %d  Effective %d  \n",
 *      getuid (),     getgid (),
 *      geteuid(),     getegid()
 *      );
 *
 *  setuid(0); // HOW DOES THIS SUCCEED IN SETTING THE EUID BACK TO 0
 *  printf(
 *      "         UID           GID  \n"
 *      "Real      %d  Real      %d  \n"
 *      "Effective %d  Effective %d  \n",
 *      getuid (),     getgid (),
 *      geteuid(),     getegid()
 *      );
 *    return 0 ;       
 *}*/
