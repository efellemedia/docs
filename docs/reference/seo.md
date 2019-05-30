---
title: SEO
---

# SEO

[[toc]]

---

## Accessing The SEO Instance
To obtain an instance of the current SEO instance via dependency injection, you should type-hint the `Modules\Seo\Handlers\SEO` class on your controller method.

```php
<?php

namespace Modules\Example\Http\Controllers;

use Modules\Seo\Handlers\SEO;

class ExampleController extends Controller
{
    /**
     * Display a list of resources.
     *
     * @param  SEO  $seo
     * @return Response
     */
    public function index(SEO $seo)
    {
        $seo->setDescription('...');

        //
    }
}
```

#### Accessing The SEO Instance Via Helper Method
Optionally, you may also access the SEO instance through the `seo()` helper method. The helper method will automatically resolve the SEO instance for you, making it easy to reference within view files easily.

```
seo()->setDescription('...');
```

## Getting All Metadata
You may get all SEO metadata in the current SEO instance using the `metadata` method:

```
$metadata = $seo->metadata();
```

## Setting Core Metadata Values
The SEO instance contains methods to set the most common SEO metadata tags through the following methods:

```
$seo->setTitle("You won't believe this lorem ipsum!");
$seo->setDescription('Lorem ipsum dolor sit amet');
$seo->setKeywords(['lorem', 'ipsum']);
$seo->setCanonical('https://example.com/lorem');
```
