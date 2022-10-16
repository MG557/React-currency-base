"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPLNToUSD = void 0;

var convertPLNToUSD = function convertPLNToUSD(PLN) {
  if (typeof PLN === 'string' || PLN === undefined) {
    return NaN;
  } else if (typeof PLN !== 'number' && typeof PLN !== 'string') {
    return 'Error';
  } else if (PLN <= 0) {
    PLN = 0;
  }

  var PLNtoUSD = PLN / 3.5;
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};

exports.convertPLNToUSD = convertPLNToUSD;