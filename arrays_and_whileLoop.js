// ARRAYS

let arr1 = [1, 4, 5, "mj", true]

// console.log(arr1)

// arr1.push(7)

// console.log(arr1)

let arr2 = []

arr2.push(3)

arr2.push(4, 78, "taofeeq", false)


// let poppedItems = []

// poppedItems.push(arr1.pop())
// console.log(arr1)
// console.log(poppedItems)

// poppedItems.push(arr1.pop())
// console.log(poppedItems)
// console.log(arr2)
// arr1.push(arr2[-1])
// console.log(arr1)
// console.log(arr1.at(-2))


/*
Define an empty array
Put some elements in the array
Remove some of the element from the end of the array
Hold the kemoved items in another array
Output the original array and the removed items array

*/




// console.log(arr1)

arr1.unshift("josh")

// console.log(arr1)

// arr1.unshift(9, "false", false)

// console.log(arr1)

let shiftedItem = arr1.shift()

// console.log(arr1)
// console.log(shiftedItem)

let str = "Monday is the best day of the week"

let splitStr = str.split()
let splitStr2 = str.split("")
let splitStr3 = str.split(" ")
let splitStr4 = str.split("e")


// console.log(str)
// console.log(splitStr)
// console.log(splitStr2)
// console.log(splitStr3)
// console.log(splitStr4)

// let arr5 = [1,2,3,4,5]

// let joinedStr = arr5.join("")

// let arr6 = ["nur", 5, 8, "dera"]

// console.log(joinedStr)
// console.log(arr6.join(''))
// console.log(arr6)

// arr6[3] = "deen"

// console.log(arr6)


// console.log(arr6.slice(1, 3))

// console.log(arr6)


// console.log(arr5.includes(4))


// THE WHILE LOOP

let arr5 = [1,2,3,4,5, 6, 7]

for (let i = 0; i <= arr5.length-1; i++) {
    console.log(arr5[i]* 2)
}

//------------------------------------------------

for (let i = arr5.length-1; i >= 0; i--) {
    console.log(arr5[i]* 2)
}

//-----------------------------------------------------
let i = 0
while (i <= arr5.length-1) {
    console.log(arr5[i] ** 2)
    i++
}

//------------------------------------------------------

let input = Number(prompt("Guess a number less than 10"))  

while(input > 10) {
    input = Number(prompt("Guess a number less than 10"))
    // break;
}
