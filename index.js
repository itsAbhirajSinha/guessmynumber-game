console.log('connected')

const randnum = Math.floor(Math.random() * 10 + 1)
console.log(randnum)
const btn = document.getElementsByClassName('btn')[0] //to access button
const score= document.getElementsByClassName('score')[0]
const form = document.getElementsByClassName('form')[0]  //accesing from to reset 
const notice =document.getElementsByClassName('notice')[0] //access notice to change innerText
var count=0;


btn.addEventListener('click', function (e) {
    e.preventDefault();
    const num = document.getElementById('num').value
    if (randnum > num) {
        notice.innerText="Try Bigger Number"
        form.style.borderColor = "red"
        count++;
        score.innerText=count
    }
    else if (randnum == num) {
        notice.innerText="Congrats 🎉"
        form.style.borderColor = "green"
   score.innerText=count }
    else {
        notice.innerText='Try smaller number ⏭️'
    form.style.borderColor = "red"
    count++;
score.innerText=count}
    form.reset()

})