const { nanoid } = require('nanoid');


function create(shoes, soleName) {
    const sole = { name: soleName, id:nanoid(6) };
    animals.push(sole);
    return shoes;
  }
  //test
  
  module.exports = {
    create
  };