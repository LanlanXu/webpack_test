/*
 * @Author: llxu7
 * @Date: 2022-05-16 11:00:10
 * @LastEditors: llxu7
 * @LastEditTime: 2022-05-16 14:23:56
 * @Description: 
 * @FilePath: \vue-with-webpack-dev-server-webpack4\src\requireContext\index.js
 */
let obj = require.context('./img/', false, /.+\.jpeg$/)
console.log(typeof obj, obj.keys())
let arr = []
obj.keys().forEach((item)=>{
    console.log(item.replace(/\.\//,''))
    let file = require('./img/' + item.replace(/\.\//,''))
    arr.push(file)
})
export default arr