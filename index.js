const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, index, show, destroy, edit, tally } = require('./src/soleController');








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
      const shoesView = show(shoes, sole);
      reveal(shoesView);
      break;
    case 'update':
      updatedShoes = edit(shoes, sole, process.argv[4]);
      writeToFile = true;
      break;
    case 'destroy':
      updatedShoes = destroy(shoes, sole);
      writeToFile = true;
      break;
    case 'tally':
      reveal(`Current points sum of all animals you've added to your database:`, tally(shoes));;
      break;
    default:
      reveal('Nope! Kick it or try again.');
  }
  if (writeToFile) {
    writeJSONFile('./data', 'shoes.json', updatedShoes);
  }

};

run();