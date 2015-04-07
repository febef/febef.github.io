

(function(){
   angular.module('controladores', ['app.servicios'])
      .controller('CtrlContacto',[$contacto, function($contacto) {
         this.save = function() {
            $contacto.save();
         };
      }])
      .controller('CtrlAgenda',[$agenda, function($agenda) {
         return $agenda();
      }]);

   var acontactos= [];

   angular.module('app.servicios')
      .factory('agenda', function() {
        return acontactos;
      })
      .service('contacto', function(){
         
      });
})();
