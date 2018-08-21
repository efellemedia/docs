# Array Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`array_add`](#method-array-add)
[`array_collapse`](#method-array-collapse)
[`array_divide`](#method-array-divide)
[`array_dot`](#method-array-dot)
[`array_except`](#method-array-except)
[`array_first`](#method-array-first)
[`array_flatten`](#method-array-flatten)
[`array_forget`](#method-array-forget)
[`array_get`](#method-array-get)
[`array_has`](#method-array-has)
[`array_last`](#method-array-last)
[`array_only`](#method-array-only)
[`array_pluck`](#method-array-pluck)
[`array_prepend`](#method-array-prepend)
[`array_pull`](#method-array-pull)
[`array_set`](#method-array-set)
[`array_sort`](#method-array-sort)
[`array_sort_recursive`](#method-array-sort-recursive)
[`array_where`](#method-array-where)
[`array_wrap`](#method-array-wrap)
[`head`](#method-head)
[`last`](#method-last)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-array-add"></a>
### `array_add()`

The `array_add` function adds a given key / value pair to the array if the given key doesn't already exist in the array:

```php
$array = array_add(['name' => 'Desk'], 'price', 100);

// ['name' => 'Desk', 'price' => 100]
```

---

<a name="method-array-collapse"></a>
### `array_collapse()`

The `array_collapse` function collapses an array of arrays into a single array:

```php
$array = array_collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

<a name="method-array-divide"></a>
### `array_divide()`

The `array_divide` function returns two arrays, one containing the keys, and the other containing the values of the original array:

```php
list($keys, $values) = array_divide(['name' => 'Desk']);

// $keys: ['name']

// $values: ['Desk']
```

---

<a name="method-array-dot"></a>
### `array_dot()`

The `array_dot` function flattens a multi-dimensional array into a single level array that uses "dot" notation to indicate depth:

```php
$array = array_dot(['foo' => ['bar' => 'baz']]);

// ['foo.bar' => 'baz'];
```

---

<a name="method-array-except"></a>
### `array_except()`

The `array_except` function removes the given key / value pairs from the array:

```php
$array = ['name' => 'Desk', 'price' => 100];

$array = array_except($array, ['price']);

// ['name' => 'Desk']
```

---

<a name="method-array-first"></a>
### `array_first()`

The `array_first` function returns the first element of an array passing a given truth test:

```php
$array = [100, 200, 300];

$value = array_first($array, function ($value, $key) {
    return $value >= 150;
});

// 200
```

A default value may also be passed as the third parameter to the method. This value will be returned if no value passes the truth test:

```php
$value = array_first($array, $callback, $default);
```

---

<a name="method-array-flatten"></a>
### `array_flatten()`

The `array_flatten` function will flatten a multi-dimensional array into a single level.

```php
$array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

$array = array_flatten($array);

// ['Joe', 'PHP', 'Ruby'];
```

---

<a name="method-array-forget"></a>
### `array_forget()`

The `array_forget` function removes a given key / value pair from a deeply nested array using "dot" notation:

```php
$array = ['products' => ['desk' => ['price' => 100]]];

array_forget($array, 'products.desk');

// ['products' => []]
```

---

<a name="method-array-get"></a>
### `array_get()`

The `array_get` function retrieves a value from a deeply nested array using "dot" notation:

```php
$array = ['products' => ['desk' => ['price' => 100]]];

$value = array_get($array, 'products.desk');

// ['price' => 100]
```

The `array_get` function also accepts a default value, which will be returned if the specific key is not found:

```php
$value = array_get($array, 'names.john', 'default');
```

---

<a name="method-array-has"></a>
### `array_has()`

The `array_has` function checks that a given item or items exists in an array using "dot" notation:

```php
$array = ['product' => ['name' => 'desk', 'price' => 100]];

$hasItem = array_has($array, 'product.name');

// true

$hasItems = array_has($array, ['product.price', 'product.discount']);

// false
```

---

<a name="method-array-last"></a>
### `array_last()`

The `array_last` function returns the last element of an array passing a given truth test:

```php
$array = [100, 200, 300, 110];

$value = array_last($array, function ($value, $key) {
    return $value >= 150;
});

// 300
```

A default value may be passed as the third argument to the method. This value will be returned if no value passes the truth test:

```php
$value = array_last($array, $callback, $default);
```

---

<a name="method-array-only"></a>
### `array_only()`

The `array_only` function will return only the specified key / value pairs from the given array:

```php
$array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];

$array = array_only($array, ['name', 'price']);

// ['name' => 'Desk', 'price' => 100]
```

---

<a name="method-array-pluck"></a>
### `array_pluck()`

The `array_pluck` function will pluck a list of the given key / value pairs from the array:

```php
$array = [
    ['developer' => ['id' => 1, 'name' => 'Taylor']],
    ['developer' => ['id' => 2, 'name' => 'Abigail']],
];

$array = array_pluck($array, 'developer.name');

// ['Taylor', 'Abigail'];
```

You may also specify how you wish the resulting list to be keyed:

```php
$array = array_pluck($array, 'developer.name', 'developer.id');

// [1 => 'Taylor', 2 => 'Abigail'];
```

---

<a name="method-array-prepend"></a>
### `array_prepend()`

The `array_prepend` function will push an item onto the beginning of an array:

```php
$array = ['one', 'two', 'three', 'four'];

$array = array_prepend($array, 'zero');

// $array: ['zero', 'one', 'two', 'three', 'four']
```

If needed, you may specify the key that should be used for the value:

```php
$array = ['price' => 100];

$array = array_prepend($array, 'Desk', 'name');

// $array: ['name' => 'Desk', 'price' => 100]
```

---

<a name="method-array-pull"></a>
### `array_pull()`

The `array_pull` function returns and removes a key / value pair from the array:

```php
$array = ['name' => 'Desk', 'price' => 100];

$name = array_pull($array, 'name');

// $name: Desk

// $array: ['price' => 100]
```

A default value may be passed as the third argument to the method. This value will be returned if the key doesn't exist:

```php
$value = array_pull($array, $key, $default);
```

---

<a name="method-array-set"></a>
### `array_set()`

The `array_set` function sets a value within a deeply nested array using "dot" notation:

```php
$array = ['products' => ['desk' => ['price' => 100]]];

array_set($array, 'products.desk.price', 200);

// ['products' => ['desk' => ['price' => 200]]]
```

---

<a name="method-array-sort"></a>
### `array_sort()`

The `array_sort` function sorts the array by the results of the given Closure:

```php
$array = [
    ['name' => 'Desk'],
    ['name' => 'Chair'],
];

$array = array_values(array_sort($array, function ($value) {
    return $value['name'];
}));

/*
    [
        ['name' => 'Chair'],
        ['name' => 'Desk'],
    ]
*/
```

---

<a name="method-array-sort-recursive"></a>
### `array_sort_recursive()`

The `array_sort_recursive` function recursively sorts the array using the `sort` function:

```php
$array = [
    [
        'Roman',
        'Taylor',
        'Li',
    ],
    [
        'PHP',
        'Ruby',
        'JavaScript',
    ],
];

$array = array_sort_recursive($array);

/*
    [
        [
            'Li',
            'Roman',
            'Taylor',
        ],
        [
            'JavaScript',
            'PHP',
            'Ruby',
        ]
    ];
*/
```

---

<a name="method-array-where"></a>
### `array_where()`

The `array_where` function filters the array using the given Closure:

```php
$array = [100, '200', 300, '400', 500];

$array = array_where($array, function ($value, $key) {
    return is_string($value);
});

// [1 => 200, 3 => 400]
```

---

<a name="method-array-wrap"></a>
### `array_wrap()`

The `array_wrap` function will wrap the given value in an array. If the given value is already an array it will not be changed:

```php
$string = 'Laravel';

$array = array_wrap($string);

// [0 => 'Laravel']
```

---

<a name="method-head"></a>
### `head()`

The `head` function returns the first element in the given array:

```php
$array = [100, 200, 300];

$first = head($array);

// 100
```

---

<a name="method-last"></a>
### `last()`

The `last` function returns the last element in the given array:

```php
$array = [100, 200, 300];

$last = last($array);

// 300
```
