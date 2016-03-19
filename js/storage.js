;(function(){

	var storage = {
		set: function(name, value, iDay) {
			var localStorage = window.localStorage;
            if(localStorage){
                if(typeof name === 'object'){
                    for(var i in name){
                        localStorage[i] = name[i];
                    }
                }else{
                    localStorage[name] = value;
                }
            }else{
            	var oDate = new Date();
                    oDate.setDate(oDate.getDate() + iDay || 10*365);
                if(typeof name === 'object'){
                    for(var i in name){
                        document.cookie = i + "="+ name[i] + ";expires=" + oDate;
                    }
                }else{
                    document.cookie = name + "="+ value + ";expires=" + oDate;
                }
            }
		},
		get: function(name) {
			var localStorage = window.localStorage;
            if(localStorage){
                return localStorage[name];
            }else{
                var arr1 = document.cookie.split(";");
                for(var i = 0; i < arr1.length; i += 1){
                    var arr2 = arr1[i].split("=");
                    if(arr2[0] == name){
                        return arr2[1];
                    }
                }
            }
		},
		remove: function(name) {
			var localStorage = window.localStorage;
            if(localStorage){
                localStorage.removeItem(name);
            }else{
                this.set(name, 1, -1);
            }
		}
	}

	window.storage = storage;

})()