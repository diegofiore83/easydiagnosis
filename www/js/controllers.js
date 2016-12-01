angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('LanguagesCtrl', function($scope) {
  $scope.languages = [
    { original: 'English', id: 1, enable: true, name: 'english' },
    { original: 'Portuguese', id: 2, enable: false, name: 'portuguese' },
    { original: 'Français', id: 3, enable: false, name: 'francais' },
    { original: 'Español', id: 4, enable: false, name: 'spanish' },
    { original: 'Deutsch', id: 5, enable: false, name: 'german' },
    { original: 'Italian', id: 1, enable: true, name: 'italian' },
    { original: '中国', id: 6, enable: false, name: 'chinese' },
    { original: 'العربية', id: 7, enable: false, name: 'arabic' },
    { original: 'भारतीयों', id: 8, enable: false, name: 'hindi' }
  ];
})

.controller('SurveyCtrl', function ($scope, $stateParams) {
    $scope.language = $stateParams.language;
});
