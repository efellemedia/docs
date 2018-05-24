# Asset Model

## Properties

| | |
|----------|-------|
| **Namespace** | `Modules\Assets\Models` |
| **Classname** | `Asset` |
| **Extends** | `App\Models\Model` |
| **Uses** | `Modules\Users\Traits\Authorable` |
| **Table** | `assets` |

<a name="makeup"></a>
## Makeup

### Attributes
<div class="collection-method-list" markdown="1">

`name`
`slug`
`description`
`location`
`original`
`extension`
`mimetype`

</div>

### Observers
<div class="collection-method-list" markdown="1">

[`deleting`](#observer-deleting)

</div>

### Relationships
<div class="collection-method-list" markdown="1">

[`directories()`](#relationship-directories)

</div>

---

## Observers

<a name="observer-deleting"></a>
### `deleting`
During the `deleting` model event, the physical file associated with the asset is removed from storage.

## Relationships

<a name="relationship-directories"></a>
### `directories()`
The `Asset` model has a `BelongsToMany` relationship with the `Directory` model.
