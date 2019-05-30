# Categories

<a name="available-endpoints"></a>
## Available Endpoints

<div class="collection-method-list" markdown="1">

[Fetch all categories](#endpoint-fetch-all-categories)
[Fetch a single category](#endpoint-fetch-a-single-category)

</div>

<a name="endpoint-listing"></a>
## Endpoint Listing

<a name="endpoint-fetch-all-categories"></a>
### Fetch All Categories

Fetch a collection of all categories.

```txt
GET /api/v1/categories
```

#### Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, categories per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-fetch-a-single-category"></a>
### Fetch A Single Category

Fetch a single category by its handle.

```txt
GET /api/v1/categories/:handle
```

#### Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `handle` | The handle of the category. | *N/A* |
