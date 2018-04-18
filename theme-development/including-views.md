# Including Sub-Views

Blade's `@include` directive allows you to include a Blade view from within another view. All variables that are available to the parent view will be made available to the included view:

```php
<div>
    @include('shared.errors')

    <form>
        <!-- Form Contents -->
    </form>
</div>
```

Even though the included view will inherit all data available in the parent view, you may also pass an array of extra data to the included view:

```php
@include('view.name', ['some' => 'data'])
```

Of course, if you attempt to `@include` a view which does not exist, an error will be thrown as expected. If you would like to include a view that may or may not be present, you should use the `@includeIf` directive:

```php
@includeIf('view.name', ['some' => 'data'])
```

If you would like to `@include` a view depending on a given boolean condition, you may use the `@includeWhen` directive:

```php
@includeWhen($boolean, 'view.name', ['some' => 'data'])
```

> #### Note
> You should avoid using the `__DIR__` and `__FILE__` constants in your Blade views, since they will refer to the location of the cached, compiled view.

## Rendering Views For Collections
You may combine loops and includes into one line with Blade's `@each` directive:

```php
@each('view.name', $jobs, 'job')
```

The first argument is the view partial to render for each element in the array or collection. The second argument is the array or collection you wish to iterate over, while the third argument is the variable name that will be assigned to the current iteration within the view. So, for example, if you are iterating over an array of `jobs`, typically you will want to access each job as a `job` variable within your view partial. The key for the current iteration will be available as the `key` variable within your view partial.

You may also pass a fourth argument to the `@each` directive. This argument determines the view that will be rendered if the given array is empty.

```php
@each('view.name', $jobs, 'job', 'view.empty')
```
