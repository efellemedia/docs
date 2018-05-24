# Asset Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`byte_converter`](#method-byte-converter)
[`convert_to_bytes`](#method-convert-to-bytes)
[`friendly_byte`](#method-friendly-byte)

</div>

<a name="method-listing"></a>
## Method Listing

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

<a name="method-convert-to-bytes"></a>
### `convert_to_bytes()`

The `convert_to_bytes` method converts a human readable file size to bytes. If the byte format is not provided, it'll be presumed as bytes.

```php
$fileSize = convert_to_bytes('3MB');

// 3145728
```

---

<a name="method-friendly-byte"></a>
### `friendly_byte()`

The `friendly_byte` method convert bytes to a human readable format.

```php
$fileSize = friendly_byte('5242880');

// 5MB
```
