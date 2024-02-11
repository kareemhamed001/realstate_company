<?php

namespace App\Http\Controllers\Dashboard\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use ApiResponse;

    function overview(){
        try {


            return $this->apiResponse([
                'services' => \App\Models\Service::count(),
                'packages' => \App\Models\Package::count(),
                'feedbacks' => \App\Models\Feedback::count(),
                'galleries' => \App\Models\Project::count(),
                'partners' => \App\Models\Partner::count(),
            ]
                ,'success'
                ,200);
        }catch (\Exception $exception){
            return $this->apiResponse(null,$exception->getMessage(),500);
        }

    }
}
