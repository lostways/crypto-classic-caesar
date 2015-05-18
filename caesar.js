/* Caesar Cipher */

var Caesar = require("./lib/caesar.js");

module.exports = {
  encipher: function (pt,key) {
    return Caesar(1,pt,key);
  },

  decipher: function (ct,key) {
    return Caesar(-1,ct,key);
  }
}