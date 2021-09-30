// do while
let i = 0
do {
    i += 2
    console.log(i)
} while( i < 10)

// while
let j = 0
while (j < 10) {
    j += 2
    console.log(j)
}

// for
for(let i = 0; i < 10; i++) {
    console.log(i)
}

// for-in 枚举对象中的属性
let window = {
    aaa: 'aaa',
    bbb: 'bbb'
}
for(const propName in window) {
    console.log(propName)
}

// for-of 遍历可迭代对象
for(const item of ["hello", "world", "for-of", 5]) {
    console.log(item)
}

// 原始值：最简单的数据（Undefined、Null、Boolean、Number、String、Symbol），保存原始值的变量是按值访问
let a = 123
// 引用值：由多个值构成，比如 Object、保存引用值得变量是按引用访问
let person = new Object()
person.name = "Nicholas"

// undefined & null: undefined 表示一个未经初始化的变量，null 表示一个空指针对象。undefined 值是有 null 派生而来的

// 等于和不等于 == & != 先进行强制类型转换，再确定操作数是否相等。null == undefined 为 true
// 全等和不全等 === & !== 比较两个操作数在不转换类型的前提下是否相等。 null ==== undefined 为 false
console.log("12" == 12) // true
console.log("12" === 12) // false