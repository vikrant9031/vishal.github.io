
var app = angular.module('app',[]);
app.controller('myApp',function($scope){
	$scope.bookmarks  = [];
	

	
	var addtask = localStorage["bookmark"];
	if(addtask!== undefined ){
		$scope.bookmarks = JSON.parse(addtask);

	}
	
	$scope.search = function(){
		
		$scope.addTask();
		

	
	}	
	$scope.addTask = function(){

		
		if(!$scope.books  ){
			$scope.add = "Please enter the valid website name!";
			$scope.add2="";

		}
		else
			if(!$scope.url){
				$scope.add2 = "Please enter the website url!";
				$scope.add = "";
			}
			
			else{
		
		$scope.bookmarks.push({'name':$scope.books,'weburl':$scope.url});

		localStorage["bookmark"] = JSON.stringify($scope.bookmarks);
		
		$scope.books = "";
		$scope.url = "";
		$scope.add2 = "";
		$scope.add  = "";
	}
		
		
	
	
}
$scope.remove = function(msg){
	for(i=0;i<$scope.bookmarks.length;i++){
			if($scope.bookmarks[i].name == msg){
			  $scope.bookmarks.splice(i,1);
			}
			localStorage["bookmark"] = JSON.stringify($scope.bookmarks);
		}

}





		/*$scope.book  = [];
	var addbooks = localStorage["bookmark"];
	if(addbooks!== undefined){
		$scope.book = JSON.parse(addbooks);
	}
	
		
	$scope.addbook = function(){	

	
		$scope.book.push({'websitename':$scope.books,'websiteUrl':$scope.url});
         localStorage["bookmark"] = JSON.stringify($scope.book);
		console.log(localStorage);
		$scope.books = "";
		$scope.url = "";
		
		
	
	}*/
});