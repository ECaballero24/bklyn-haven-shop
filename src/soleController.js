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


  module.exports = {
    create,
    index,
  };