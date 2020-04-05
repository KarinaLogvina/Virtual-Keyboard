const divContainer = document.createElement('div');
divContainer.className = 'wrapper';
document.body.append(divContainer);

const textArea = document.createElement('textarea');
textArea.className = 'textarea';
divContainer.append(textArea);

const keyboardArea = document.createElement('div');
keyboardArea.className = 'keyboard';
divContainer.append(keyboardArea);

const rowOne = document.createElement('div');
rowOne.className = 'row one';
keyboardArea.append(rowOne);

const rowTwo = document.createElement('div');
rowTwo.className = 'row two';
keyboardArea.append(rowTwo);

const rowThree = document.createElement('div');
rowThree.className = 'row three';
keyboardArea.append(rowThree);

const rowFour = document.createElement('div');
rowFour.className = 'row four';
keyboardArea.append(rowFour);

const rowFive = document.createElement('div');
rowFive.className = 'row five';
keyboardArea.append(rowFive);

const keyValueEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '`', 'Enter'],
  ['Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyValueRu = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const rowSimbolsEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
const rowSimbolsRu = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
const NumsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const NumsRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];

let rowList = [rowOne, rowTwo, rowThree, rowFour, rowFive];
const createKeys = (row, lang) => {
  for (let i = 0; i < row.length; i += 1) {
    rowList[i].innerHTML = "";
    lang[i].forEach((el, idx) => {
      const key = document.createElement('div');
      const span = document.createElement('span');
      span.innerHTML = el;
      key.className = 'key';
      key.append(span);
      row[i].append(key);
      key.id = keyCode[i][idx];
    });
  }
  const space = row[4].querySelectorAll('div');
  space[3].classList.add('space');
  const shifts = row[3].querySelectorAll('div');
  shifts[0].classList.add('modal');
  shifts[13].classList.add('modal');
  row[0].querySelectorAll('div')[13].classList.add('modal');
  row[1].querySelectorAll('div')[0].classList.add('modal');
  row[2].querySelectorAll('div')[0].classList.add('modal');
  row[2].querySelectorAll('div')[12].classList.add('modal');
}

createKeys(rowList, keyValueEn);

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
      simbol = '';
      break;
    default:
      simbol = simbol;
  }
  textArea.innerHTML += simbol;
};

const print = document.querySelector('.keyboard');
const printLetter = print.closest('div').querySelector('span').innerHTML;
print.addEventListener('mousedown', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  const letter = event.target.closest('div').querySelector('span').innerHTML;
  event.target.closest('div').classList.add('active');
  printSimbol(letter);
});

print.addEventListener('mouseup', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }/* Пофиксить остаток active при смещении нажатой мышки */
  event.target.closest('div').classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement) {
    let simbol = keyElement.closest('div').querySelector('span').innerHTML;
    printSimbol(simbol);
    keyElement.classList.add('active');
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      shiftON = true;
      keyValueEn[0] = rowSimbolsEn;
      keyValueEn[1][11] = '{';
      keyValueEn[1][12] = '}';
      keyValueEn[2][10] = ':';
      keyValueEn[2][11] = '"';
      keyValueEn[3][9] = '<';
      keyValueEn[3][10] = '>';
      keyValueEn[3][11] = '?';
      createKeys(rowList, keyValueEn);
    }
    if (keyElement.id === 'CapsLock') {
      capsLockON = !capsLockON;
      simbol.toLocaleUpperCase();
    }
  }
});

document.addEventListener('keyup', (event) => {
  const keyElement = document.querySelector(`#${event.code}`);
  if (keyElement) {
    keyElement.classList.remove('active');
    if (keyElement.id === 'ShiftLeft' || keyElement.id === 'ShiftRight') {
      shiftON = false;
      keyValueEn[0] = NumsEn;
      keyValueEn[1][11] = '[';
      keyValueEn[1][12] = ']';
      keyValueEn[2][10] = ';';
      keyValueEn[2][11] = '`';
      keyValueEn[3][9] = '.';
      keyValueEn[3][10] = ',';
      keyValueEn[3][11] = '/';
      createKeys(rowList, keyValueEn);
    }
  }
});
