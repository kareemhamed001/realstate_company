<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectImage extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    function project(){
        return $this->belongsTo(Project::class);
    }

    function getImageAttribute(){
        return url($this->attributes['image']);
    }
}
