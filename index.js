var s = skrollr.init();

angular.module("kpApp")
.filter('showTitle', function () {
		return function(s){
				return s.replace(/(.*)】/g ,'');

		}
	})

s.animateTo(1000,10000)