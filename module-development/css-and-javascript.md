# CSS & JavaScript

<doc-hero>
Learn about the tools and resources available to you through the control panel when it comes styling and adding dynamic functionality to your module's interfaces.
</doc-hero>

## Introduction
When FusionCMS generates a module for you, a `resources/js` and `resources/sass` directory is also generated. These directories will house any JavaScript and Sass stylesheets for your module.

## CSS
FusionCMS utilizes the [Tailwind CSS](https://tailwindcss.com/) utility-first framework for all of its styling needs. We've built a collection of components around Tailwind for common requirements such as cards, tables, buttons, etc. You are also free to scaffold your own styling using any of the available utility classes provided by Tailwind.

## JavaScript
The control panel is completely powered by [Vue](https://vuejs.org/v2/guide/), the [Vue Router](https://router.vuejs.org/), and [Vuex](https://vuex.vuejs.org/). We've scaffolded an easy to use hook system around these frameworks so that you may register any required components and routes for your module before Vue takes over the DOM instance. On top of these three libraries, we have [Axios](https://github.com/axios/axios), [Lodash](https://lodash.com/), and [Moment.js](https://momentjs.com/) globally registered ready to use.

## Publishing Assets
To publish your module's assets to the `public` directory of the CMS, use the `publishes` method within your `ModuleServiceProvider` class. There are a couple things to note here:
    - Tag your assets with `module` so that Fusion is aware of your assets
    - Public assets to the `public_path('modules')` directory, inside its own folder.

```php
public function boot()
{
    $this->publishes([
        __DIR__.'/../../public' => public_path('modules/yourmodule)
    ], 'module');
}
```

## Registering Assets
Once your module's assets have been published, it's easy to register your module's assets that should be loaded within the control panel using `Bonsai`.

```php
public function boot()
{
    Bonsai::add('/modules/yourmodule/css/yourmodule.css');
    Bonsai::add('/modules/yourmodule/js/yourmodule.js');
}
```

Bonsai will intelligently inject your assets in the correct areas of the DOM.

### Defining Dependencies
Assets may depend on other assets being loaded before them. You can easily tell Bonsai about any dependencies your asset files may have against each other by using the `dependsOn()` method and tagging your assets.

```php
Bonsai::add('/modules/yourmodule/css/example.css')->dependsOn('bootstrap');
Bonsai::add('/modules/yourmodule/css/bootstrap.css', 'bootstrap');
```

Bonsai will reorder the way your assets are loaded on the page ensure dependencies are loaded first.

## Hook System
