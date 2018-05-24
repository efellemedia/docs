# Form Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`render_form`](#method-render-form)
[`honeypot_fields`](#method-honeypot-fields)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-render-form"></a>
### `render_form()`

The `render_form` method will render a complete HTML form for the given form.

```php
render_form('contact_us');
```

By default, this will use a standard HTML view template based on Bootstrap. You may however, override this and use your own view template by specifying the second parameter with the path to your view file. Lastly, to forward along any additional data to your custom view, you may provide the third parameter with a key-value array.

```php
render_form('contact_us', 'forms.custom', ['lorem' => 'ipsum']);
```

---

<a name="method-honeypot-fields"></a>
### `honeypot_fields()`

The `honeypot_fields` method generates hidden HTML input fields to help combat spam. For example, using Blade syntax:

```php
{!! honeypot_fields() !!}
```
