var s = skrollr.init();

angular.module("kpApp")
.filter('showTitle', function () {
		return function(s){
				return s.replace(/(.*)】/g ,'');

		}
	})