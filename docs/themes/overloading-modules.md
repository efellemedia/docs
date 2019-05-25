---
title: Overloading Modules
---

# Overloading Modules

[[toc]]

---

As front-end developers, you want full control over how websites look and feel. We understand that, and while every module comes with their own set of view files, FusionCMS will let you replace any of those view files with a view file inside your theme.

Let's say you want to replace the login view with one of your own. Simply copy:

```txt
/modules/Users/Resources/Views/auth/login.blade.php
```

to your theme:

```txt
/public/themes/your-project/views/modules/users/auth/login.blade.php
```

Now you can edit that view file however you like.

::: tip
Notice the pattern here: module view files are placed within a `modules` directory within your theme, under a subdirectory with a name set as the slug of the module.

- `Users` => `modules/users/`
- `Forms` => `modules/forms/`
- etc.
:::

FusionCMS has an intelligent theme fallback system in place:

1. First it will check the currently active theme.
2. If not found within your theme, it will check the parent theme of the currently active theme (if applicable).
3. If again a view file can not be found, it will fallback to loading the view file supplied by the module.
4. If for any reason FusionCMS still can not find a view file to load for the given page, an exception will be thrown as normal to notify you that the specified view could not be found (e.g. a 404).
