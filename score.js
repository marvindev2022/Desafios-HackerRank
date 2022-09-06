let scores=[10,5,20,20,4,5,2,25,1]

function breakingRecords(scores) {
    // Write your code here

    let highestScore=scores[0]
    let lowestScore=scores[0]
    let countMax=0
    let countMin=0

    for ( let i of scores){
      if(i>highestScore){
        countMax+=1
        highestScore=i
      }else if( i < lowestScore){
        countMin+=1
        lowestScore=i
      }
    }
return [countMax,countMin]

}
console.log(breakingRecords(scores))