<?php

namespace App\Http\Controllers\ClientSide\Api\Service;

use App\Http\Controllers\Controller;
use App\Services\OperationsService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    use ApiResponse;
    private $operationService ;

    function __construct()
    {
        $this->operationService = OperationsService::getInstance();
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $where= ['status'=>'active'];
            $services = $this->operationService->Service->index($request->pagination??10,$where);
            return $this->apiResponse($services,'success', 200);
        } catch (\Exception $exception) {
            return $this->apiResponse(null, $exception->getMessage(), 500);
        }

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
