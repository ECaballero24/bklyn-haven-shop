const { nanoid } = require('nanoid');
const infoAbtShoes = require('../data/infoAbtShoes.json');


function create(shoes, soleName) {
    const sole = {  id: nanoid(6), name: soleName,  price: infoAbtShoes.priceInCents || 100, inStock: infoAbtShoes.inStock || false };
    shoes.push(sole);
    return shoes;
  }
  //test
  function index(shoes) {
    return shoes.map((sole) => sole.id + ' ' + sole.name).join('\n');
  }


  function show(shoes, soleId) {
    const sole = shoes.find((sole) => sole.id === soleId);
    return sole.id + ' ' + sole.name + ' ' + '$' + sole.price + ' USD';
  }


  const reveal = console.log;

function destroy(shoes, soleId) {
  const index = shoes.findIndex((sole) => sole.id === soleId);
  if (index > -1) {
    shoes.splice(index, 1);
    reveal('Shoes removed from collection');
    return shoes;
  } else {
    reveal('Shoes not found. Try again');
    return shoes;
  }
};

function edit(shoes, soleId, updatedShoe) {
  const index = shoes.findIndex((sole) => sole.id === soleId);
  if (index > -1) {
    shoes[index].id = soleId;
    shoes[index].name = updatedShoe;
    shoes[index].price = infoAbtShoes.updatedShoe || 100;
    reveal('Shoes updated');
    return shoes;
  } else {
    reveal('NOPE!! Try again');
    return shoes;
  }
};

function tally(shoes) {
  return shoes.reduce((acc, current) => acc + current.infoAbtShoes, 0);
}

  module.exports = {
    create,
    index,
    show,
    destroy,
    edit,
    tally,
  };