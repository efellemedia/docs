# Working With JavaScript Frameworks

Since many JavaScript frameworks also use "curly" braces to indicate a given expression should be displayed in the browser, you may use the `@` symbol to inform the Blade rendering engine an expression should remain untouched. For example:

```
<h1>FusionCMS</h1>

Hello, @{{ name }}.
```

In this example, the `@` symbol will be removed by Blade; however, the `{{ name }}` expression will remain untouched by the Blade engine, allowing it to instead be rendered by your JavaScript framework.

## The `@verbatim` Directive
If you are displaying JavaScript variables in a large portion of your template, you may wrap the HTML in the `@verbatim` directive so that you do not have to prefix each Blade echo statement with an `@` symbol:

```php
@verbatim
    <div class="container">
        Hello, {{ name }}.
    </div>
@endverbatim
```
