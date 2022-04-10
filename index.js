// Code your solutions in this file
const writeCards=(arr, eventType)=>{
    const newArr = []
    for (const name of arr) {
        newArr.push(`Thank you, ${name}, for the wonderful ${eventType} gift!`)
    }
    console.log(newArr);
    return newArr;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


const countDown=(positiveInt)=>{
    if (positiveInt <= 0) {
        return "It's not a positive integer!";           
    }
    while (positiveInt >= 0) {
        console.log(positiveInt);
        positiveInt--;
    }
}

countDown(10);