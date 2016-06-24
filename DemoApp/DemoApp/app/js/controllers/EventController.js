'use strict';

eventsApp.controller('EventController',
    function EventController ($scope) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = false;
        $scope.myClass = {color:'red'};
        $scope.buttonDisabled = true;
        $scope.event = {
            name: 'Angular',
            date: '1/1/2016',
            time: '10:30 am',
            location: {
                address: 'Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session, you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Beginner',
                    abstract: 'This session will take a closer look at scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Mike Jones',
                    duration: 3,
                    level: 'Beginner',
                    abstract: 'learn how to balance controllers',
                    upVoteCount: 0

                }
            ]
        }
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.downVoteSession--;
        }
    });