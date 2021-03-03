@props([
    'field',
])

@if($field->action->read())
    <span {{ $attributes }}>
        {{ $field->value }}
    </span>
@elseif($field->action->write())
    <div wire:ignore>
        <input
            x-data="{
                value: @entangle($attributes->wire('model')).defer,
                pikaday: null
            }"
            x-init='
                pikaday = new Pikaday({
                    field: $el,
                    onSelect: () => value = pikaday.toString(),
                    ... @json((object) $field->options)
                });

                pikaday.setDate(value)
            '
            type="text"
            id="{{ $field->name }}"
            name="{{ $field->name }}"
            value="{{ $field->value ?? '' }}"
            placeholder="{{ $field->placeholder }}"
            @if(! $field->isEnabled()) disabled @endif
            class="form-input"
            {{ $attributes->whereDoesntStartWith('wire:model') }}
        />
    </div>
@endif
