# URL Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`action`](#method-action)
[`asset`](#method-asset)
[`secure_asset`](#method-secure-asset)
[`route`](#method-route)
[`secure_url`](#method-secure-url)
[`url`](#method-url)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-action"></a>
### `action()`

The `action` function generates a URL for the given controller action. You do not need to pass the full namespace to the controller. Instead, pass the controller class name relative to the `App\Http\Controllers` namespace:

```php
$url = action('HomeController@getIndex');
```

If the method accepts route parameters, you may pass them as the second argument to the method:

```php
$url = action('UserController@profile', ['id' => 1]);
```

---

<a name="method-asset"></a>
### `asset()`

Generate a URL for an asset using the current scheme of the request (HTTP or HTTPS):

```php
$url = asset('img/photo.jpg');
```

---

<a name="method-secure-asset"></a>
### `secure_asset()`

Generate a URL for an asset using HTTPS:

```php
echo secure_asset('foo/bar.zip', $title, $attributes = []);
```

---

<a name="method-route"></a>
### `route()`

The `route` function generates a URL for the given named route:

```php
$url = route('routeName');
```

If the route accepts parameters, you may pass them as the second argument to the method:

```php
$url = route('routeName', ['id' => 1]);
```

By default, the `route` function generates an absolute URL. If you wish to generate a relative URL, you may pass `false` as the third parameter:

```php
$url = route('routeName', ['id' => 1], false);
```

---

<a name="method-secure-url"></a>
### `secure_url()`

The `secure_url` function generates a fully qualified HTTPS URL to the given path:

```php
echo secure_url('user/profile');

echo secure_url('user/profile', [1]);
```

---

<a name="method-url"></a>
### `url()`

The `url` function generates a fully qualified URL to the given path:

```php
echo url('user/profile');

echo url('user/profile', [1]);
```

If no path is provided, a `Illuminate\Routing\UrlGenerator` instance is returned:

```php
echo url()->current();
echo url()->full();
echo url()->previous();
```
