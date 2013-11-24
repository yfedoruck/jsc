var Person = function(args){
        var obj = {};

        if (typeof args !== "object"){
            return obj;
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
                if(typeof args[prop] === 'function'){
                    obj[prop] = args[prop];
                    continue;
                }
                obj['get'+capLetter(prop)] = getProperty(prop);
                obj['set'+capLetter(prop)] = setProperty(prop);
            }
        }
        
        for( var prop in args ){
            if (args.hasOwnProperty(prop)) {
                if(typeof args[prop] === 'function'){ continue; }
                obj['set'+capLetter(prop)](args[prop]);
            }
        }
        return obj;
};
 
var p = new Person({
   name: 'Jack', 
   age: '10',
   jump: function(){ return "My name is " + this.name + " and I can jump.";}
});
console.log(p.age);
console.log(p.name);
console.log(p.getAge());
p.setAge(11);
p.setName('Joe');
console.log(p.getAge());
console.log(p.getName());
console.log(p.jump()) // “My name is Jack and I can jump.”
