
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(1, 2, 3, 4, 5);
let array3 = Array.of(1, 2, 3, 4, 5);

function getMonthName(monthNumber) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return months[monthNumber];
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('arrayElement').textContent = array1[4];
    array1[4] = 10;
    document.getElementById('arrayElement').textContent += ", Измененный элемент: " + array1[4];

    let arrayElementsList = document.getElementById('arrayElements');
    for (let i = 0; i < array1.length; i++) {
        let li = document.createElement('li');
        li.textContent = array1[i];
        li.onmouseover = () => {
            li.textContent += ` (Длина массива: ${array1.length})`;
        };
        li.onmouseout = () => {
            li.textContent = array1[i];
        };
        arrayElementsList.appendChild(li);
    }

    let arrayElementsForList = document.getElementById('arrayElementsFor');
    for (let i = 0; i < array1.length; i++) {
        let li = document.createElement('li');
        li.textContent = array1[i];
        arrayElementsForList.appendChild(li);
    }

    let array4 = [6, 7, 8, 9, 10];
    let mergedArray = array1.concat(array4);
    let mergedArrayList = document.getElementById('mergedArray');
    for (let i = 0; i < mergedArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = mergedArray[i];
        mergedArrayList.appendChild(li);
    }

    let removedElement = mergedArray.pop();
    document.getElementById('removedElement').textContent = removedElement;

    let removedElement2 = mergedArray.pop();
    document.getElementById('removedElement2').textContent = removedElement2;

    mergedArray.unshift(0);
    let modifiedArrayList = document.getElementById('modifiedArray');
    for (let i = 0; i < mergedArray.length; i++) {
        let li = document.createElement('li');
        li.textContent = mergedArray[i];
        modifiedArrayList.appendChild(li);
    }

    let today = new Date();
    let dateFormatted = today.getDate() + ' ' + 
                        getMonthName(today.getMonth()) + ' ' + 
                        today.getFullYear() + ' года';
    document.getElementById('currentDate').textContent = dateFormatted;


    window.calculateProduct = function() {
        let num1 = Math.floor(Math.random() * 51);
        let num2 = Math.floor(Math.random() * 51);
        let product = num1 * num2;
        alert(`Произведение чисел ${num1} и ${num2} равно ${product}`);
    };
});
