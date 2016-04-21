angular.module('weekWeeks').controller('myController', function($scope,weekService) {

	
	weekService.loadData(function(response) {
		$scope.weekPlan = response;
	});

	
});

angular.module('weekWeeks').service('weekService', function ($http) {
	this.loadData = function(callback) {
		$http({
			method: 'GET',
			url: '/api/'
		}).then(function successCallback(response) {
			//console.log(response.data);
		    callback(response.data.weeks);
		}, function errorCallback(response) {
		});
	}
	this.search = function(callback){
		
	}

	
   
});
