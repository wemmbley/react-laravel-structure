<?php

declare(strict_types=1);

namespace App\Http\Controllers\API\V1;

use Illuminate\Http\JsonResponse;

class TestController
{
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
