"use strict";

var _convertPLNtoUSD = require("./../convertPLNtoUSD");

describe('ConvertPLNtoUSD', function () {
  it('should return proper value when good input', function () {
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(1)).toBe('$0.29');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(2)).toBe('$0.57');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(20)).toBe('$5.71');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', function () {
    expect((0, _convertPLNtoUSD.convertPLNToUSD)('6')).toBeNaN();
    expect((0, _convertPLNtoUSD.convertPLNToUSD)('abc')).toBeNaN();
    expect((0, _convertPLNtoUSD.convertPLNToUSD)('-543')).toBeNaN();
  });
  it('should return NaN when input is empty', function () {
    expect((0, _convertPLNtoUSD.convertPLNToUSD)()).toBeNaN();
  });
  it('should return "Error" when input is different than number and string', function () {
    expect((0, _convertPLNtoUSD.convertPLNToUSD)({})).toBe('Error');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)([])).toBe('Error');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(null)).toBe('Error');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(function () {})).toBe('Error');
  });
  it('should return zero when input is lower than zero', function () {
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(-1)).toBe('$0.00');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(-2)).toBe('$0.00');
    expect((0, _convertPLNtoUSD.convertPLNToUSD)(-56)).toBe('$0.00');
  });
});