# Matrix

<a name="available-endpoints"></a>
## Available Endpoints

### Collections
<div class="collection-method-list" markdown="1">

[List matrix collections](#endpoint-list-matrix-collections)
[List associated matrix types](#endpoint-list-associated-matrix-types)
[List associated category groups](#endpoint-list-associated-category-groups)
[Get a single matrix collection](#endpoint-get-a-single-matrix-collection)

</div>

### Entries
<div class="collection-method-list" markdown="1">

[List matrix entries](#endpoint-list-matrix-entries)
[List associated categories](#endpoint-list-associated-categories)
[Get a single matrix entry](#endpoint-get-a-single-matrix-entry)
[Create a matrix entry](#endpoint-create-a-matrix-entry)
[Edit a matrix entry](#endpoint-edit-a-matrix-entry)
[Delete a matrix entry](#endpoint-delete-a-matrix-entry)

</div>

<a name="endpoint-listing"></a>
## Endpoint Listing

### Collections

<a name="endpoint-list-matrix-collections"></a>
#### List matrix collections

List all matrix collections.

```txt
GET /api/v1/matrix
```

##### Query Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, categories per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-list-associated-matrix-types"></a>
### List associated matrix types

Fetch all types under the given matrix collection.

```txt
GET /api/v1/matrix/{collection}/types
```

##### Query Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, types per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-list-associated-category-groups"></a>
### List associated category groups

List category groups associated with the given matrix collection.

```txt
GET /api/v1/matrix/{collection}/groups
```

##### Query Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, category groups per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-get-a-single-matrix-collection"></a>
#### Get a single matrix collection

Get a single matrix collection by its slug.

```txt
GET /api/v1/matrix/{collection}
```

---

### Entries

<a name="endpoint-list-matrix-entries"></a>
#### List matrix entries

List all entries under the given matrix collection and type.

```txt
GET /api/v1/matrix/{collection}/types/{type}/entries
```

##### Query Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, entries per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-list-associated-categories"></a>
#### List associated categories

List all categories associated with the given matrix entry by its slug.

```txt
GET /api/v1/matrix/{collection}/types/{type}/entries/{entry}/categories
```

##### Query Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `page` | *Optional*, the current page. | `1` |
| `per_page` | *Optional*, categories per page, must be no greater than `100`. | `10` |

---

<a name="endpoint-get-a-single-matrix-entry"></a>
#### Get a single matrix entry

Get a single matrix entry by its slug under the given matrix collection and type.

```txt
GET /api/v1/matrix/{collection}/types/{type}/entries/{entry}
```

---

<a name="endpoint-create-a-matrix-entry"></a>
#### Create a matrix entry

Create a matrix entry under the given matrix collection and type.

```txt
POST /api/v1/matrix/{collection}/types/{type}/entries
```

---

<a name="endpoint-edit-a-matrix-entry"></a>
#### Edit a matrix entry

Edit an existing matrix entry by its ID under the given matrix collection and type.

```txt
PATCH /api/v1/matrix/{collection}/types/{type}/entries/{id}
```

---

<a name="endpoint-delete-a-single-matrix-entry"></a>
#### Delete a matrix entry

Delete an existing matrix entry by its ID under the given matrix collection and type.

```txt
DELETE /api/v1/matrix/{collection}/types/{type}/entries/{id}
```
