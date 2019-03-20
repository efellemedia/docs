# Code Conventions

While the [Coding Standards](/{{version}}/coding-standards) document describes the coding standards for FusionCMS, this document describes coding standards and conventions used in the core codebase to make it more consistent and predictable.

## Method Names
When an object has a "main" many relation with related "things" (objects, parameters, ...), the method names are normalized:

- `get()`
- `set()`
- `has()`
- `all()`
- `replace()`
- `remove()`
- `clear()`
- `isEmpty()`
- `add()`
- `register()`
- `count()`
- `keys()`

The usage of these methods are only allowed when it is clear that there is a main relation:

- a `CookieJar` has many `Cookie` objects;
- a Service `Container` has many services and many parameters (as services is the main relation, the naming convention is used for this relation);
- a Console `Input` has many arguments and many options. There is no "main" relation, and so the naming convention does not apply.

For many relations where the convention does not apply, the following methods must be used instead (where `XXX` is the name of the related thing):

| Main Relation | Other Relations |
|---------------|-----------------|
| `get()` | `getXXX()` |
| `set()` | `setXXX()` |
| n/a | `replaceXXX()` |
| `has()` | `hasXXX()` |
| `all()` | `getXXXs()` |
| `replace()` | `replaceXXXs()` |
| `remove()` | `removeXXX()` |
| `clear()` | `clearXXX()` |
| `isEmpty()` | `isEmptyXXX()` |
| `add()` | `addXXX()` |
| `register()` | `registerXXX()` |
| `count()` | `countXXX()` |
| `keys()` | n/a |

> #### Note
> While "setXXX" and "replaceXXX" are very similar, there is one notable difference: "setXXX" may replace, or add new elements to the relation. "replaceXXX", on the other hand, cannot add new elements. If an unrecognized key is passed to "replaceXXX" it must throw an exception.

## Slugs vs Handles
Normally, most projects will use the term `slug` for any machine-readable notation of a name or title in regards to an item. Since FusionCMS is a large project that spans a multitude of different areas, we've decided to split the terminology and use-case for where `slug` should be used and where `handle` should be used.

| Keyword | Description |
|---------|-------------|
| `slug` | A URL friendly string that replaces spaces and special characters with a dash (`-`). |
| `handle` | A code and template friendly string used to reference properties that replaces spaces and special characters with an underscore (`_`). |
