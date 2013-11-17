var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];

var getFriends = function(userId) {
    var result = [],
        isId = false;

    people.forEach( function(obj){
        if ( obj.id === userId ){
            isId = true;
            return;
        }
    });
    if( !isId ){
        return null;
    }

    people.forEach( function(obj){
        if( obj.friends === null ){
            return;
        }
        obj.friends.forEach(
            function(val){
                if(userId === val){
                    result.push(obj);
                }
        })
    });
    return result;
};

console.log(getFriends(2));
console.log(getFriends(4));
console.log(getFriends(100500));