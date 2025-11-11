<?php

declare(strict_types=1);

namespace Controllers;

use Illuminate\Http\JsonResponse;
use Spatie\RouteAttributes\Attributes\Get;
use Spatie\RouteAttributes\Attributes\Prefix;

#[Prefix('api/v1')]
class TestAction
{
    #[Get('test')]
    public function test(): JsonResponse
    {
        $data = [
            'message' => 'Hello from the API!',
            'data' => [
                ['id' => 1, 'name' => 'Item A'],
                ['id' => 2, 'name' => 'Item B'],
            ],
            'status' => 200,
        ];

        return response()->json($data);
    }
}
