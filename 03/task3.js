var Person = function(args){
        var obj = {},
            pubObj = {};

        if (typeof args !== "object"){
            return pubObj;
        }
        var capLetter = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        var getProperty = function(p){
            return function(){
                return obj[p];
            }
        }
        var setProperty = function(p){
            return function(val){
                obj[p] = val;
            }
        }
        for (var prop in args) {
            if (args.hasOwnProperty(prop)) {
                obj[prop] = args[prop];
                pubObj['get'+capLetter(prop)] = getProperty(prop);
                pubObj['set'+capLetter(prop)] = setProperty(prop);
            }
        }

        return pubObj;
};
 
var p = new Person({
   name: 'Jack', 
   age: '10',
});
console.log(p.age);
console.log(p.name);
console.log(p.getAge());
console.log(p.getName());
p.setAge(11);
p.setName('Joe');
console.log(p.getAge());
console.log(p.getName());
