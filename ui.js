// ui.js

// Cache DOM elements
const num = document.getElementById('num');
const btn = document.getElementById('btn');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replay');

export const getInputValue = () => Number(num.value);

export const clearInput = () => { num.value = ""; };

export const showMessage = (text) => { message.textContent = text; };

export const disableGuessButton = () => { btn.disabled = true; };
export const enableGuessButton = () => { btn.disabled = false; };

export const showReplayButton = () => { replayBtn.style.display = "inline-block"; };
export const hideReplayButton = () => { replayBtn.style.display = "none"; };

export const onGuessClick = (handler) => { btn.addEventListener('click', handler); };
export const onReplayClick = (handler) => { replayBtn.addEventListener('click', handler); };
