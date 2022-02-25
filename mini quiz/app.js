const correctAnswers = ['50', 'p,n,e', '365', 'cell', '6', 'He rested'];
const form = document.querySelector('.quiz');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value, form.question5.value, form.question6.value];
//check answers
userAnswers.forEach((answer, index)=>{
    if (answer === correctAnswers[index]){
        score += 1;
    }
});

console.log(score);

});

