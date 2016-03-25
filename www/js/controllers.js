angular.module('webradio.controllers', [])

    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {})

    .controller('RadioCtrl', function($scope) {
	$scope.webradio = {
	    url: 'http://104.236.247.184:8000/airtime_128'
	};
    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {
    });
