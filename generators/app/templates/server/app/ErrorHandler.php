<?php

namespace Tarqim;

use Psr\Http\Message\ ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Monolog\Logger;

final class ErrorHandler extends \Slim\Handlers\Error
{
    protected $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function __invoke(Request $request, Response $response, \Exception $exception)
    {
        // Log the message
        $this->logger->critical($exception->getMessage());

        // create a JSON error string for the Response body
        $body = json_encode([
            'excep' => get_class($exception),
            'stack' => $exception->__toString(),
            'error' => $exception->getMessage(),
            'code' => $exception->getCode(),
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

        return $response
                ->withStatus(500)
                ->withHeader('Content-type', 'application/json')
                ->withBody(new \Slim\Http\Body(fopen('php://temp', 'r+')))
                ->write($body);
    }
}
