let str = "aman";
let isPalindrome = true;

let j = str.length-1;
for(let i = 0;i<j;i++){
   if(str[i] != str[j]){
	console.log("Not a palindrome");
	isPalindrome = false;
	break;
   }j--;
}
if(isPalindrome == true){
   console.log("The string is a palindrome");
}