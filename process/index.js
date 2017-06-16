// this func for get data from user and compute 
var mongojs = require('mongojs');
var express = require('express');
var router = express.Router();

var db = mongojs('ResultConlections', ['ResultConlections'])


var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {

    $scope.input1=0;
    $scope.input2=0;

    $scope.plus = function() {


       
        var operate = new Plus($scope.input1,$scope.input2);
        var result =operate.calculated();
        $scope.todoInput1 = 0;
        $scope.todoInput2 = 0;

        $scope.todoText=result;

        //insert data to DBDate.now();
        db.ResultCollections.save({result: result,times:Date.now()});
        
        
    };

    $scope.minus = function() {
      var operate = new Minus($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
      //$scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
    };
    $scope.multi = function() {
      var operate = new Multi($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
      //$scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
       db.ResultCollections.save({result: result,times:Date.now()});
    };
    $scope.divide = function() {
      var operate = new Devide($scope.input1,$scope.input2);
      var result =operate.calculated();
      $scope.todoInput1 = 0;
      $scope.todoInput2 = 0;
     // $scope.todoList.push({todoText:result, done:false});
      $scope.todoText=result;
       db.ResultCollections.save({result: result,times:Date.now()});
    };


});
