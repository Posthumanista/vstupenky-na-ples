@props([
    'text',
    'livewireFunction',
])
<div>
    <button class="m-4 p-4 text-5xl xl:text-8xl tracking-widest font-extrabold hover:text-gray-400 bg-gray-700 hover:bg-gray-800" wire:click="{{ $livewireFunction }}"> {{ $text }} </button>
</div>