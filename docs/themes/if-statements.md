---
title: If Statements
---

# If Statements

[[toc]]

---

You may construct `if` statements using the `@if`, `@elseif`, `@else`, and `@endif` directives. These directives function identically to their PHP counterparts:

```php
@if (count($records) === 1)
    // I have one record!
@elseif (count($records) > 1)
    // I have multiple records!
@else
    // I don't have any records!
@endif
```

For convenience, Blade also provides an `@unless` directive:

```php
@unless (Auth::check())
    // You are not signed in.
@endunless
```

In addition to the conditional directives already discussed, the `@isset` and `@empty` directives may be used as convenient shortcuts for their respective PHP functions:

```php
@isset($records)
    // $records is defined and is not null...
@endisset

@empty($records)
    // $records is "empty"...
@endempty
```
