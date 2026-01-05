import _ from 'lodash';
import './style.css';
import Icon from './bd.jpg';
import printMe from './print.js';
function component() {
  const element = document.createElement('div');

  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 加入样式
  element.classList.add('hello')
  // 加入图片
//   const myImage = new Image();
//   myImage.src = Icon;
//   element.appendChild(myImage);
  // 调用 printMe 函数
  const button = document.createElement('button');
  button.innerHTML = 'Click me and check the console!';
  button.onclick = printMe;
  element.appendChild(button);
  
  return element;
}

document.body.appendChild(component());