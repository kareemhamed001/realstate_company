<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function images(){
        return $this->hasMany(ProjectImage::class);
    }

    function getCoverImageAttribute(){
        return url($this->attributes['cover_image']);
    }

    function geManagerImageAttribute(){
        return url($this->attributes['manager_image']);
    }

    function outSideImages(){
        return $this->hasMany(ProjectImage::class)->where('type', 'outside');
    }

    function inSideImages(){
        return $this->hasMany(ProjectImage::class)->where('type', 'inside');
    }

    function features(){
        return $this->hasMany(ProjectFeature::class);
    }

    function prices(){
        return $this->hasMany(ProjectPrice::class);
    }

    function paymentPlans(){
        return $this->hasMany(ProjectPaymentPlan::class);
    }


    function orders(){
        return $this->hasMany(ProjectOrder::class);
    }

    function nearPlaces(){
        return $this->hasMany(ProjectNearPlace::class);
    }

}
