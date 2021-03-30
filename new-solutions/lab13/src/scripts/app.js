import {greet} from './sayHello.js';

window.addEventListener('load',()=>{
    document.getElementById('welcome-message').innerHTML = greet('Chris');
});
