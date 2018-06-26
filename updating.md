# Updating

## Updating To 5.1 From 5.0

**Estimated Update Time: 2 Hours**

> We attempt to document every possible breaking change. Since some of these breaking changes are in obscure parts of the CMS, only a portion of these changes may actually affect your website.

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
