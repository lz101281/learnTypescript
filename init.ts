function hello() : void { //void代表无
  const str: string = "hello world"
  console.log(str)
}
/* 
* tsc init.ts
* node init.js
*/

/* 
* 安装ts-node可以直接运行 npm install -g ts-node
*/
hello()


