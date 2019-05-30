# Application Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`app_installed`](#method-app-installed)
[`app_codename`](#method-app-codename)
[`app_memory_usage`](#method-app-memory-usage)
[`app_loading_time`](#method-app-loading-time)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-app-installed"></a>
### `app_installed()`

The `app_installed` method will return a boolean value based on if FusionCMS has been installed or not.

```php
$installed = app_installed()

// true
```

---

<a name="method-app-codename"></a>
### `app_codename()`

The `app_codename` method returns the randomly generated site codename prefixed with the secret key.

```php
$codename = app_codename()

// uxorious-particle-aaaabbbbccccddddeeeeffffgggghhhh
```

---

<a name="method-app-memory-usage"></a>
### `app_memory_usage()`

The `app_memory_usage` method returns the memory usage in a human readable format.

```php
$usage = app_memory_usage()

// 2mb
```

---

<a name="method-app-loading-time"></a>
### `app_loading_time()`

The `app_loading_time` method returns the total loading time of the page request in a human readable format.

```php
$time = app_loading_time()

// 0.08s
```
