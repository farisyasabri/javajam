/*
// odd num using while loop
var num=0;
while (num<=40){
    if(num%2!=0){
        console.log(num);
        num++;
    }
    else
        num++;
}

// odd num using for loop

for(var num=0;num<=40;num++){
    if(num%2!=0)
        console.log(num);
} 
*/
// print reverse array using function
const nums=[24,423,13,22];
printReverse.apply(this,nums);

function printReverse(){
    for(var i = nums.length-1; i>=0;i--){
        console.log(nums[i]);
    }
}

//create an array of movie object
const movie = [["in brugs","frozen","mad max fury road","les miserables"][]]