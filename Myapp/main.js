var app=angular.module('minmax',[]);

app.controller('MinMaxCtrl',function($scope,$http){
$scope.formModel={};

$scope.onSubmit=function(){

	console.log("Im submitted");
	console.log($scope.formModel);

	$http.post('https://minmax-server.herokuapp.com/register/',$scope.formModel).
	success(function(data){
		console.log('happy');
	}).error(function(data){

		console.log('not happy');
	})
}
});