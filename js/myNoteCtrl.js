/**
 * Created by Gaojunchao on 16/7/1.
 */

app.controller("myNoteCtrl", function($scope){
    $scope.message = "";
    $scope.left  = function(){return 100 - $scope.message.length;};
    $scope.clear = function(){$scope.message = "";};
    $scope.save  = function(){alert("Note Saved");};
});


//app.controller("myNoteCtrl", function($scope) {
//    $scope.message = "";
//    $scope.left  = function() {return 100 - $scope.message.length;};
//    $scope.clear = function() {$scope.message = "";};
//    $scope.save  = function() {alert("Note Saved");};
//});