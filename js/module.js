module = function(){
   var current = null;
   var labels = {
      'home':'home',
      'articles':'articles',
      'contact':'contact'
   };
   var init = function(){
	   //alert('init');	    
	   console.log(current);
   };
   var show = function(){
      current = 1;
   };
   var hide = function(){
      show();
   }
   return{init:init, show:show, current:current}
}();
module.current	=11;
module.init();

var testimonial	=	{
	setting:{
		perRow:1,
		testId:12
	}
};

console.log(testimonial.setting.perRow);

var basketModule = (function() {
    var basket = []; //private
    return { //exposed to public
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function(){
           var q = this.getItemCount(),p=0;
            while(q--){
                p+= basket[q].price; 
            }
            return p;
        }
    }
}());
basketModule.addItem({item:'bread',price:0.5});
basketModule.addItem({item:'butter',price:0.3});
 
console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());
 
//however, the following will not work:
console.log(basketModule.basket);// (undefined as not inside the returned object)
console.log(basket); //(only exists within the scope of the closure)


