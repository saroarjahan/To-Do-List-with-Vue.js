var app = new Vue({
  el: '#box',

  data:{

     list:[],
     lList:'',
     item:'',
     show:false,
     all:true,
     onlyDone:false,
  },

    mounted() {
      if (localStorage.testObject) {      
        var nList = getStorage(); /*call function Get data from local storage*/
        this.lList=nList;
        this.list=this.lList;  

        if (nList.length == 0) {this.show=false;}else{ this.show=true;} 
   }
  },

  methods: {

		  	add:function(){

		  		    if (this.item!=='') {/*if press enter comtains data only work*/

		  			if(this.lList!==''){this.list=this.lList;} /*if localstorage data avaibale then add it to main list*/

		            this.list.push({ /*add data to main list after enter key press*/
		            	title: this.item,
		            	status:false
		            });

		            var testObject = this.list;
					localStorage.setItem('testObject', JSON.stringify(testObject));	
					var nList = getStorage(); /*function for Get data from local storage*/
                    this.lList=nList;                                   
		  
		  		}
		  					
		  	    this.item='';
		  	},
		  			  		    
		    completedTask:function(){
		  		this.all=false;
		  		this.onlyDone=true;
		  	},

		  	allTask:function(){
		  		this.all=true;
		  		this.onlyDone=false;
		  	},

		  	checkClick:function(item){

		  		if (item.status === false) {
		  			item.status = true;
		  		}
		  		else {item.status = false;}
		  		
		        this.show=true;

	            var testObject = this.lList;
				localStorage.setItem('testObject', JSON.stringify(testObject));
				var nList = getStorage(); /*function for Get data from local storage*/                   
                this.lList=nList;
			   
		    },

		    double:function(){
		    	    var testObject = this.lList;
					localStorage.setItem('testObject', JSON.stringify(testObject));
				    var nList = getStorage(); /*function for Get data from local storage*/     
                    this.lList=nList;
                    if (nList.length == 0) {this.show=false;}else{ this.show=true;}
		    },

		    strike: function(name){   
                var strike= name.status+'strike';
                return strike;
		    }
     }
 
});

function getStorage (){
		var ret = localStorage.getItem('testObject');
		var nList= JSON.parse(ret);
		return nList;
}




