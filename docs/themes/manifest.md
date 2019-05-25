---
title: Manifest
---

# Manifest

[[toc]]

---

The theme manifest file (`theme.json`) contains basic information such as the name of the theme, description, author, URL, version, and any other information you'd like to bundle with your theme. This information is used by the CMS to display and manage the available themes to choose from from the Admin CP.

The theme manifest file should be placed at the root of your theme's directory:

```txt
public/
├─ themes/
   ├─ your-project/
      ├─ theme.json
```

The following fields are required within the manifest file:

| Field | Description |
|-------|-------------|
| name | Specifies the name of the theme. |
| slug | The slugified version of the theme's name. |
| description | Description of the theme and its intended use. |
| author | Specifies the author of the theme. |
| url | Specifies the author's website URL. |
| version | Specifies the version of the theme. |
| dependencies | Specifies the theme dependencies. In particular, which version(s) of the CMS the theme is compatible with. |

In addition to the required fields above, you must also specify if the theme is a public facing theme, an admin theme, or both, by assigning true or false values to the following fields:

| Field | Description |
|-------|-------------|
| public_theme | Specifies if the theme is a public facing theme. |
| admin_theme | Specifies if the theme is an Admin CP theme. |

## Example Manifest
Let's look at a complete example of the required fields below:

```json
{
    "name": "Example",
    "slug": "example",
    "description": "An example multipurpose website theme.",
    "author": "John Doe",
    "url": "http://john-doe.com",
    "version": "1.0",
    "public_theme": true,
    "admin_theme": false,
    "dependencies": {
        "cms": "5.3.*"
    }
}
```

## Dependencies
Dependencies are specified in a simple object that maps an item name to a version constraint. The version constraint is a string which has one or more space-separated descriptors.

#### Exact Version Constraint
You can specify the exact version of a dependency. This will tell the CMS that this version and this version only must be met.

Example: `1.0.2`

#### Version Range
By using comparison operators you can specify ranges of valid versions. Valid operators are `>`, `>=`, `<`, `<=`, `!=`.

You can define multiple ranges. Ranges separated by a space (` `) or comma (`,`) will be treated as a **logical AND**. A double pipe (`||`) will be treated as a **logical OR**. AND has higher precedence than OR.

::: warning
Be careful when using unbounded ranges as you might end up unexpectedly installing versions that break backwards compatibility. Consider using the **caret** operator instead for safety.
:::

Examples:
- `>=1.0`
- `>=1.0 <2.0`
- `>=1.0 <1.1 || >=1.2`

#### Hyphenated Version Range ( - )
Inclusive set of versions. Partial versions on the right include are completed with a wildcard. For example `1.0 - 2.0` is equivalent to `>=1.0.0 <2.1` as the `2.0` becomes `2.0.*`. On the other hand `1.0.0 - 2.1.0` is equivalent to `>=1.0.0 <=2.1.0`.

Example: `1.0 - 2.0`

#### Wildcard Version Range (.\*)
You can specify a pattern with a `*` wildcard. `1.0.*` is the equivalent of `>=1.0 <1.1`.

Example: `1.0.*`

### Next Significant Release Operators

#### Tilde Version Range (~)
The `~` operator is best explained by example: `~1.2` is equivalent to `>=1.2 <2.0.0`, while `~1.2.3` is equivalent to `>=1.2.3 <1.3.0`. As you can see it is mostly useful for projects respecting semantic versioning. A common usage would be to mark the minimum minor version you depend on, like `~1.2` (which allows anything up to, but not including, `2.0`). Since in theory there should be no backwards compatibility breaks until `2.0`, that works well. Another way of looking at it is that using `~` specifies a minimum version, but allows the last digit specified to go up.

Example: `~1.2`

::: tip
The `~` operator has an exception on its behavior for the major release number. This means for example that `~1` is the same as `~1.0` as it will not allow the major number to increase trying to keep backwards compatibility.
:::

#### Caret Version Range (^)
The `^` operator behaves very similarly but it sticks closer to semantic versioning, and will always allow non-breaking updates. For example `^1.2.3` is equivalent to `>=1.2.3 <2.0.0` as none of the releases until `2.0` should break backwards compatibility. For pre-1.0 versions it also acts with safety in mind and treats `^0.3` as `>=0.3.0 <0.4.0`.

This is the recommended operator for maximum interoperability.

Example: `^1.2.3`
