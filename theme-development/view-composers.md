# View Composers

View composers are classes that are called when a view is rendered. If you have data that you want to be bound to a view each time that view is rendered, a view composer can help you organize that logic into a single location. This will keep your view files nice and clean while the view composer does all the heavy lifting.

All view composers must be registered within your theme's manifest file. For this example, we'll register a `TestComposer` to our theme's `index` view file.

```json
"composers": {
    "index": "TestComposer"
}
```

This will inform the theme engine to run the `TestComposer@compose` method each time the `index` view is rendered. So now, let's define the composer class:

```php
<?php

namespace Themes\YourTheme\Composers;

use Illuminate\View\View;

class TestComposer
{
    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $bar = 'bar';

        $view->with('foo', $bar);
    }
}
```

Just before the view is rendered, the composer's `compose` method is called, where you may then use the `with` method to bind data to the view.

## Attaching A Composer to Multiple Views
If you need to attach a view composer to multiple views, just list them out, one by one:

```json
"composers": {
    "index": "TestComposer",
    "profiles.index": "TestComposer"
}
```

The `composer` theme manifest property also accepts the `*` character as a wildcard, allowing you to attach a composer to all views:

```json
"composers": {
    "*": "TestComposer"
}
```
