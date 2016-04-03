angular.module('webradio.controllers', [])
    .controller('RadioCtrl', function($scope, $timeout) {
	var audio = null;
	
	$scope.webradio = {
	    url: 'http://104.236.247.184:8000/airtime_128',
	    playing: false,
	    loading: false
	};

	$scope.toggleRadio = function() {
	    if ($scope.webradio.playing === true) {
		$scope.toggleLoading();			
		audio = new Audio($scope.webradio.url);		
		audio.addEventListener("canplay", function() {
		    audio.play();
		    $scope.toggleLoading();		    		    
		});
		
	    } else {
		audio.pause();
		audio.src = "";
		audio.load();
		audio = null;
	    }	    
	};

	$scope.toggleLoading = function() {
	    $timeout(function() {
		$scope.webradio.loading = !$scope.webradio.loading;	
	    });
	}
    });
