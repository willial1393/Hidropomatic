<?php

use Models\Actuadores;
use Models\Sensores;
use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

return function (App $app) {

    $app->get('/sensores/', function (Request $request, Response $response, array $args) {
        $res = Sensores::get();
        $response->getBody()->write($res);
        return $response;
    });

    $app->get('/actuadores/', function (Request $request, Response $response, array $args) {
        $res = Actuadores::get();
        $response->getBody()->write($res);
        return $response;
    });
};
