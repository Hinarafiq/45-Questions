let MyNumbers =[1,2,3,4,5,6,7,8,9];
for(let i=0; i < MyNumbers.length; i++){
    if (MyNumbers[i] == 1){
        console.log(`${MyNumbers[i]}st`);
    }
     else if (MyNumbers[i] == 2){
        console.log(`${MyNumbers[i]}nd`);
    }
     else if (MyNumbers[i] == 3){
        console.log(`${MyNumbers[i]}rd`);
    }
    else if (MyNumbers[i] >= 4 && MyNumbers[i] <= 9){
        console.log(`${MyNumbers[i]}th`);
    }
}