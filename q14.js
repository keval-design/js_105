let task = ["write","sleep","read","watched","problem solving"]

let first_task = task.shift();
console.log(first_task)

let second_task = task.push("swimming");
console.log(second_task);

task.splice(5,1,'eating')

console.log(task)

