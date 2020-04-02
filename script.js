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
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '`', 'Enter'],
  ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

const keyValueRu = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'З', 'Х', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
];

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

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspase'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];
