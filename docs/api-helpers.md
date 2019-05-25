---
title: API
---

# API Helpers

[[toc]]

---

## Available Methods

<div class="collection-method-list" markdown="1">

[`dispatcher`](#method-dispatcher)

</div>

## Method Listing

### `dispatcher()`

The `dispatcher` method returns an instance of the internal API dispatcher. This is useful to get data from the API within Blade templates.

```php
$category = dispatcher()->get('v1/bigcommerce/categories')

$navigation = dispatcher()->get('v1/navigation/top-menu/items')
```
