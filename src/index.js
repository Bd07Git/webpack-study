import _ from 'lodash';
import './style.css';
function component() {
  const element = document.createElement('div');

  // lodash 现在使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 加入样式
  element.classList.add('hello')
  
  return element;
}

document.body.appendChild(component());
