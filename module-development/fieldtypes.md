# Fieldtypes
Adding custom fieldtypes is easy. With fieldtypes, you're able to create reusable and powerful fields to be used across a variety of content types within the system.

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

Of course, casting doesn't stop just there. On top of defining a cast property, you are able to dig into and customize the casted value even further by defining a `cast()` method within your Fieldtype class.

### Before Saving
### After Saving

## Rendering Logic

## Registering Fieldtypes
In order to make FusionCMS aware of your fieldtype, you need to register it. You must register your fieldtypes within the `boot()` method of a Service Provider. The syntax is simple:

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
