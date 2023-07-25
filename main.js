var arr=parseInt(prompt("Enter a array length"));
var a=[];

for(let i=0;i<arr;i++){
	a[i]=parseInt(prompt("Enter a "+(i+1)+"value"));
}
document.write("a="+a+"<br>"+"<br>");

var arr=parseInt(prompt("Enter a array length"));
var b=[];
for(let i=0;i<arr;i++){
	b[i]=parseInt(prompt("Enter  b "+(i+1)+"value"));
}
document.write("b="+b+"<br>"+"<br>");
a.push(b);
document.write("combine two arrays"+a);
console.log(a);
