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
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const rowSimbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

const rowList = [rowOne, rowTwo, rowThree, rowFour, rowFive];
for (let i = 0; i < rowList.length; i += 1) {
  keyValueEn[i].forEach((el) => {
    const key = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = el;
    key.className = 'key';
    key.append(span);
    rowList[i].append(key);
  });
}

const space = rowFive.querySelectorAll('div');
space[3].classList.add('space');
const shifts = rowFour.querySelectorAll('div');
shifts[0].classList.add('modal');
shifts[13].classList.add('modal');
rowOne.querySelectorAll('div')[13].classList.add('modal');
rowTwo.querySelectorAll('div')[0].classList.add('modal');
rowThree.querySelectorAll('div')[0].classList.add('modal');
rowThree.querySelectorAll('div')[12].classList.add('modal');

const print = document.querySelector('.keyboard');
print.addEventListener('mousedown', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }
  const letter = event.target.closest('div').querySelector('span').innerHTML;
  event.target.closest('div').classList.add('active');
  textArea.innerHTML += letter;
});

print.addEventListener('mouseup', (event) => {
  if (event.target.className === 'keyboard' || event.target.className.includes('row')) {
    return;
  }/* Пофиксить остаток active при смещении нажатой мышки */
  event.target.closest('div').classList.remove('active');
});

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspase'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];
