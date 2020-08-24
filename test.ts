/* 
* Static Typing 静态类型  
定义类型不可改变
继承类型方法
*/


/* 基础静态类型 */
const count: number = 1.12
const str: string = "this is string"
// null, undefined, boolean, void, symbol
console.log(count)



/* 对象静态类型 */
/* 对象 */
const man : {
  name: string,
  age: number
} = {
  name: '李X',
  age: 32
}

/* 数组 */
const students : string [] = ["小学生", "中学生", "大学生"]
students.map(item => console.log("这是一个" +item))

/* 类 */
class Teachers{
  name : string
  ask : string
}
const teacherMa : Teachers = new Teachers()

console.log(teacherMa)
/* 函数 */
const seeYou : () => string = () =>  "tomorrow"

interface Person {
  name: string,
  age: number,
}

const whiteFiveFive: Person = {
  name: '五五开',
  age: 32.32
}

console.log(`${whiteFiveFive.name}今年${whiteFiveFive.age.toFixed()}岁`)


function getTotal(one : number, two : number) : number {
      return one + two
}
/* 
* const total = getTotal('1', 2)  error
*/
const total = getTotal(1, 2)  


function errorFunction() : never {
  throw new Error()
  console.log("success")  //永远执行不到
}


function add ({one, two} : {one : number, two : number}) : number{
    return one + two
}

console.log(add({one:3, two: 4}))

const stringArray : string [] = ["1", "2", "3"]
const arr : (string | number) [] = [1, "2"]


/* type alias */ 
type Lady = { name : string, age : number}
const women : Lady = {name: "Jane", age: 15} 

class Madam {
  name : string 
  age : number
}
const sisters : Madam[] = [{name: "Jane", age:12}]

/* 元组 */
// const testArr : (string | number) [] = [1, "2"]
const testArr : [string, number] = ["2", 1]

/* interface */
interface Girl {
  name : string
  age : number
  bust ?: number
  [propname: string] : any
  say() : string
}

const getResume = (girl: Girl) : void => {
   console.log(girl.name + "今年" + girl.name + "岁")
}

class hong implements Girl {
  name = '小红'
  age = 12
  say() {
    return 'hi'
  }
}

interface Teacher extends Girl {
  teach(): string
}




