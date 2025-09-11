let greeting = document.getElementById('greeting');
console.log(greeting);


//Task
//Get all instances of <p>
let paras = document.getElementsByTagName('p');
console.log(paras);

for (para of paras) {
    // console.log(para);
    para.innerText = 'Booyah';
}