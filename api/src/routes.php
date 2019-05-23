<?php

use Models\Actuadores;
use Models\Graficas;
use Models\Indicadores;
use Models\Sensores;
use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

return function (App $app) {

    $app->get('/graficas/', function (Request $request, Response $response, array $args) {
        $temperatura = Graficas::where('nombre', 'TEMPERATURA')
            ->limit(10)
            ->get(['dato', 'tiempo']);
        $ventilador = Graficas::where('nombre', 'VENTILADOR')
            ->limit(10)
            ->get(['dato', 'tiempo']);
        $res = '{"temperatura":' . $temperatura . ',"ventilador":' . $ventilador . '}';
        $response->getBody()->write($res);
        return $response;
    });

    $app->post('/graficas/', function (Request $request, Response $response) {
        $input = json_encode($request->getParsedBody(), JSON_UNESCAPED_UNICODE);
        $grafica = new Graficas();
        $grafica->forceFill(json_decode($input, true));
        $grafica->save();
        $response->getBody()->write('{"result":"true"}');
        return $response;
    });

    $app->get('/sensores/', function (Request $request, Response $response, array $args) {
        $res = Sensores::first();
        $response->getBody()->write($res);
        return $response;
    });

    $app->post('/sensores/', function (Request $request, Response $response, array $args) {
        $input = json_encode($request->getParsedBody(), JSON_UNESCAPED_UNICODE);
        $input = json_decode($input, true);
        $grafica = Sensores::find($input['id']);
        $grafica->forceFill($input);
        $grafica->save();
        $response->getBody()->write('{"result":"true"}');
        return $response;
    });

    $app->get('/indicadores/', function (Request $request, Response $response, array $args) {
        $res = Indicadores::first();
        $response->getBody()->write($res);
        return $response;
    });

    $app->post('/indicadores/', function (Request $request, Response $response, array $args) {
        $input = json_encode($request->getParsedBody(), JSON_UNESCAPED_UNICODE);
        $input = json_decode($input, true);
        $grafica = Indicadores::find($input['id']);
        $grafica->forceFill($input);
        $grafica->save();
        $response->getBody()->write('{"result":"true"}');
        return $response;
    });
};
