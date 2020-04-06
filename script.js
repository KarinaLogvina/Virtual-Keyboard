const divContainer = document.createElement('div');
divContainer.className = 'wrapper';
document.body.append(divContainer);

const createElement = (tag, name, base) => {
  const elem = document.createElement(tag);
  elem.className = name;
  base.append(elem);
  return elem;
}

let textArea = createElement('textarea', 'textarea', divContainer);
let keyboard = createElement('div', 'keyboard', divContainer);
let rowOne = createElement('div', 'row one', keyboard);
let rowTwo = createElement('div', 'row two', keyboard);
let rowThree = createElement('div', 'row three', keyboard);
let rowFour = createElement('div', 'row four', keyboard);
let rowFive = createElement('div', 'row five', keyboard);

const keyValueEn = [
  [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', 'Backspace']],
  [['Tab', 'Tab'], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '\\'], ['Del', 'Del']],
  [['CapsLock', 'CapsLock'], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ['`', '"'], ['Enter', 'Enter']],
  [['Shift', 'Shift'], ['\\', '|'], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['↑', '↑'], ['Shift', 'Shift']],
  [['Ctrl', 'Ctrl'], ['Win', 'Win'], ['Alt', 'Alt'], [' ', ' '], ['Alt', 'Alt'], ['Ctrl', 'Ctrl'], ['←', '←'], ['↓', '↓'], ['→', '→']],
];

const keyValueRu = [
  [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', 'Backspace']],
  [['Tab', 'Tab'], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '\\'], ['Del', 'Del']],
  [['CapsLock', 'CapsLock'], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['Enter', 'Enter']],
  [['Shift', 'Shift'], ['\\', '|'], ['я', 'Я'], ['ч', 'Ч'], ['c', 'C'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], ['↑', '↑'], ['Shift', 'Shift']],
  [['Ctrl', 'Ctrl'], ['Win', 'Win'], ['Alt', 'Alt'], [' ', ' '], ['Alt', 'Alt'], ['Ctrl', 'Ctrl'], ['←', '←'], ['↓', '↓'], ['→', '→']],
];

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

let rasklad = [keyValueRu, keyValueEn]
const rows = [...document.querySelectorAll('.row')];
const createKey = (rasklad, item) => {
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].innerHTML = "";
    rasklad[i].forEach((array, idx) => {
      const but = document.createElement('div');
      but.innerHTML = array[item];
      but.className = 'key';
      rows[i].append(but);
      but.id = keyCode[i][idx];
    });
  }
};

let language = '';
if (localStorage.language === undefined) {
  language = 'en';
  localStorage.language = language;
  createKey(rasklad[0], 0);
} else {
  language = localStorage.language;
  createKey(rasklad[1], 0);
}


let capsLockON = false;
let shiftON = false;
let lang = true;
const printSimbol = (simbol) => {
  if (capsLockON || shiftON) {
    simbol = simbol.toUpperCase();
  }
  if (capsLockON && shiftON) {
    simbol = simbol.toLowerCase();
  }
  if (lang) {

  }
  switch (simbol) {
    case 'Tab':
      simbol = '     ';
      break;
    case 'Enter':
      simbol = '\n';
      break;
    case 'CapsLock':
      simbol = simbol.toUpperCase();
      break;
    case 'Backspace':
      simbol = textArea.innerHTML.slice(0, -1);
      textArea.innerHTML = simbol;
      simbol = '';
      break;
    case 'Alt':
    case 'Ctrl':
    case 'Shift':
    case 'Win':
    case 'Del':
      simbol = '';
      break;
    default:
      simbol = simbol;
  }
  textArea.innerHTML += simbol;
};

const print = document.querySelector('.keyboard');
const printLetter = print.querySelector('div').innerHTML;
print.addEventListener('mousedown', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  const letter = event.target.closest('div').innerHTML;
  event.target.closest('div').classList.add('active');
  printSimbol(letter);
});

print.addEventListener('mouseup', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }/* Пофиксить остаток active при смещении нажатой мышки */
  event.target.closest('div').classList.remove('active');
});

const switchLanguage = () => {
  if (language === 'ru') {
    createKey(keyValueRu, 0);
  } else {
    createKey(keyValueEn, 0);
  }
}

document.addEventListener('keydown', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement) {
    let simbol = keyElement.closest('div').innerHTML;
    printSimbol(simbol);
    keyElement.classList.add('active');
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      shiftON = true;
      createKey(keyValueEn, 1);
      keyElement.classList.add('active');
    }
    if (keyElement.id === 'CapsLock') {
      keyElement.classList.add('active');
      capsLockON = !capsLockON;
      simbol.toLocaleUpperCase();
      createKey(keyValueEu, 1);
    }
    if (keyElement.id === 'AltLeft' && keyElement.id === 'ControlLeft' && language === 'en') {
      language = 'ru';
      localStorage.language = 'ru';
      switchLanguage();
    } else if (keyElement.id === 'AltLeft' && keyElement.id === 'ControlLeft' && language === 'ru') {
      language = 'en';
      localStorage.language = 'en';
      switchLanguage();
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement) {
    keyElement.classList.remove('active');
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      shiftON = false;
      createKey(keyValueEn, 0);
    }
  }
});
