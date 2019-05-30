# String Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`camel_case`](#method-camel-case)
[`class_basename`](#method-class-basename)
[`e`](#method-e)
[`ends_with`](#method-ends-with)
[`kebab_case`](#method-kebab-case)
[`snake_case`](#method-snake-case)
[`str_limit`](#method-str-limit)
[`starts_with`](#method-starts-with)
[`str_after`](#method-str-after)
[`str_before`](#method-str-before)
[`str_contains`](#method-str-contains)
[`str_finish`](#method-str-finish)
[`str_handle`](#method-str-handle)
[`str_is`](#method-str-is)
[`str_plural`](#method-str-plural)
[`str_random`](#method-str-random)
[`str_singular`](#method-str-singular)
[`str_slug`](#method-str-slug)
[`studly_case`](#method-studly-case)
[`title_case`](#method-title-case)
[`trans`](#method-trans)
[`trans_choice`](#method-trans-choice)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-camel-case"></a>
### `camel_case()`

The `camel_case` function converts the given string to `camelCase`:

```php
$camel = camel_case('foo_bar');

// fooBar
```

---

<a name="method-class-basename"></a>
### `class_basename()`

The `class_basename` returns the class name of the given class with the class' namespace removed:

```php
$class = class_basename('Foo\Bar\Baz');

// Baz
```

---

<a name="method-e"></a>
### `e()`

The `e` function runs PHP's `htmlspecialchars` function with the `double_encode` option set to `false`:

```php
echo e('<html>foo</html>');

// <html>foo</html>
```

---

<a name="method-ends-with"></a>
### `ends_with()`

The `ends_with` function determines if the given string ends with the given value:

```php
$value = ends_with('This is my name', 'name');

// true
```

---

<a name="method-kebab-case"></a>
### `kebab_case()`

The `kebab_case` function converts the given string to `kebab-case`:

```php
$value = kebab_case('fooBar');

// foo-bar
```

---

<a name="method-snake-case"></a>
### `snake_case()`

The `snake_case` function converts the given string to `snake_case`:

```php
$snake = snake_case('fooBar');

// foo_bar
```

---

<a name="method-str-limit"></a>
### `str_limit()`

The `str_limit` function limits the number of characters in a string. The function accepts a string as its first argument and the maximum number of resulting characters as its second argument:

```php
$value = str_limit('The PHP framework for web artisans.', 7);

// The PHP...
```

---

<a name="method-starts-with"></a>
### `starts_with()`

The `starts_with` function determines if the given string begins with the given value:

```php
$value = starts_with('This is my name', 'This');

// true
```

---

<a name="method-str-after"></a>
### `str_after()`

The `str_after` function returns everything after the given value in a string:

```php
$value = str_after('This is: a test', 'This is:');

// ' a test'
```

---

<a name="method-str-before"></a>
### `str_before()`

The `str_before` function returns everything before the given value in a string:

```php
$value = str_before('Test :it before', ':it before');

// 'Test '
```

---

<a name="method-str-contains"></a>
### `str_contains()`

The `str_contains` function determines if the given string contains the given value:

```php
$value = str_contains('This is my name', 'my');

// true
```

You may also pass an array of values to determine if the given string contains any of the values:

```php
$value = str_contains('This is my name', ['my', 'foo']);

// true
```

---

<a name="method-str-finish"></a>
### `str_finish()`

The `str_finish` function adds a single instance of the given value to a string if it does not already end with it:

```php
$string = str_finish('this/string', '/');
$string2 = str_finish('this/string/', '/');

// this/string/
```

---

<a name="method-str-handle"></a>
### `str_handle()`

The `str_handle` function generates a code friendly "handle" from the given string:

```php
$title = str_slug('Laravel 5 Framework');

// laravel_5_framework
```

---

<a name="method-str-is"></a>
### `str_is()`

The `str_is` function determines if a given string matches a given pattern. Asterisks may be used to indicate wildcards:

```php
$value = str_is('foo*', 'foobar');

// true

$value = str_is('baz*', 'foobar');

// false
```

---

<a name="method-str-plural"></a>
### `str_plural()`

The `str_plural` function converts a string to its plural form. This function currently only supports the English language:

```php
$plural = str_plural('car');

// cars

$plural = str_plural('child');

// children
```

You may provide an integer as a second argument to the function to retrieve the singular or plural form of the string:

```php
$plural = str_plural('child', 2);

// children

$plural = str_plural('child', 1);

// child
```

---

<a name="method-str-random"></a>
### `str_random()`

The `str_random` function generates a random string of the specified length. This function uses PHP's `random_bytes` function:

```php
$string = str_random(40);
```

---

<a name="method-str-singular"></a>
### `str_singular()`

The `str_singular` function converts a string to its singular form. This function currently only supports the English language:

```php
$singular = str_singular('cars');

// car
```

---

<a name="method-str-slug"></a>
### `str_slug()`

The `str_slug` function generates a URL friendly "slug" from the given string:

```php
$title = str_slug('Laravel 5 Framework');

// laravel-5-framework
```

---

<a name="method-studly-case"></a>
### `studly_case()`

The `studly_case` function converts the given string to `StudlyCase`:

```php
$value = studly_case('foo_bar');

// FooBar
```

<a name="method-title-case"></a>
### `title_case()`

The `title_case` function converts the given string to `Title Case`:

```php
$title = title_case('a nice title uses the correct case');

// A Nice Title Uses The Correct Case
```

---

<a name="method-trans"></a>
### `trans()`

The `trans` function translates the given language line using Laravel's [localization files](//laravel.com/5.4/localization):

```php
echo trans('validation.required'):
```

---

<a name="method-trans-choice"></a>
### `trans_choice()`

The `trans_choice` function translates the given language line with inflection:

```php
$value = trans_choice('foo.bar', $count);
```
