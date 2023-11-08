//selection

// const para = document.getElementById('p1')
// const input = document.getElementById('input2')

// console.log(para.textContent)
// console.log(input)

const paras = document.getElementsByTagName('p')
const btn = document.getElementsByTagName('button')

// console.log(paras)
// btn[0].innerText = 'Register'
// console.log(btn[0].innerText)

// const inputs = document.getElementsByClassName('input-class')

// console.log(inputs[0])


const textInput = document.querySelector('input[type= text]')
const textPara = document.querySelector('p')
const userInput = document.querySelector('.input-class')
const userPara = document.querySelector('#p1')
const textInputs = document.querySelectorAll('input[type= text]')
const all = document.querySelector('*')
// console.log(all.children)

const h3 = document.querySelector('h3')
console.log(h3)
h3.style.backgroundColor = 'yellow'

// h3.classList.add('h3-class')

// const toggler = ()=> {
// btn[0].classList.toggle('btn-class')
// }
// // document.body.style.backgroundColor = 'red'

textInput.addEventListener('input', ()=> {
    document.querySelector('h1').innerText = textInput.value
})