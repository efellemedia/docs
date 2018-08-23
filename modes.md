# Modes
FusionCMS has a couple of modes it can be placed in for various needs. **Maintenance** mode and **suspended** mode.

## Maintenance Mode
When FusionCMS is in maintenance mode, a custom view will be displayed for all requests of your website. This makes it easy to "disable" your website while performing large maintenance tasks.

When FusionCMS upgrades, it automatically places your website in maintenance mode to prevent lose of data between backing up and migrating the database and copying files. Once the upgrade completes, your website will be brought back online.

---

If you have access to the server, you may enable maintenance mode at any time by executing the `down` Artisan command:

```
php artisan down
```

You may also provide a `message` option to the `down` command. The `message` value may be used to display or log a custom message.

To disable maintenance mode and bring your website back online, use the `up` command.

```
php artisan up
```

> If you are developing a theme, you may customize the default maintenance mode template by defining your own template at `views/errors/503.blade.php`.

### Maintenance Mode and Queues
While your website is in maintenance mode, no queued jobs will be handled. The jobs will continue to be handled as normal once your website is out of maintenance mode.

## Suspended Mode
If you are an agency, you have the ability to place a website into suspended mode in cases of non-payment or any other means necessary. At the server level you may suspend a website at any time by executing the `suspend` Artisan command:

```
php artisan suspend
```

Like the `down` Artisan command, you may provide a `message` option to the `suspend` command. The `message` value may be used to display or log a custom message based on your needs.

To release a website from suspended mode, use the `release` command:

```
php artisan release
```

> The suspended mode uses its own view file separate that of maintenance mode You may override the default template within your theme at `views/errors/suspended.blade.php`.

### Suspended Mode and Queues
Just like with maintenance mode, queued jobs will not be handled. As soon as the website is released, the queued jobs will be handled as normal.
