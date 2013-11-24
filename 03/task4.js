$ = function(str){
    return document.querySelectorAll(str);
};
NodeList.prototype.width = function(x){
    for( var i=0; i<this.length; i++ ){
        this.item(i).style.width = x + 'px';
    }
};
NodeList.prototype.height = function(y){
    for( var i=0; i<this.length; i++ ){
        this.item(i).style.height = y + 'px';
    }
};
var $div = $('div');
console.log( $div );

var $red = $('.row'); 
console.log( $red );

$red.width('100');
$red.height('50');