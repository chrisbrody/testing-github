var app = angular.module('flapperNews', ['ui.router']);

app.congif(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
	});
	$urlRouterProvider.otherwise('home');
}]);
app.controller('MainCtrl', ['$scope', 'posts', function ($scope, posts) {
	$scope.test = 'Flapper News!';

	$scope.posts = posts.posts

	$scope.addPost = function(){
	  if(!$scope.title || $scope.title === '') { return; }
	  $scope.posts.push({
	    title: $scope.title,
	    link: $scope.link,
	    upvotes: 0
	  });
	  $scope.title = '';
	  $scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};
}]);
app.factory('posts', function(){
	var o = {
		posts: [{title:'hello', link:'http://www.google.com', upvotes:0}]
	};
	return o;
});


