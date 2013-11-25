function l(x){
    console.log(x);
}
var App = function(){
  return {
    init: function() {
      this.nodes = document.querySelectorAll('.container');
      this.setListeners();
    },
    
    setListeners: function() {
      [].slice.call(this.nodes).forEach(function(n){
        n.onclick = this.onClick.myBind(this);
      }, this);
    },
    
    onClick: function(e) {
      e = e || window.event;
      var node = e.target || e.srcElement;
      // this - should be the main context - instance of App
      // node - should be the node, that fires event
    }
  };
};
 
if (typeof Function.prototype.myBind === 'undefined') {
        Function.prototype.myBind = function(context){
                var self = this;
                self.apply(context, arguments);
        };
}
 
(new App()).init();