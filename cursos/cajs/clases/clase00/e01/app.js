
var miModulo = angular.module("miModulo", []);
 
miModulo.factory("$miFactoria", function()
{
    return {
        saludo: function()
        {
            return "Hola desde otro modulo";
        }
    }
});
//**********************************************************************////
 
//*********************************************************************////
//creamos el modulo app e inyectamos miModulo
var app = angular.module("app", ["miModulo"]);
 
//hacemos uso de la factoria que hemos creado en el modulo miModulo
app.controller("homeController", function($scope, $miFactoria)
{
    $scope.saludo = function()
    {
        alert($miFactoria.saludo());
    }
});

