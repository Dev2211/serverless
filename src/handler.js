'use strict';

module.exports.RendomNumber = async (event) => {
  const randomNumber = parselnt(math.random()*100);
  console.log("the random generated integer is:", randomNumber);
  return randomNumber
};
