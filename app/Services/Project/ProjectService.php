<?php

namespace App\Services\Project;


use App\Services\Service;
use App\Traits\ImagesOperations;

class ProjectService implements Service
{

    use ImagesOperations;

    /**
     * list all records
     * @return mixed
     */
    public function index($pagination = 10,$type='compound'): mixed
    {
        try {
            return \App\Models\Project::query()->where('type',$type)->with('images')->paginate($pagination);
        } catch (\Exception $exception) {
           throw $exception;
        }
    }

    /**
     * show a record
     * @param $id
     * @return mixed
     */
    public function show($id): mixed
    {
        try {
            return \App\Models\Project::query()->find($id);
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    /**
     * update a record
     * @param $id
     * @param array $attributes
     * @return mixed
     */
    public function update($id, array $attributes): mixed
    {
        try {
            $gallery = \App\Models\Project::query()->find($id);
            $gallery->update([
                'name' => $attributes['name']??$gallery->name,
                'description' => $attributes['description']??$gallery->description,
                'cover_image' => $this->storeFile($attributes['cover_image']??$gallery->cover_image, 'galleries'),
                'status' => $attributes['status']??$gallery->status
            ]);

            foreach ($attributes['images'] as $image) {
                $gallery->images()->create([
                    'image' => $this->storeFile($image, 'galleries')
                ]);
            }

            return $gallery;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    /**
     * delete a record
     * @param $id
     * @return mixed
     */
    public function delete($id): mixed
    {
        try {
            $gallery = \App\Models\Project::query()->find($id);
            $gallery->delete();
            return $gallery;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    /**
     * search records
     * @param $search
     * @return mixed
     */
    public function search($search, $pagination = 10): mixed
    {
        try {
            return \App\Models\Project::where('name', 'LIKE', '%' . $search . '%')
                ->orWhere('description', 'LIKE', '%' . $search . '%')
                ->paginate($pagination);
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    /**
     * filter records
     * @param $attributes
     * @return mixed
     */
    public function filter($attributes): mixed
    {
        try {
            return \App\Models\Project::where('status', $attributes['status'] ?? 'active')
                ->paginate($attributes['pagination']);
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    /**
     * store a record
     * @param $attributes
     * @return mixed
     */
    public function store($attributes): mixed
    {
        try {
            $gallery = \App\Models\Project::query()->create([
                'name' => $attributes['name'],
                'description' => $attributes['description'],
                'cover_image' => $this->storeFile($attributes['cover_image'], 'galleries'),
                'status' => $attributes['status']
            ]);

            foreach ($attributes['images'] as $image) {
                $gallery->images()->create([
                    'image' => $this->storeFile($image, 'galleries')
                ]);
            }

            return $gallery;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }

    public function register($id, $data)
    {
        try {
            $project = \App\Models\Project::query()->find($id);

            if (!$project) {
                throw new \Exception('project not found');
            }
            $project->orders()->create([
                'phone' => $data['phone'],
                'email' => $data['email'],
            ]);
            return $project;
        } catch (\Exception $exception) {
            throw $exception;
        }
    }
}
