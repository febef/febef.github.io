(function () {
    var gem = { name: 'Azurite', price: 2.95 };
    var app = angular.module('gemStore', []);
    // 1 - Crear controlador llamado StoreController
    app.controller('StoreController', function () {
        // 3 - Asignar el objeto gem a la propiedad product de nuestro controlador StoreController
        this.product = gem;
    });
})();