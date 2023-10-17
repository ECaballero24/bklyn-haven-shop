const { readJSONFile, writeJSONFile } = require('./src/helpers');








const reveal = console.log;
const shoes = readJSONFile('./data', 'shoes.json');

function run() {
  const action = process.argv[2];
  const sole = process.argv[3];
  switch (action) {
    case 'index':
      reveal(action, shoes);
      break;
    case 'create':
      reveal(action, sole);
      break;
    case 'show':
      reveal(action, sole);
      break;
    case 'update':
      reveal(action, sole);
      break;
    case 'destroy':
      reveal(action, sole);
      break;
    case 'score':
      reveal(action);
      break;
    default:
      reveal('Nope! Kick it or try again.');
  }
}

run();