var should = require('should');
var calculator = require('../source/calculator');
describe('Calculator spec', function() {
  it('should be defined', function () {
    should(calculator).ok
  })
  it('should return 0 for empty string', function() {
    should(calculator.add('')).be.equal(0)
  })
  it('should return 1 for "1"', function () {
    should(calculator.add('1')).be.equal(1)
  })
  it('should return 2 for "2"', function () {
    should(calculator.add('2')).be.equal(2)
  })
  it('should return 3 for "1,2"', function () {
    should(calculator.add('1,2')).be.equal(3)
  })
  it('should return 5 for "2,3"', function () {
    should(calculator.add('2,3')).be.equal(5)
  })
  it('should return 10 for "1,2,3,4"', function () {
    should(calculator.add('1,2,3,4')).be.equal(10)
  })
  it('should return 20 for "2,4,6,5,3"', function () {
    should(calculator.add('2,4,6,5,3')).be.equal(20)
  })
  it('should return 6 for "1\n2,3"', function () {
    should(calculator.add("1\n2,3")).be.equal(6)
  })
  it('should return 6 for "1\n2\n3"', function () {
    should(calculator.add('1\n2\n3')).be.equal(6)
  })
  describe('different delimeters', function (){
    it('should return with custom delimeter', function () {
      should(calculator.add("//;\n1;2")).be.equal(3)
    })
  })
})