# Matrix Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`matrix_exists`](#method-matrix-exists)
[`matrix_collections`](#method-matrix-collections)
[`matrix_entries`](#method-matrix-entries)
[`matrix_collection`](#method-matrix-collection)
[`matrix_type`](#method-matrix-type)
[`matrix_builder`](#method-matrix-builder)
[`matrix_make`](#method-matrix-make)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-matrix-exists"></a>
### `matrix_exists()`

The `matrix_exists` method will return a boolean value based on if the given matrix collection exists or not.

```php
if (matrix_exists('blog')) {
    // The matrix collection "blog" exists
}
```

---

<a name="method-matrix-collections"></a>
### `matrix_collections()`

The `matrix_collections` method returns an instance of the matrix collection model.

```php
foreach (matrix_collections()->get() as $collection) {
    //
}
```

---

<a name="method-matrix-entries"></a>
### `matrix_entries()`

The `matrix_entries` method returns an instance of the matrix entry model for the given matrix collection handle.

```php
$posts = matrix_entries('blog');
```

You may also pass through a second parameter to limit the entries from a specific type associated with the collection.

```php
$articles = matrix_entries('support', 'faq');
```

---

### Query Scopes
The Matrix Entry model instance provides easy to use query scopes for common queries used in pulling and sorting content. Query scopes are easy to use, only requiring you to chain them on to your query:

```php
matrix_entries('blog')
    ->sorted()
    ->enabled()
    ->live()
    ->paginate(15);
```

#### `enabled()`
Filters out disabled items.

#### `disabled()`
Filters out enabled items.

#### `live()`
Filters out items that have a `publish_at` greater than today's date, as well as items that have a `expire_at` value equal or less than today's date.

#### `sorted()`
Sorts items according to the matrix type settings.

---

<a name="method-matrix-collection"></a>
### `matrix_collection()`

The `matrix_collection` method returns an instance of the matrix collection model for the given handle.

```
$blog = matrix_collection('blog');
```

---

<a name="method-matrix-type"></a>
### `matrix_type()`

The `matrix_type` method returns an instance of the matrix type model for the given collection and type handle.

```
$faq = matrix_collection('support', 'faq');
```

---

<a name="method-matrix-builder"></a>
### `matrix_builder()`

The `matrix_builder` method returns an instance of the matrix builder using the passed collection and type handles.

```
$builder = matrix_builder('blog', 'posts');
```

---

<a name="method-matrix-make"></a>
### `matrix_make()`

The `matrix_make` method returns an instance of the matrix entry model using the passed collection and type handles.

```
$model = matrix_make('blog', 'posts');
```
