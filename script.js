const inputBox = document.getElementById('input-box');
const list = document.getElementById('list');
alert(`Добро пожаловать на наш сайт для записи списка задач! 
Здесь вы можете легко и удобно создавать и удалять свои задачи. 
Начните прямо сейчас и станьте более продуктивным!`);
function save() {
    localStorage.setItem('data', list.innerHTML);
}

function show() {
    list.innerHTML = localStorage.getItem('data');
}

function addTask() {
    if (inputBox.value === '') {
        alert('Вы можете написать что-то');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    save();
}

list.addEventListener(
    'click',
    function (e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            save();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            save();
        }
    },
    false
);

show();

window.onbeforeunload = function () {
    return 'Спасибо, что обратились к нам. До скорых встреч!';
};
