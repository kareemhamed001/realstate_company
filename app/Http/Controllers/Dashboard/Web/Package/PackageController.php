<?php

namespace App\Http\Controllers\Dashboard\Web\Package;

use App\Http\Controllers\Controller;
use App\Services\OperationsService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    public function index(Request $request)
    {
        try {
            return view('dashboard.packeges.index');
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }

    }
}
