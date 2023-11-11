//selection

// const para = document.getElementById('p1')
// const input = document.getElementById('input2')

// console.log(para.textContent)
// console.log(input)

// const paras = document.getElementsByTagName('p')
// const btn = document.getElementsByTagName('button')
// const btn1 = document.getElementById('button1')

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
// const all = document.querySelector('*')
// console.log(all.children)

const h3 = document.querySelector('h3')
// console.log(h3)
h3.style.backgroundColor = 'yellow'
// h3.style.textTransform = 'uppercase'
// h3.style.color = 'aliceblue'
// h3.style.border = '1px solid black'

h3.classList.add('h3-styles')
// h3.classList.add('h3-class')
const heart = document.querySelector('.h1span')
heart.classList.remove('h1span')
heart.textContent = ''

const newH2 = document.createElement('h2')
newH2.textContent = "I am new around here!"
// h3.append(newH2)
h3.prepend(newH2)
// h3.insertAdjacentElement('beforebegin', newH2)

// h3.before(newH2)
// h3.after(newH2)
// console.log(newH2)

const btn = document.querySelector('button')
btn.addEventListener('click', ()=> {
    console.log(document.querySelector('h1').innerText)
    console.log(textInput.value)

})

h3.addEventListener('mouseout', function() {
    console.log("Hello Bode, I am H3 and I have been doubly clicked")
})
// const toggler = ()=> {
// btn[0].classList.toggle('btn-class')
// }
// // document.body.style.backgroundColor = 'red'

textInput.addEventListener('change', ()=> {
    document.querySelector('h1').innerText = textInput.value
    // console.dir(textInput)
})
// let input
// textInput.addEventListener('change', ()=> {
//     input = textInput.value
//     // input = 7
//     // console.log(typeof(input))
// });

// let inputArr = input.split('').map((item)=> Number(item))
// console.log(inputArr)
// let newinput = []
// for (let i in inputArr) {
//     if(i % 2 == 0) {
//     newinput.push(inputArr[i])
//     }
//     }

//     const mode = (nums) => {
//             let element
//             let init = 0
//             for (let i = 0; i < nums.length; i++) { 
//                 let count = 0 
//                 for (let j = 0; j < nums.length; j++) { 
//                     if (nums[i] == nums[j]) 
//                         count++ 
//                 } 
          
//                 if (init < count) { 
//                     init = count 
//                     element = nums[i]
//                 } 
//             } 
          
//             return element
//         }

// mode(newinput) 

// btn[0].addEventListener('click', ()=> {
//     console.log('btn[0] clicked')
//     document.querySelector('h1').innerText = 7
// })


/*
1. have a list of things to do
2. make an input to type new todos
3. a button to add new todos
4. when button is clicked, the new to must show on the page
*/