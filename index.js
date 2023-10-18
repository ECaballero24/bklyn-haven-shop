const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, index } = require('./src/soleController');








const reveal = console.log;
const shoes = readJSONFile('./data', 'shoes.json');



function run() {
  const action = process.argv[2];
  const sole = process.argv[3];

  let writeToFile = false;
  let updatedShoes = [];

  switch (action) {
    case 'index':
      const viewShoes = index(shoes);
      reveal(viewShoes);
      break;
    case "create":
      updatedShoes = create(shoes, sole);
      writeToFile = true;
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
  if (writeToFile) {
    writeJSONFile('./data', 'shoes.json', updatedShoes);
  }

};

run();