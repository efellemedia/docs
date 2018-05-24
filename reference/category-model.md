# Category Model

## Properties

| | |
|----------|-------|
| **Namespace** | `Modules\Categories\Models` |
| **Classname** | `Category` |
| **Extends** | `App\Models\Model` |
| **Uses** | `Modules\Users\Traits\Authorable`, `Modules\Cache\Traits\Cacheable`, `Modules\Fields\Traits\HasFields`, `Modules\Users\Traits\Permissible`, `Modules\Kernel\Traits\RepositoryBridge`, `Modules\Router\Traits\Routable`, `Modules\Seo\Traits\Seoable` |
| **Table** | `categories` |

<a name="makeup"></a>
## Makeup

### Attributes
<div class="collection-method-list" markdown="1">

`group_id`
`parent_id`
`name`
`handle`
`description`
`fields`
`uri`
`routePattern`

</div>

### Observers
<div class="collection-method-list" markdown="1">

[`deleting`](#observer-deleting)

</div>

### Relationships
<div class="collection-method-list" markdown="1">

[`categorizable()`](#relationship-categorizable)
[`group()`](#relationship-group)
[`parent()`](#relationship-parent)
[`children()`](#relationship-children)

</div>

### Methods
<div class="collection-method-list" markdown="1">

[`path()`](#method-path)

</div>

---

## Observers

<a name="observer-deleting"></a>
### `deleting`
During the `deleting` model event, the associated children categories are also removed from the database.

## Relationships

<a name="relationship-categorizable"></a>
### `categorizable()`
The `Category` model exposes itself as a polymorphic relatable model via `MorphTo`.

---

<a name="relationship-group"></a>
### `group()`
The `Category` model has a `BelongsTo` relationship with the `Group` model.

---

<a name="relationship-parent"></a>
### `parent()`
The `Category` model can have a `BelongsTo` relationship with the `Category` model (itself).

---

<a name="relationship-children"></a>
### `children()`
The `Category` model can have a `HasMany` relationship with the `Category` model (itself).

## Methods

<a name="method-path"></a>
### `path()`
Returns the `uri` attribute.
