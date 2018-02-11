(function () {
    'use strict';

    angular
        .module('quitandaApp')
        .service('main_service', main_service);

    main_service.$inject = ['$http'];
    function main_service($http) {

        this.dados_tabela = function() {
            return $http({
                url: '/produto/find-all',
                responseType: 'json',
                method: "GET"
            }).then(function (response) {
                return response.data;
            });   
        };

        this.valores_produtos_grafico = function() {
            return $http({
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                url: '/estoque/tipo-produto',
                responseType: 'json',
                method: "GET",
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                return response.data;
            });   
        }

    }
})();