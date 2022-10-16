"use strict";

var _convertPLNToUSD = require("../../convertPLNToUSD");

describe('ConvertPLNToUSD', function () {
  it('should return proper value when good input', function () {
    expect((0, _convertPLNToUSD.convertPLNToUSD)(1)).toBe('$0.29');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(2)).toBe('$0.57');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(20)).toBe('$5.71');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', function () {
    expect((0, _convertPLNToUSD.convertPLNToUSD)('6')).toBeNaN();
    expect((0, _convertPLNToUSD.convertPLNToUSD)('abc')).toBeNaN();
    expect((0, _convertPLNToUSD.convertPLNToUSD)('-543')).toBeNaN();
  });
  it('should return NaN when input is empty', function () {
    expect((0, _convertPLNToUSD.convertPLNToUSD)()).toBeNaN();
  });
  it('should return "Error" when input is different than number and string', function () {
    expect((0, _convertPLNToUSD.convertPLNToUSD)({})).toBe('Error');
    expect((0, _convertPLNToUSD.convertPLNToUSD)([])).toBe('Error');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(null)).toBe('Error');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(function () {})).toBe('Error');
  });
  it('should return zero when input is lower than zero', function () {
    expect((0, _convertPLNToUSD.convertPLNToUSD)(-1)).toBe('$0.00');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(-2)).toBe('$0.00');
    expect((0, _convertPLNToUSD.convertPLNToUSD)(-56)).toBe('$0.00');
  });
});