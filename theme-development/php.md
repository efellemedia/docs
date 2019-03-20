# PHP

In some situations, it's useful to embed PHP code into your views. You can use the Blade `@php` directive to execute a block of plain PHP within your template:

```blade
@php
    //
@endphp
```

> #### Warning
> While Blade provides this feature, using it frequently may be a signal that you have too much logic embedded within your template. In this case you should look to moving your logic to a dedicated [view composer](/{{version}}/view-composers).
