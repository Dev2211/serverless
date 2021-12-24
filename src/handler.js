'use strict';

module.exports.RendomNumber = async (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("the random generated integer is:", randomNumber);
  return randomNumber;
};
