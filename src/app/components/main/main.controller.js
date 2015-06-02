'use strict';

angular.module('homepage')
  .controller('MainCtrl', function ($scope) {
    var self = this

    self.activePanel = null;

    self.changePanel = function(panel) {
      self.activePanel = panel
    }
  });
