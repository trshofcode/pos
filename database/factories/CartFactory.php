<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cart>
 */
class CartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [            
                'product_id' => fake()->numberBetween($min = 1, $max = 5),
                'user' => 'irfan@gmail.com',
                'title' => fake()->text(15),
                'price' => fake()->numberBetween($min = 150000, $max = 350000),
                'quantity' => fake()->numberBetween($min =1, $max = 50),
                'pict' => fake()->imageUrl($width = 200, $height = 200),        
        ];
    }
}
