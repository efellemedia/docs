---
title: Defining A Layout
---

# Defining A Layout

[[toc]]

---

Two of the primary benefits of using Blade are template inheritance and sections. To get started, let's take a look at a simple example. First, we will examine a "default" page layout. Since most web applications maintain the same general layout across various pages, it's convenient to define this layout as a single Blade view:

```php
<!-- Stored as your theme/views/layouts/default.blade.php -->

<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            This is the master sidebar.
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
```

As you can see, this file contains typical HTML mark-up. However, take note of the `@section` and `@yield` directives. The `@section` directive, as the name implies, defines a section of content, while the `@yield` directive is used to display the contents of a given section.

Now that we have defined a layout for our theme, let's define a child page that inherits the layout as outlined in [Extending A Layout](/themes/extending-a-layout).
