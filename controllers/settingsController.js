"USE STRICT";
app.controller('settingsController', function ($scope, $translate) {
    $scope.sub = {
        'title': 'Account and Settings'
    };

    //Select language for the app | angular-translate
    var ctrl = this;
    ctrl.language = 'en';
    ctrl.languages = ['en', 'sw'];
    ctrl.updateLanguage = function () {
        $translate.use(ctrl.language);
    };


});
