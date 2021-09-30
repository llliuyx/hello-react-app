// 创建 Object 实例
let person = new Object()
person.name = "Nicholas"
person.age = 29
person.job = "Software Engineer"
person.sayName = function() {
    console.log(this.name)
}

person.sayName()

// 对象字面量
person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name)
    }
}

person.sayName()

// 对象数据属性
person = {}
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
})
console.log(person.name)
person.name = "hahaha"
console.log(person.name)

// 访问器属性
let book = {
    year_: 2017,
    edition: 1
}

Object.defineProperty(book, "year", {
    get() {
        return this.year_
    },
    set(newValue) {
        if(newValue > 2017) {
            this.year_ = newValue
            this.edition += newValue - 2017
        }
    }
})

console.log(book.year)
console.log(book.edition)
book.year = 2020
console.log(book.year)
console.log(book.edition)