const { nanoid } = require('nanoid');
const infoAbtShoes = require('../data/infoAbtShoes.json');


function create(shoes, soleName) {
    const sole = { name: soleName, id: nanoid(6), price: infoAbtShoes.priceInCents || 100 };
    shoes.push(sole);
    return shoes;
  }
  //test
  
  module.exports = {
    create
  };