# Updating
> We attempt to document every possible breaking change. Since some of these breaking changes are in obscure parts of the CMS, only a portion of these changes may actually affect your website.

## Updating To 5.10

**Estimated Update Time: 5 Minutes - 1 Hour**

### Navigation Module
Any assigned fieldtypes to navigation menus were not originally resolving their values through the proper channels. v5.10 fixes this issue, so any fieldtypes you had previously set must be updated to use the expected fieldtype casting as is expected anywhere else in your view files.

### Example of code that used to work:

```html
@if (isset($item->fields['background'][0]))
    @php($image = get_asset($item->fields['background'][0]))
    <div class="menu__bg lazy" style="background-image: url('{{ url('asset/'. $image->slug) }}');"></div>
@endif
```

### Example of a way to pull this data now:
Note, you don't need to call `get_asset` any longer as images are automatically resolved for you.

```html
@if (isset($item->fields['background']->slug))
    {{-- Just reassigning for convenience --}}
    @php($image = $item->fields['background'])

    <div class="menu__bg lazy" style="background-image: url('{{ url('asset/'. $image->slug) }}');"></div>
@endif
```

## Updating to 5.6

**Estimated Update Time: 10 Minutes - 1 Hour**

> During the upgrade process you may encounter a directory error: `mkdir(): File exists`. To resolve, check for and delete the `storage/temp` folder. This is related to a reported bug that does not recursively apply the same permissions to folders inside of the storage folder, thus denying permission to delete the temp directory and create a new one during the upgrade process.

- **Create a manual backup**, a proceed with the standard upgrade process.
- Once upgraded, bring your site back down for maintenance: `php artisan down`
- Re-import your database from the backup
- Run the following console commands in order:
    1. `php artisan module:migrate`
    2. `php artisan upkeep`
    3. `php artisan up`

You should now be fully upgrade.

---

## Updating to 5.5

**Estimated Update Time: 5 Minutes**

You will likely get an error during upgrade indicating “foreign id key” migration. To circumnavigate this issue, please add the following entry to the “migrations” table, incrementing the ID and Batch as needed:

- `2018_07_19_185316_make_parent_id_foreign_key_null_on_delete`

---

## Updating to 5.4

**Estimated Update Time: 5 Minutes**

v5.4 introduces an update to the way we are pulling in our required Composer dependencies. We ran into an issue where one of the dependencies we had pushed a breaking change to a patch release, effectively breaking any new and existing sites attempting to upgrade.

To update to v5.4, please follow the following steps:

1. Open your `composer.json` file, and change the version dependency for `teamtnt/laravel-scout-tntsearch-driver` to **3.0.6**. Save the file.
2. Delete your `storage/temp` directory if it exists.
3. Run `composer update`
4. Run `php artisan fusion:upgrade`

---

## Updating to 5.3

**Estimated Update Time: 10 Minutes**

1. Attempt an upgrade, it's going to fail, don't panic.
2. Run `php artisan module:migrate matrix`
3. Re-run the upgrade

---

## Updating To 5.1

**Estimated Update Time: 2 Hours**

### Categories Module

#### Repositories have been ripped out of the categories module
Please ensure that you are not referencing any of the repository-specific methods and properties when using the category helpers.

#### `category_entries()` helper method has been removed
In line with removing the repository interface within categories, we've updated the way category entries need to be queried.

When piggybacking off of the `matrix_entries()` helper method, you now have access to a new `underCategory()` method. This will query the results of your entries down to the category and category group handle's specified:

```php
// Get all entries under the category with a handle of "space-sloth" regardless of the category group
$entries = matrix_entries('blog')->underCategory('space-sloth')->get();

// Get all entries under the category with a handle of "nuclear-rabbits" under the category group "pets"
$entries = matrix_entries('blog')->underCategory('nuclear-rabbits', 'pets')->get();
```

### Users Module

#### The "Your Account" URL has been changed
The URL has changed from `/settings` to `/account`.

Furthermore, each section of the account management interface have been extracted to their own endpoints with their own templates:

| Page | URL | Originating View |
|------|-----|------------------|
| **Overview** | `/account` | `users::account.index` |
| **Profile** | `/account/profile` | `users::account.profile` |
| **Change Password** | `/account/password` | `users::account.password` |

### Themes Module
The underlying theming framework has been updated.

#### Reference to Theme Namespace
You are no longer required to reference your theme's namespace when referencing view files.

Performing a find and replace on your theme's namespace to remove should suffice in this update (e.g. search for `example::` in your view templates where `example` is the namespace of your theme).

#### Renamed `theme_layout()` helper method
The `theme_layout()` method has been renamed to be simply `layout()`. Please ensure that your `@extends` blade directive calls have been updated.

Furthermore, if you are still using the `Theme::getLayout()` method or `$theme_layout` variable, please update this to reference `layout()` as well.

### Matrix Module

#### Repositories have been ripped out of the matrix module
Please ensure that you are not referencing any of the repository-specific methods and properties when using the matrix helpers.

## Deprecated Repository Methods
For further documentation on the methods available to you with this update, please refer to the Laravel documentation here: https://laravel.com/5.4/eloquent

| From | To |
|------|----|
| `helper_method()->model` | `helper_method()->` |
| `helper_method()->findAll()` | `helper_method()->all()` |
| `helper_method()->findBy()` | `helper_method()->where(...)->first()` |
| `helper_method()->findWhere()` | `helper_method()->where([...])->get()` |
| `helper_method()->findWhereBetween()` | `helper_method->whereBetween(...)->get()` |
| `helper_method()->findWhereIn()` | `helper_method->whereIn(...)->get()` |
| `helper_method()->findWhereNotIn()` | `helper_method->whereNotIn(...)->get()` |
