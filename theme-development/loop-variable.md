# The Loop Variable

When looping, a `$loop` variable will be available inside of your loop. This variable provides access to some useful bits of information such as the current loop index and whether this is the first or last iteration through the loop:

```blade
@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif

    @if ($loop->last)
        This is the last iteration.
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```

If you are in a nested loop, you may access the parent loop's `$loop` variable via the `parent` property:

```blade
@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            This is first iteration of the parent loop.
        @endif
    @endforeach
@endforeach
```

The `$loop` variable also contains a variety of other useful properties:

| Property | Description |
|----------|-------------|
| `$loop->index` | The index of the current loop iteration (starts at `0`). |
| `$loop->iteration` | The current loop iteration (starts at `1`). |
| `$loop->remaining` | The iteration remaining in the loop. |
| `$loop->count` | The total number of items in the array being iterated. |
| `$loop->first` | Whether this is the first iteration through the loop. |
| `$loop->last` | Whether this is the last iteration through the loop. |
| `$loop->depth` | The nesting level of the current loop. |
| `$loop->parent` | When in a nested loop, the parent's loop variable. |
