/**
 * Created by Gaojunchao on 16/7/2.
 */

angular.module('myApp', [])
        .controller('MianController', function($scope)
{
    $scope.submitForm = function ()
    {
        console.log('表单提交啦!')
    }
});