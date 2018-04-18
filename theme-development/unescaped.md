# Displaying Unescaped Data

By default, Blade `{{ }}` statements are automatically sent through PHP's `htmlentities` function to prevent XSS attacks. If you do not want your data to be escaped, you may use the following syntax:

```php
Hello, {!! $name !!}.
```

> #### Danger
Be very careful when echoing content that is supplied by users of your website. Always use the escaped, double curly brace syntax to prevent XSS attacks when displaying user supplied data.
