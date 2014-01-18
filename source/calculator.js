module.exports = {
  add: function (str) {
    var customDelimter;
    if (str.indexOf('//') === 0) {
      customDelimter = new RegExp(str.substr(2, 1))
      str = str.slice(3)
    }
    var numbers = str.split(customDelimter || /\s|,/)
    return numbers.map(function(el) {
      return +el
    }).reduce(function(memo, el){
      return memo + parseInt(el)
    }, 0)
  }
}