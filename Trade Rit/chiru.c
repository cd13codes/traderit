#include<stdio.h>

// Structure to define student with fields name, reg_no,
//age and 5 subject marks(as grade points 10,9,8..
//Calculate the sgpa of each student and print student
//details with name starting with 'A','H'and sgpa >=9

struct student
{
char name[10];
char reg_no[10];
int age;
int marks[5];
float sgpa;
};
//alias for student structure
typedef struct student stud;
//Function to read student details
void read_student(stud *s)
{int i;
printf("Enter student name\n");
scanf("%s",s->name);
printf("Enter student reg number\n");
scanf("%s",s->reg_no);
printf("Enter student age \n");
scanf("%d",&s->age);
printf("Enter 5 marks\n");
for(i=0;i<5;i++)
scanf("%d",&s->marks[i]);
s->sgpa= 0;
for(i=0;i<5;i++)
s->sgpa+=s->marks[i];
s->sgpa/=5;
}
//Function to write student details
void print_student(stud s)
{
printf("Student details are :\n");
printf("Name :%s\n",s.name);
printf("Reg Num :%s\n",s.reg_no);
printf("Age :%d\n",s.age);
printf("SGPA :%f\n",s.sgpa);
}
void main()
{//Read n student details and print student details with sgpa >9
int i,n;
stud s1[10];
printf("How many students\n");
scanf("%d",&n);
for(i=0;i<n;i++)
{
read_student(&s1[i]);
}
printf("Student names starting with 'a' are\n");
for(i=0;i<n;i++)
{
if(s1[i].name[0]=='a')
print_student(s1[i]);
}
printf("Student names  with SGPA >9\n");
for(i=0;i<n;i++)
{
if(s1[i].sgpa>=9)
print_student(s1[i]);
}
}