var Extract = function(){

   var classNamesAry = [];

   var parseClassNames = function(){
     	jQuery("*").each(function(){
   			console.info($(this).attr("class"));
   			_addClassName($(this).attr("class"));
   		});
   };

    var _addClassName = function(cn){

    	if(cn == undefined || cn == ""){
    		return;
    	};

    	//console.warn(classNamesAry.indexOf(cn));
        if (classNamesAry.indexOf(cn) === -1){
            classNamesAry.push(cn)
        };

    };

    var getClassNameAry = function(){
    	return classNamesAry;
    };


    return {parseClassNames : parseClassNames,
    		getClassNameAry : getClassNameAry}

}();
