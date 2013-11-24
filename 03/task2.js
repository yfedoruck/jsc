var Person = function(args){
    var obj = {};
    if (typeof args !== "object"){
        return obj;
    }

    for (var prop in args) {
        if (args.hasOwnProperty(prop)) {
            obj[prop] = args[prop];
        }
    }
    return obj;
};
 
var p = new Person({
   name: 'Jack', 
   age: '10',
   jump: function(){ return "My name is " + this.name + " and I can jump.";}
});

p.name; // ‘Jack’
p.age; // 10
console.log(p.jump()); // “My name is Jack and I can jump.”
