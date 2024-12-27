// joshua codes
const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('outputText');
const clearButton = document.getElementById('clear');
const generateButton = document.getElementById('generateImg');

// setting up generate button
generateButton.disabled = true;
generateButton.addEventListener('click', generate);

// Configuration
const LANG = 'en-US';
clearButton.addEventListener('click', () => {
  outputDiv.textContent = '';
});

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();

recognition.lang = LANG;

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  outputDiv.textContent += ` ${transcript}`;
  generateButton.disabled = false;
};

recognition.onstart = () => (startButton.textContent = 'Listening...');
recognition.onend = () => (startButton.textContent = 'Start Voice Input');
startButton.addEventListener('click', () => recognition.start());

f