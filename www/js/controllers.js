angular.module('webradio.controllers', [])
    .controller('RadioCtrl', function($scope) {
	var audio = null;
	
	$scope.webradio = {
	    url: 'http://104.236.247.184:8000/airtime_128',
	    play: false
	};

	$scope.toggleRadio = function() {
	    if ($scope.webradio.play === true) {
		audio = new Audio($scope.webradio.url);
		audio.play();
	    } else {
		audio.pause();
		audio.src = "";
		audio.load();
		audio = null;
	    }	    
	};
    });
