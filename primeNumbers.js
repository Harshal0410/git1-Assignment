let num = 13;
let isPrime = true;
for(let i = 1;i<num;i++){
   if(num == 2 || num == 1){
	console.log("Yes");
	isPrime = false;
	break;
   }
   if(num%2 == 0){
	console.log("No');
	isPrime = false;
	brek;
   }
}
if(isPrime == true){
  console.log("Yes");
}