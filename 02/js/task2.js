var deepCopy = function(obj){
    var obj2 = {};
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === "object"){
                obj2[prop] = deepCopy(obj[prop]);
            }else{
                obj2[prop] = obj[prop];
            }
        }
    }
    return obj2;
}
var a = {b: 'c', d: {e: 'f'}},
    b = deepCopy(a);
a.d = 12;
console.log(b.d);