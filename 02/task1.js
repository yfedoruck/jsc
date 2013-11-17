function getObject(path, obj) {
    var pathArr = path.split("."),
        matched = false;
    pathArr.forEach( function(e){
        for (var prop in obj) {
            if( obj.hasOwnProperty(prop) && e === prop ){
                matched = true;
                obj = obj[prop];
                break;
            }
        }
    })
    if (!matched){
        obj = undefined;
    }
    return obj;
}
var o = {a: {b: 'c'}, x: {y: {one: 'two'} } };
console.log(
    getObject('a.b',o), '\n',
    getObject('a',o), '\n',
    getObject('d',o), '\n',
    getObject('x.y',o), '\n',
    getObject('x.y.one',o), '\n'
);