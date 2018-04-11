var prettyjson=require('prettyjson');
// 'use strict';
const fs=require('fs');


var options={
	noColor:true
};

fs.readFile('sample.json','utf8',(err,data)=>{
	if(err) throw err;
	let student=JSON.parse(data);
	console.log("THE JSON FILE IS : \n");
	console.log(prettyjson.render(student,options)+"\n");
	var op1=student['op'];
	var lhs1op=student['lhs']['op'];
	var lhs1lhs=student['lhs']['lhs'];
 	var lhs1rhsop=student['lhs']['rhs']['op'];
 	var lhs1rhslhs=student['lhs']['rhs']['lhs'];
 	var lhs1rhsrhs=student['lhs']['rhs']['rhs'];
 	var rhs1=student['rhs'];
	
// console.log(op1);
// console.log(lhs1op);
// console.log(lhs1lhs);
// console.log(lhs1rhsop);
// console.log(lhs1rhslhs);
// console.log(lhs1rhsrhs);
// console.log(rhs1);

var op21;
if(lhs1rhsop=="multiply")
	op21="*";
else
	if(lhs1rhsop=="add")
	op21="+";
		else
			if(lhs1rhsop=="subtract")
	op21="-";
			else
				if(lhs1rhsop=="divide")
	op21="/";

// console.log(op2);

var op20;
if(lhs1op=="multiply")
	op20="*";
else
	if(lhs1op=="add")
	op20="+";
		else
			if(lhs1op=="subtract")
	op20="-";
			else
				if(lhs1op=="divide")
	op20="/";


var op19="=";
console.log("THE EQUAION FORMED BY JSON DATA IS : ");
console.log(lhs1lhs+op20+"("+lhs1rhslhs+op21+lhs1rhsrhs+")"+op19+rhs1 +"\n");

var str2=rhs1;
// console.log(str2);
var str=lhs1lhs+op20+"("+lhs1rhslhs+op21+lhs1rhsrhs+")"+op19+rhs1;
// console.log(str);
for (var i = 0; i<str.length; i++)
{ if(str[i+1]=='+')
	str2="("+str2+"-"+str[i]+")";
	if(str[i+1]=='-')
		str2="("+str2+"+"+str[i]+")";
	if(str[i+1]=='/')
		str2=str2+"*"+lhs1rhsrhs;
	if(str[i+1]=='*')
		str2=str2+"/"+lhs1rhsrhs;

}
var str3="x="+str2;

console.log("THE TRANSFORMED EXPRESSION IS: ");
console.log(str3);
	
});
