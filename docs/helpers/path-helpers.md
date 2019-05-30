# Path Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`app_path`](#method-app-path)
[`base_path`](#method-base-path)
[`config_path`](#method-config-path)
[`database_path`](#method-database-path)
[`public_path`](#method-public-path)
[`resource_path`](#method-resource-path)
[`storage_path`](#method-storage-path)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-app-path"></a>
### `app_path()`

The `app_path` function returns the fully qualified path to the `app` directory. You may also use the `app_path` function to generate a fully qualified path to a file relative to the application directory:

```php
$path = app_path();

$path = app_path('Http/Controllers/Controller.php');
```

---

<a name="method-base-path"></a>
### `base_path()`

The `base_path` function returns the fully qualified path to the project root. You may also use the `base_path` function to generate a fully qualified path to a given file relative to the project root directory:

```php
$path = base_path();

$path = base_path('vendor/bin');
```

---

<a name="method-config-path"></a>
### `config_path()`

The `config_path` function returns the fully qualified path to the application configuration directory:

```php
$path = config_path();
```

---

<a name="method-database-path"></a>
### `database_path()`

The `database_path` function returns the fully qualified path to the application's database directory:

```php
$path = database_path();
```

---

<a name="method-public-path"></a>
### `public_path()`

The `public_path` function returns the fully qualified path to the `public` directory:

```php
$path = public_path();
```

---

<a name="method-resource-path"></a>
### `resource_path()`

The `resource_path` function returns the fully qualified path to the `resources` directory. You may also use the `resource_path` function to generate a fully qualified path to a given file relative to the resources directory:

```php
$path = resource_path();

$path = resource_path('assets/sass/app.scss');
```

---

<a name="method-storage-path"></a>
### `storage_path()`

The `storage_path` function returns the fully qualified path to the `storage` directory. You may also use the `storage_path` function to generate a fully qualified path to a given file relative to the storage directory:

```php
$path = storage_path();

$path = storage_path('app/file.txt');
```
