# Miscellaneous Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`abort`](#method-abort)
[`abort_if`](#method-abort-if)
[`abort_unless`](#method-abort-unless)
[`auth`](#method-auth)
[`back`](#method-back)
[`bcrypt`](#method-bcrypt)
[`byte_converter`](#method-byte-converter)
[`cache`](#method-cache)
[`collect`](#method-collect)
[`config`](#method-config)
[`convert_to_bytes`](#method-convert-to-bytes)
[`dd`](#method-dd)
[`dispatch`](#method-dispatch)
[`env`](#method-env)
[`event`](#method-event)
[`factory`](#method-factory)
[`friendly_byte`](#method-friendly-byte)
[`human_filesize`](#method-human-filesize)
[`info`](#method-info)
[`logger`](#method-logger)
[`method_field`](#method-method-field)
[`now`](#method-now)
[`old`](#method-old)
[`optional`](#method-optional)
[`redirect`](#method-redirect)
[`render_markdown`](#method-render-markdown)
[`report`](#method-report)
[`request`](#method-request)
[`response`](#method-response)
[`retry`](#method-retry)
[`session`](#method-session)
[`tap`](#method-tap)
[`today`](#method-today)
[`value`](#method-value)
[`view`](#method-view)


</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-abort"></a>
### `abort()`

The `abort` function throws a HTTP exception which will be rendered by the exception handler:

```php
abort(401);
```

You may also provide the exception's response text:

```
abort(401, 'Unauthorized.');
```

---

<a name="method-abort-if"></a>
### `abort_if()`

The `abort_if` function throws an HTTP exception if a given boolean expression evaluates to `true`:

```php
abort_if(! Auth::user()->isAdmin(), 403);
```

---

<a name="method-abort-unless"></a>
### `abort_unless()`

The `abort_unless` function throws an HTTP exception if a given boolean expression evaluates to `false`:

```php
abort_unless(Auth::user()->isAdmin(), 403);
```

---

<a name="method-auth"></a>
### `auth()`

The `auth` function returns an authenticator instance. You may use it instead of the `Auth` facade for convenience:

```php
$user = auth()->user();
```

---

<a name="method-back"></a>
### `back()`

The `back()` function generates a redirect response to the user's previous location:

```php
return back();
```

---

<a name="method-bcrypt"></a>
### `bcrypt()`

The `bcrypt` function hashes the given value using Bcrypt. You may use it as an alternative to the `Hash` facade:

```php
$password = bcrypt('my-secret-password');
```

---

<a name="method-byte-converter"></a>
### `byte_converter()`

The `byte_converter` method converts one byte type into another byte type.

```php
$megabytes = byte_converter('3072', 'KB', 'MB');

// 3MB

$kilobytes = byte_converter('1024', 'B', 'KB');

// 1KB
```

---

<a name="method-cache"></a>
### `cache()`

The `cache` function may be used to get values from the cache. If the given key does not exist in the cache, an optional default value will be returned:

```php
$value = cache('key');

$value = cache('key', 'default');
```

You may add items to the cache by passing an array of key / value pairs to the function. You should also pass the number of minutes or duration the cached value should be considered valid:

```
cache(['key' => 'value'], 5);

cache(['key' => 'value'], Carbon::now()->addSeconds(10));
```

---

<a name="method-collect"></a>
### `collect()`

The `collect` function creates a [collection](/{{version}}/collections) instance from the given array:

```
$collection = collect(['taylor', 'abigail']);
```

---

<a name="method-config"></a>
### `config()`

The `config` function gets the value of a configuration variable. The configuration values may be accessed using "dot" syntax, which includes the name of the file and the option you wish to access. A default value may be specified and is returned if the configuration option does not exist:

```php
$value = config('app.timezone');

$value = config('app.timezone', $default);
```

The `config` helper may also be used to set configuration variables at runtime by passing an array of key / value pairs:

```
config(['app.debug' => true]);
```

---

<a name="method-convert-to-bytes"></a>
### `convert_to_bytes()`

The `convert_to_bytes` method converts a human readable file size to bytes. If the byte format is not provided, it'll be presumed as bytes.

```php
$fileSize = convert_to_bytes('3MB');

// 3145728
```

---

<a name="method-dd"></a>
### `dd()`

The `dd` function dumps the given variables and ends execution of the script:

```php
dd($value);

dd($value1, $value2, $value3, ...);
```

If you do not want to halt the execution of your script, use the `dump` function instead:

```php
dump($value);
```

---

<a name="method-dispatch"></a>
### `dispatch()`

The `dispatch` function pushes a new job onto the Laravel [job queue](/{{version}}/queues):

```php
dispatch(new App\Jobs\SendEmails);
```

---

<a name="method-env"></a>
### `env()`

The `env` function gets the value of an environment variable or returns a default value:

```php
$env = env('APP_ENV');

// Return a default value if the variable doesn't exist...
$env = env('APP_ENV', 'production');
```

---

<a name="method-event"></a>
### `event()`

The `event` function dispatches the given [event](/{{version}}/events) to its listeners:

```php
event(new UserRegistered($user));
```

---

<a name="method-factory"></a>
### `factory()`

The `factory` function creates a model factory builder for a given class, name, and amount. It can be used while [testing](//laravel.com/5.4/database-testing#writing-factories) or [seeding](//laravel.com/5.4/seeding#using-model-factories):

```php
$user = factory(App\User::class)->make();
```

---

<a name="method-friendly-byte"></a>
### `friendly_byte()`

The `friendly_byte` method convert bytes to a human readable format.

```php
$fileSize = friendly_byte('5242880');

// 5MB
```

---

<a name="method-human-filesize"></a>
### `human_filesize()`

The `human_filesize` method returns the passed bytes in a human readable format.

```php
$filesize = human_filesize(1030000);

// 1.03 MB
```

---

<a name="method-info"></a>
### `info()`

The `info` function will write information to the log:

```php
info('Some helpful information!');
```

An array of contextual data may also be passed to the function:

```php
info('User login attempt failed.', ['id' => $user->id]);
```

---

<a name="method-logger"></a>
### `logger()`

The `logger` function can be used to write a `debug` level message to the log:

```php
logger('Debug message');
```

An array of contextual data may also be passed to the function:

```php
logger('User has logged in.', ['id' => $user->id]);
```

A [logger](//laravel.com/5.4/errors#logging) instance will be returned if no value is passed to the function:

```php
logger()->error('You are not allowed here.');
```

---

<a name="method-method-field"></a>
### `method_field()`

The `method_field` function generates an HTML `hidden` input field containing the spoofed value of the form's HTTP verb. For example, using [Blade syntax](blade):

```php
<form method="POST">
    {{ method_field('DELETE') }}
</form>
```

---

<a name="method-now"></a>
### `now()`

The `now` function creates a new `Illuminate\Support\Carbon` instance for the current time:

```php
return now();
```

---

<a name="method-old"></a>
### `old()`

The `old` function [retrieves](/{{version}}/requests#retrieving-input) an old input value flashed into the session:

```php
$value = old('value');

$value = old('value', 'default');
```

---

<a name="method-optional"></a>
### `optional()`

The `optional` function accepts any argument and allows you to access properties or call methods on that object. If the given object is `null`, properties and methods will simply return `null` instead of causing an error:

```php
return optional($user->address)->street;

{!! old('name', optional($user)->name) !!}
```

---

<a name="method-redirect"></a>
### `redirect()`

The `redirect` function returns a redirect HTTP response, or returns the redirector instance if called with no arguments:

```php
return redirect('/home');

return redirect()->route('route.name');
```

---

<a name="method-render-markdown"></a>
### `render_markdown()`

The `render_markdown` method compiles the given markdown string into HTML.

```php
$html = render_markdown('# Hello World!');

// <h1>Hello World!</h1>
```

---

<a name="method-report"></a>
### `report()`

The `report` function will report an exception using your exception handler's `report` method:

```php
report($e);
```

---

<a name="method-request"></a>
### `request()`

The `request` function returns the current [request](/{{version}}/requests) instance or obtains an input item:

```php
$request = request();

$value = request('key', $default = null)
```

---

<a name="method-response"></a>
### `response()`

The `response` function creates a [response](/{{version}}/responses) instance or obtains an instance of the response factory:

```php
return response('Hello World', 200, $headers);

return response()->json(['foo' => 'bar'], 200, $headers);
```

---

<a name="method-retry"></a>
### `retry()`

The `retry` function attempts to execute the given callback until the given maximum attempt threshold is met. If the callback does not throw an exception, it's return value will be returned. If the callback throws an exception, it will automatically be retried. If the maximum attempt count is exceeded, the exception will be thrown:

```php
return retry(5, function () {
    // Attempt 5 times while resting 100ms in between attempts...
}, 100);
```

---

<a name="method-session"></a>
### `session()`

The `session` function may be used to get or set session values:

```php
$value = session('key');
```

You may set values by passing an array of key / value pairs to the function:

```php
session(['chairs' => 7, 'instruments' => 3]);
```

The session store will be returned if no value is passed to the function:

```php
$value = session()->get('key');

session()->put('key', $value);
```

---

<a name="method-tap"></a>
### `tap()`

The `tap` function accepts two arguments: an arbitrary `$value` and a Closure. The `$value` will be passed to the Closure and then be returned by the `tap` function. The return value of the Closure is irrelevant:

```php
$user = tap(User::first(), function ($user) {
    $user->name = 'taylor';

    $user->save();
});
```

If no Closure is passed to the `tap` function, you may call any method on the given `$value`. The return value of the method you call will always be `$value`, regardless of the what the method actually returns in its definition. For example, the Eloquent `update` method typically returns an integer. However, we can force the method to return the model itself by chaining the `update` method call through the `tap` function:

```php
$user = tap($user)->update([
    'name' => $name,
    'email' => $email
]);
```

---

<a name="method-today"></a>
### `today()`

The `today` function creates a new `Illuminate\Support\Carbon` instance for the current date:

```php
return today();
```

---

<a name="method-value"></a>
### `value()`

The `value` function's behavior will simply return the value it is given. However, if you pass a `Closure` to the function, the `Closure` will be executed then its result will be returned:

```php
$value = value(function () {
    return 'bar';
});
```

---

<a name="method-view"></a>
### `view()`

The `view` function retrieves a [view](//laravel.com/5.4/views) instance:

```php
return view('auth.login');
```
