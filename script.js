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

let rasklad = {
  ru: keyValueRu,
  en: keyValueEn
};

const rows = [...document.querySelectorAll('.row')];
const activeKeysSet = new Set();
const renderKeyboard = () => {
  document.querySelectorAll('.key').forEach((keyElement) => {
    keyElement.classList.remove('active');
  });
  activeKeysSet.forEach((id) => {
    document.getElementById(id).classList.add('active');
  });
}

const createKey = (rasklad, item) => {
  for (let i = 0; i < rows.length; i += 1) {
    rows[i].innerHTML = "";
    rasklad[i].forEach((array, idx) => {
      const but = document.createElement('div');
      but.innerHTML = array[item];
      but.className = 'key';
      rows[i].append(but);
      but.id = keyCode[i][idx];
      if (but.id === 'ShiftLeft' || but.id === 'Tab' || but.id === 'CapsLock' || but.id === 'Enter' || but.id === 'Backspace') {
        but.classList.add('special');
      }
      if (but.id === 'Space') {
        but.classList.add('space');
      }
    });
  }
  renderKeyboard();
};

const printSimbol = (simbol) => {
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
print.addEventListener('mousedown', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  const letter = event.target.closest('div').innerHTML;
  activeKeysSet.add(event.target.closest('div').id);
  printSimbol(letter);
  renderKeyboard();
});

print.addEventListener('mouseup', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }/* Пофиксить остаток active при смещении нажатой мышки */
  activeKeysSet.delete(event.target.closest('div').id);
  renderKeyboard();
});

if (localStorage.language === undefined) {
  localStorage.language = 'en';
}
createKey(rasklad[localStorage.language], 0);

const switchLanguage = () => {
  if (localStorage.language === 'ru') {
    localStorage.language = 'en';
  } else {
    localStorage.language = 'ru';
  }
  createKey(rasklad[localStorage.language], 0);
}

let capsLockON = false;
let shiftON = false;
const toggleShift = (keyElement, simbol) => {
  const shiftId = keyElement.id; 
  shiftON = !shiftON;
  if(!shiftON && !capsLockON) {
    createKey(rasklad[localStorage.language], 0);
  }
  if (capsLockON || shiftON) {
    simbol = simbol && simbol.toUpperCase();
    createKey(rasklad[localStorage.language], 1);
  }
  if (capsLockON && shiftON) {
    simbol = simbol && simbol.toLowerCase();
    createKey(rasklad[localStorage.language], 0);
  }
  if (shiftON) {
    activeKeysArray.add(shiftId);
  }
}

const toggleCapsLock = (keyElement) => {
  const capsLockId = keyElement.id;
  if (!capsLockON && !activeKeysSet.has(capsLockId)) {
    activeKeysSet.add(capsLockId);
    createKey(rasklad[localStorage.language], 1);
  }
  if (capsLockON && activeKeysSet.has(capsLockId)) {
    activeKeysSet.delete(capsLockId);
    createKey(rasklad[localStorage.language], 0);
  }
  capsLockON = !capsLockON;
  renderKeyboard();
};

document.addEventListener('keydown', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement && keyElement.id != 'CapsLock') {
    event.preventDefault();
    let simbol = keyElement.closest('div').innerHTML;
    printSimbol(simbol);
    activeKeysSet.add(keyElement.id);
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      toggleShift(keyElement, simbol);
    }
    if (keyElement.id === 'AltLeft' && document.getElementById('ControlLeft').classList.contains('active')) {
      switchLanguage();
    } else if (keyElement.id === 'ControlLeft' && document.getElementById('AltLeft').classList.contains('active')) {
      switchLanguage();
    }
  }
  if (keyElement && keyElement.id === 'CapsLock') {
    toggleCapsLock(keyElement);
  }
  renderKeyboard();
});

document.addEventListener('keyup', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement && keyElement.id != 'CapsLock') {
    activeKeysSet.delete(keyElement.id);
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      toggleShift(keyElement);
    }
  }
  renderKeyboard();
});
