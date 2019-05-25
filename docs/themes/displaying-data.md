---
title: Introduction
---

# Displaying Data

[[toc]]

---

You may display data passed to your Blade views by wrapping the variable in curly braces. For example you may display the contents of the name variable like so:

```php  
Hello, {{ $name }}.
```

Of course, you are not limited to displaying the contents of the variables passed to the view. You may also echo the results of any PHP function. In fact, you can put any PHP code you wish inside of a Blade echo statement:

```php
The current UNIX timestamp is {{ time() }}
```

::: tip
Blade `{{ }}` statements are automatically sent through PHP's `htmlentities` function to prevent XSS attacks.
:::
