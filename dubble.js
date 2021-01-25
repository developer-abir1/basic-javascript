
function evenfy (num){
    if(num % 2 == 0){
        
        console.log(num, "even number");
    }
    else{
        console.log(num, "odd number");
    }
    
}

function evelfy_all(nums){
    
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
   evenfy(num)
}
}

var nume = [41, 54, 78, 98, 21 , 9 , 68, 41, 219, ]
evelfy_all(nume);


// var friends = [7, 9, 11, 88 , 68 , 21, 74, 12];
// evelfy_all(friends);
