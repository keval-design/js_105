let score = [65,,90,88,99,65,78,76,89,39];

for(let i=0; i<score.length; i++){

if (score[i]<40){

    score[i]+=20;
}
if(score>90){
    score[i] = 90;
}
}

let passCount = score.filter(score => score >= 50).length;

console.log(score);
console.log(passCount);