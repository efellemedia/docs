---
title: Blueprints
---

# Blueprints

[[toc]]

---

Blueprints are a powerful feature that compliments the Matrix module to quickly scaffold collections.

## Anatomy
Blueprint's are simple YAML files bundled with your theme within a `blueprints` directory. Here's an example blog blueprint:

```yaml
name: "Blog"
handle: "blog"
description: "Keep your users regularly updated with news and information in a more informal and conversational styled format."
route: "blog"
template: "matrix.blog.index"
settings:
    seoable: 1
    categorizable: 1
    navigatable: 1
    publishable: 1
    revisionable: 1
types:
    posts:
        name: "Posts"
        name_label: "Title"
        route: "{slug}"
        template: "matrix.blog.post"
        fields:
            excerpt:
                name: "Excerpt"
                type: "textarea"
            content:
                name: "Content"
                type: "wysiwyg"
```

## Structure
Blueprints are structured in three "sections," each corrisponding to the three structures that make up the Matrix; Collection, Types, and Fields.

::: tip
The YAML structure is a waterfall, starting at the top level container (collection) cascading down (types) to the minute details (fields). They key-value structure follows the **same** names as the field names within the HTML form for each of these sections.
:::

### Collection
The top level structure of the blueprint comprises of the Collection settings. Each blueprint contains the scaffolding for **one** and only one Collection.

```yaml
name: "Blog"
handle: "blog"
description: "Keep your users regularly updated with news and information in a more informal and conversational styled format."
route: "blog"
template: "matrix.blog.index"
settings:
    seoable: 1
    categorizable: 1
    navigatable: 1
    publishable: 1
    revisionable: 1
```

---

| Property | Description | Type |
|----------|-------------|------|
| `name` | Name of your collection. | String |
| `handle` | Handle of your collection; usually a sluggified version of the name. | String |
| `description` | Optional description of your collection. | String |
| `route` | Optional route for your collection's index. | String |
| `template` | Optional template for your collection's index. | String |
| `settings` | An array of configurable settings. | Array (see below) |

---

#### Settings Array
Each collection consists of the following settings:

| Property | Description | Type |
|----------|-------------|------|
| `seoable` | If your collection requires SEO metadata. | Boolean |
| `categorizable` | If your collection entries should be categorizable. | Boolean |
| `navigatable` | If your collection should be navigatable from the Admin CP sidebar. | Boolean |
| `publishable` | If your collection needs the publish and expiration date fields. | Boolean |
| `revisionable` | If your collection entries should have their revision history stored. | Boolean |

### Types

Following the collection information comes **types**. Types are stored as an array, allowing you to define as many types as necessary within your collection.

```yaml
types:
    posts:
        name: "Posts"
        name_label: "Title"
        route: "{slug}"
        template: "matrix.blog.post"
```

Each type should use the **handle** version of their name as their key value (e.g. the top-level `posts` in the above example), followed by the base information for the type:

| Property | Description | Type |
|----------|-------------|------|
| `name` | Name of your type. | String |
| `name_label` | The label you wish to provide to the default `name` field. | String |
| `route` | The route pattern of your type, optional. | String |
| `template` | If a route is provided, define the index template. | String |

### Fields
Fields are bundled with their associated type as a nested array.

```yaml
fields:
    excerpt:
        name: "Excerpt"
        type: "textarea"
    content:
        name: "Content"
        type: "wysiwyg"
```

Just as types, each field should use the `handle` version of their name as their key value followed by the base information for the field. Settings and attributes will be dependent on the fieldtype.

| Property | Description | Type |
|----------|-------------|------|
| `name` | Name of your field. | String |
| `type` | The desired fieldtype of your field. | String |
| `group` | The group the field should fall under. Defaults to `General`. | String |
| `order` | The ordering of the field. Defaults to `0`. | Integer |
| `attributes` | An array of configurable attributes for the given fieldtype. | Array |
| `validation` | An array of configurable validation rules for the given fieldtype. | Array |

## Example Blueprints

The following are a couple examples of common blueprints for reference. Use these as a base if you are looking to manually creating your own blueprint.

### Blog
```yaml
name: "Blog"
handle: "blog"
description: "Keep your users regularly updated with news and information in a more informal and conversational styled format."
route: "blog"
template: "matrix.blog.index"
settings:
    seoable: 1
    categorizable: 1
    navigatable: 1
    publishable: 1
    revisionable: 1
types:
    posts:
        name: "Posts"
        name_label: "Title"
        route: "{slug}"
        template: "matrix.blog.post"
        fields:
            excerpt:
                name: "Excerpt"
                type: "textarea"
            content:
                name: "Content"
                type: "wysiwyg"


```

---

### Pages
```yaml
name: "Pages"
handle: "pages"
description: "Standard static pages for your website."
route: ""
template: "matrix.pages.index"
settings:
    seoable: 1
    categorizable: 0
    navigatable: 1
    publishable: 0
    revisionable: 1
types:
    page:
        name: "Page"
        name_label: "Title"
        route: "{slug}"
        template: "matrix.pages.show"
        fields:
            content:
                name: "Content"
                type: "wysiwyg"
```
