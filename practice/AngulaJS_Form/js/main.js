/**
 * Created by Gaojunchao on 16/7/2.
 */

angular.module('myApp', [])
        .controller('SignUpController', function($scope)
{
    $scope.userdata = {};
    $scope.submitForm = function ()
    {
        console.log($scope.userdata);
        if($scope.signUpForm.$invalid){
            alert('请检出用户信息');
        }else {
            alert('提交成功!');
        }
    }


})

    .directive('compare', function () {
        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        };

        o.require = 'ngModel';
        o.link = function(sco,ele,att,con){
            con.$validators.compare = function(v){
                return v == sco.orgText;
            };

            sco.$watch('orgText',function(){
                con.$validate();
            })
        }
        return o;
    })