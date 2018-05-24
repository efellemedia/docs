# Category Helpers

<a name="available-methods"></a>
## Available Methods

<div class="collection-method-list" markdown="1">

[`category_group_exists`](#method-category-group-exists)
[`category_groups`](#method-category-groups)
[`categories`](#method-categories)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-category-group-exists"></a>
### `category_group_exists()`

The `category_group_exists` method will return a boolean value based on if the given category group exists or not.

```php
if (category_group_exists('blog')) {
    // The category group "blog" exists
}
```

---

<a name="method-category-groups"></a>
### `category_groups()`
The `category_groups` method returns an instance of the category group model.

```php
foreach (category_groups()->all() as $group) {
    //
}
```

---

<a name="method-categories"></a>
### `categories()`
The `categories` method returns an instance of the category model for the given group.

```php
// Fetch all categories under the "blog" category group
foreach (categories('blog')->all() as $category) {
    //
}
```
