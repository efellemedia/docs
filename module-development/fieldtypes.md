# Fieldtypes
Adding custom fieldtypes is easy. With fieldtypes, you're able to create reusable and powerful fields to be used across a variety of content types within FusionCMS.

## Overview
Fieldtypes have two sides to them - the rendering logic and backend logic. Rendering a fieldtype consists of building a Vue component while the backend logic is handled by a PHP class to facilitate various actions and events during the processing of content.

## Defining Fieldtypes
To get started, let's create a new Fieldtype. Fieldtypes typically live within a `Fieldtypes` directory, but you are free to place them anywhere within your module. All Fieldtypes extend the `Modules\Fields\Fieldtypes\Fieldtype` class.

Let's look at an example boilerplate Fieldtype:

```php
<?php

namespace Modules\YourModule\Fieldtypes;

use Modules\Fields\Fieldtypes\Fieldtype;

class ExampleFieldtype extends Fieldtype
{
    //
}
```

### Casting
When your field and its attributed value is resolved by the CMS, it will pass a reference of the Field class as well as the value through a `cast()` method. This is called whenever a value from your field is retrieved either through PHP or through a Blade template.

The `$casts` property on your Fieldtype provides a convenient means of converting your Fieldtype value to common data types. The `$casts` property should be a string of the type you wish to cast your value to. The supported cast types are: `integer`, `real`, `float`, `double`, `string`, `boolean`, `object`, `array`, and `collection`.

```php
/**
 * What the value should be casted as.
 *
 * @var string
 */
protected $cast = 'string';
```

Of course, casting doesn't stop just there. On top of defining a cast property, you are able to dig down and customize the casted value even further by defining a `cast()` method within your Fieldtype class.

```php
/**
 * Cast the variable to the appropriate data type.
 *
 * @param  mixed  $value
 * @param  array  $field
 * @return mixed
 */
public function cast($value, $field)
{
    // Call the parent cast method to cast your value to the specified type
    // as defined in the $casts property. This is handy for keeping your
    // values clean and predictable.

    $value = Parent::cast($value, $field);

    // ...

    return $value;
}
```

### Persisting
The `onBeforeSave` and `onAfterSave` methods allow you to manipulate the value passed through your fieldtypes before persisting the value to the database and manipulate, fire, or perform any additional tasks afterwards.

#### onBeforeSave
`onBeforeSave` is called right before persisting the value to the database. Perform any means of manipulation to the value to prepare it for storing in the database.

```php
/**
 * Perform an action before the given fieldtype has saved data.
 *
 * @param  mixed  $value
 * @param  Fieldtype  $field
 * @return mixed
 */
public function onBeforeSave($value, $field)
{
    // ...

    return $value;
}
```

#### onAfterSave
`onAfterSave` is called right after persisting the value to the database. Here you may perform any additional manipulation tasks on your value as needed.

```php
/**
 * Perform an action after the given fieldtype has saved data.
 *
 * @param  mixed  $value
 * @param  Fieldtype  $field
 * @return mixed
 */
public function onAfterSave($value, $field)
{
    // ...

    return $value;
}
```

Once you are done manipulating the value as needed, simply return the value. This rule applies to both methods.

## Rendering Logic

## Registering Fieldtypes
In order to make FusionCMS aware of your fieldtype, you need to register it. You must register your fieldtypes within the `boot()` method of a Service Provider. You do have the option of registering it directly within your module's `ModuleServiceProvider` or extracting it out to a dedicated Service Provider for fieldtypes.

```php
/**
 * Boot the service provider.
 *
 * @return void
 */
public function boot()
{
    fieldtypes()->register(\Modules\YourModule\Fieldtypes\YourFieldtype::class);
}
```
