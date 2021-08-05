// import $ from 'jquery'
// import addBorder from './custom.js';
// $('div').css({ width: '300px', height: '300px', background: 'blue' });
// addBorder();

/*
1.如果通过imports-loader修改了模块中this的指向,
那么imports-loader会自动将模块中的所有代码放到一个只调用函数中
(function () {
    // my module
}.call(window));
*/
/*
2.如果在模块中用到了import, 那么在ES Module的规范中
import语句必须写在最前面, 否则就会报错
*/
/*
3.所以如果通过imports-loader修改了模块中this的指向,
而在模块中又用到了import, 那么import就不在第一行了,
所以就报错了
* */

const $ = require('jquery')
$('div').css({ width: '300px', height: '300px', background: 'blue' })

console.log('this', this)
console.log('window', window)
