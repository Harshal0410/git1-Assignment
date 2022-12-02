let num = 13;
let bag = 0;
for(let i = 1;i<=num;i++){
	if(num%i == 0){
	bag++;
   }
}
if(bag == 2){
  console.log("Yes");
}
else{
  console.log("No");
}