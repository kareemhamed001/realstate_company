<?php

namespace App\Services\Partner;

use App\Traits\ImagesOperations;

class PartnerService implements \App\Services\Service
{

    use ImagesOperations;
    /**
     * list all records
     * @return mixed
     */
    public function index($pagination = 10): mixed
    {

        try {
            return \App\Models\Partner::query()->paginate($pagination);
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
            return \App\Models\Partner::query()->find($id);
        } catch (\Exception $exception) {
            return $exception->getMessage();
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
            $partner = \App\Models\Partner::query()->find($id);
            $partner->update([
                'name' => $attributes['name'] ?? $partner->name,
                'description' => $attributes['description'] ?? $partner->description,
                'cover_image' => $this->storeFile($attributes['cover_image'] ?? $partner->cover_image, 'partners'),
                'status' => $attributes['link'] ?? $partner->link
            ]);
            return $partner;
        } catch (\Exception $exception) {
            return $exception->getMessage();
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
            return \App\Models\Partner::query()->find($id)->delete();
        } catch (\Exception $exception) {
            return $exception->getMessage();
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
            return \App\Models\Partner::query()
                ->where('name', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%')
                ->paginate($pagination);
        } catch (\Exception $exception) {
            return $exception->getMessage();
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
            return \App\Models\Partner::query()
                ->where('status', 'like', '%' . $attributes['status'] . '%')
                ->paginate($attributes['pagination']);
        } catch (\Exception $exception) {
            return $exception->getMessage();
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
            return \App\Models\Partner::query()->create([
                'name' => $attributes['name'],
                'description' => $attributes['description'],
                'cover_image' => $this->storeFile($attributes['cover_image'], 'partners'),
                'link' => $attributes['link'],
            ]);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }
}
