import _ from 'lodash';
import './style.css';
import Icon from './bd.jpg';
function component() {
  const element = document.createElement('div');

  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 加入样式
  element.classList.add('hello')
  // 加入图片
  const myImage = new Image();
  myImage.src = Icon;
  element.appendChild(myImage);
  
  return element;
}

document.body.appendChild(component());