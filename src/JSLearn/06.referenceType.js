// Object
console.log("====================Object=====================")
let person = new Object() // 与 let person = {} 相同
person.name = "Nicholas"
person.age = 23

let persion = {
    name: "Nicholas",
    age: 23
}

function displayInfo(args) {
    let output = ""

    if(typeof args.name == "string") {
        output += "Name: " + args.name + "\n"
    }

    if(typeof args.age == "number") {
        output += "Age: " + args.age + "\n"
    }

    console.log(output)
}

displayInfo({
    name: "Nicholas",
    age: 29
})

displayInfo({
    name: "Grey"
})

// Array
console.log("====================Array=====================")
// let colors = new Array() // new Array(20)
let colors = new Array("red", "blue", "green")
console.log(colors)
console.log(colors.length)
colors.length = 2
console.log(colors)
console.log(colors[3])  // undefined
colors[5] = "red2"
console.log(colors)

console.log(Array.from("Matt")) // [ 'M', 'a', 't', 't' ]

const a1 = [1, 2, 3, 4]
console.log(Array.from(a1, function(x) {return x * 2}))

console.log(Array.of(1, 2, 3, 4))


if(colors instanceof Array) {
    console.log("instanceof array")
}

if(Array.isArray(colors)) {
    console.log("Array.isArray")
}

// 数组迭代器方法
const aKeys = Array.from(colors.keys())
const aValues = Array.from(colors.values())
const aEntries = Array.from(colors.entries())
console.log(aKeys)
console.log(aValues)
console.log(aEntries)

console.log(colors.toString())
console.log(colors.toLocaleString())

// 数组赋值和填充方法 copyWithin():按照指定范围浅复制数组中的内容  fill():向数组中插入全部或部分相同的值
const zeroes = [0, 0, 0, 0, 0]
console.log(zeroes.fill(5)) //[ 5, 5, 5, 5, 5 ]
console.log(zeroes.fill(6, 3)) //[ 5, 5, 5, 6, 6 ]
let ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// ints.copyWithin(5)
ints.copyWithin(0, 5)
console.log(ints)

// 数组迭代方法
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(numbers.every((item, index, array) => item > 2))
console.log(numbers.some((item, index, array) => item > 2))
console.log(numbers.filter((item, index, array) => item > 2))
console.log(numbers.map((item, index, array) => item * 2))
numbers.forEach((item, index, array) => {
    console.log(`${index}: ${item}`)
})

// 数组归并方法
let numbers2 = [1, 2, 3, 4, 5]
let sum = numbers.reduce((prev, cur, index, array) => prev + cur)
console.log(sum)