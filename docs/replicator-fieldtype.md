---
title: Replicator
---

# Replicator Fieldtype

[[toc]]

---

The replicator fieldtype is our most advanced fieldtype to date. We pretty much took the concept of the Matrix, and jammed it into a single re-usable fieldtype. The replicator fieldtype opens up a whole other world of possibilities in structuring and delivering content. With it, you have the ability to dynamically add and control content needs on the fly.

## Data Structure
Replicator fieldtypes return their values as a `Collection`. Furthermore, each field nested within **sets** is casted appropriately to their assigned fieldtype. If no content is present, an empty `Collection` instance is returned.

The following example shows the makeup of the stored value for replicators. They are an array of sets added during the process of adding or updating an entry. Note how each added set contains a copy of it's own information in tangent with the value supplied by the user under the data attribute.

```json
[
    {
        "set": {
            "name": "Rich Text",
            "handle": "rich_text",
            "instructions": "",
            "fields": [
                {
                    "name": "Body",
                    "handle": "body",
                    "type": "wysiwyg",
                    "attributes": {
                        "readonly": "",
                        "disabled": "",
                        "placeholder": "",
                        "help": ""
                    },
                    "validation": {
                        "required": ""
                    }
                }
            ]
        },
        "data": {
            "body": "<p>Hello, world!</p>"
        }
    },

    ...
]
```

## Settings
This fieldtype presents a builder interface to scaffold your replicator sets and accompanying fields.

## Templating
You will want to loop through your replicator content to display based on the set. If your replicator is simple you may opt to use a series of `if/else` statements to style each set as necessary.

```php

```

For a more clean and DRY approach, especially when dealing with more complex replicator sets, we recommend extracting your view logic out for each into its own view partial.

### Blog Example
The following will demonstrate a simple Blog matrix with a Post type that contains a replicator fieldtype named **Content** with sets for **Rich Text** and **Code**.

#### /matrix/blog/post/show.blade.php
```php
@foreach ($entry->content as $item)
    @include('modern::matrix.blog.post.content.'.$item['set'], ['data' => $item['data']])
@endforeach
```

#### /matrix/blog/post/content/rich_text.blade.php
```html
<div class="post--rich-text">
    {!! $data['body'] !!}
</div>
```

#### /matrix/blog/post/content/code.blade.php
```html
<pre class="post--code">
    {!! $data['body'] !!}
</pre>
```