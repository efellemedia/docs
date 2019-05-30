---
title: Environments
---

# Environments

[[toc]]

---

FusionCMS has various environments to configure settings depending on where the CMS is running. For example, you may wish to use a different cache driver or theme locally than you do on your production server.

To make this a cinch, FusionCMS, and by proxy Laravel, utilizes the [DotEnv](https://github.com/vlucas/phpdotenv) PHP library by Vance Lucas. In a fresh FusionCMS installation, the root of your project will contain a `.env` file where all of your custom settings will be stored.

The `.env` file should **never** be committed to your project's source control, since each developer / server with FusionCMS installed will use its own environment configuration file. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed.

## Retrieving Environment Configuration
All of the variables listed in this file will be loaded into the `$_ENV` PHP super-global when FusionCMS receives a request. However, you may use the `env()` helper method to retrieve values from these variables in your code. In fact, if you review the FusionCMS configuration files, you will notice several of the options already using this helper:

```php
'debug' => env('APP_DEBUG', false),
```

The second value passed to the `env` function is the "default value". This value will be used if no environment variable exists for the given key.

## Determining The Current Environment
The current FusionCMS environment is determined via the `APP_ENV` variable from your `.env` file. You may access this value via the `environment` method on the `App` facade:

```php
$environment = App::environment();
```

> You can also use the `app()` helper method instead of the facade accessor.

You may also pass arguments to the `environment` method to check if the environment matches a given value. The method will return `true` if the environment matches any of the given values:

```php
if (App::environment('local')) {
    // The environment is local
}

if (App::environment(['local', 'staging'])) {
    // The environment is either local OR staging...
}
```

::: tip
The current application environment detection can be overridden by a server-level `APP_ENV` environment variable. This can be useful when you need to share the same application for different environment configurations, so you can set up a given host to match a given environment in your server's configuration.
:::