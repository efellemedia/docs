# DataTables
The datatable component is used for displaying tabular data while providing the means to filter, search, sort, and paginate through results.

## Defining DataTable Controllers
By default, DataTable controllers are stored under the `App\Http\Controllers\DataTable` namespace.

Below is an example of a basic datatable controller class. Note that the controller extends the base datatable controller class included with the CMS.

```php
<?php

namespace App\Http\Controllers\DataTable;

use App\Models\Flight;
use App\Http\Controllers\DataTableController;

class FlightController extends DataTableController
{
    /**
     * Return the Eloquent query builder instance of your model.
     * 
     * @return Builder
     */
    public function builder()
    {
        return Flight::query();
    }
}
```

The most basic and fundamental property of a datatable controller is the `builder` method. This method returns the base query builder that your DataTable will utilize to properly query content based on the filters, pagination, and sorting options of your datatable.

### Displayable Columns
By default, the base datatable controller will attempt to display all fillable columns. This is rarely the intended choice while rendering datatables, so you may override and define which columns you'd like to display through the `getDisplayableColumns` method:

```php
public function getDisplayableColumns()
{
    return [
        'id',
        'plane',
        'passengers',
        'origin',
        'destination',
        'status',
    ];
}
```

This method should return a simple array of database columns to render within the datatable.

### Customize Column Names
To customize the rendered column names, provide a `getCustomColumnNames` method that returns a key-value array of columns and their custom name to be rendered.

```php
public function getCustomColumnNames()
{
    return [
        'id'          => 'ID',
        'plane'       => 'Plane',
        'passengers'  => 'Passengers',
        'origin'      => 'Origin',
        'destination' => 'Destination',
        'status'      => 'Status',
    ];
}
```

### Defining Sortable Columns
To specify which columns should be sortable, define a `getSortable` method that returns an array of columns:

```php
public function getSortable()
{
    return [
        'id',
        'plate',
        'passengers',
        'origin',
        'destination',
        'status',
    ];
}
```

### Defining Filterable Columns
To specify which columns can be filtered, define a `getFilterable` method that returns an array of columns:

```php
public function getSortable()
{
    return [
        'id',
        'plate',
        'passengers',
        'origin',
        'destination',
        'status',
    ];
}
```

## Defining Routes
Once you have a datatable controller, you may register the datatable route with the CMS. Datatable routes are found within the `datatable.php` route file within the `routes` directory. From here, simply register a new `GET` route pointing to your datatable controller instance's `index` method:

```php
Route::get('/flights', 'FlightController@index');
```

Your new route will then be registered and available at the `/datatable/flights` endpoint. This will be the route you pass along to the datatable Vue component.

## Rendering Datatables
To render a datable, use the `<p-datatable></p-datatable>` vue component, passing your datatable **endpoint** and identifiable **name** as parameters:

```html
<p-datatable name="flights" endpoint="/datatable/flights"></p-datatable>
```

### Customizing Column Templates
Each column may be customized to render content however you need it to. To override any given template, within your `<p-datatable>` component instance, define a new scoped-slot template where the slot name is the name of the column you wish to customize:

```html
<template slot="id" slot-scope="table">
    <code>{{ table.record.id }}</code>
</template>
```

### Customzing Actions
By default, every datatable instance will render an **Actions** column at the end. You may override this with a scoped-slot with the name `actions`:

```html
<template slot="actions" slot-scope="table">
    <p-dropdown right>
        <fa-icon icon="bars"></fa-icon>
        
        <template slot="options">
            <p-dropdown-item
                @click.prevent
                :to="{ name: 'flights.edit', params: {flight: table.record.id} }"
            >
                Edit
            </p-dropdown-item>

            <p-dropdown-item
                @click.prevent
                v-modal:delete-flight="table.record"
            >
                Delete
            </p-dropdown-item>
        </template>
    </p-dropdown>
</template>
```

### Params
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `name` | `String` | The identifying name of the datatable. | | |
| `endpoint` | `String` | The endpoint the datatable will call to fetch content. | | |
| `sort-by` | `String` | The default column to sort by. | | id |
| `sort-in` | `String` | The default direction to sort by. | desc, asc | asc |
| `per-page` | `Integer` | The default number of items to display per page. | | 10 |
| `no-actions` | `Boolean` | Hides the actions column. | true, false | false |
| `no-search` | `Boolean` | Disables the ability to search column values. | true, false | false |
| `no-filters` | `Boolean` | Disables the ability to filter columns | true, false | false |
| `no-pagination` | `Boolean` | Disables the ability to paginate records. | true, false | false |

### Slots
| Name | Description |
|------|-------------|
| `actions` | The actions column. |
