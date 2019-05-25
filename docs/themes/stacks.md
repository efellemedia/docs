---
title: Stacks
---

# Stacks

[[toc]]

---

Blade allows you to push to named stacks which can be rendered somewhere else in another view or layout. This can be particularly useful for specifying any JavaScript libraries required by your child views:

```php
@push('scripts')
    <script src="/example.js"></script>
@endpush
```

You may push to a stack as many times as needed. To render the complete stack contents, pass the name of the stack to the `@stack` directive:

```php
<head>
    <!-- Head Contents -->

    @stack('scripts')
</head>
```
