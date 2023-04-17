<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Celier extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'utilisateur_id',
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function bouteilles()
    {
        return $this->belongsToMany(Bouteille::class);
    }
}
