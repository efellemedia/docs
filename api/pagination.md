# Pagination

Requests that return multiple items will be paginated to 30 items by default. You can specify further pages with the `?page` parameter. You may also set a custom page size up to 100 with the `?per_page` parameter.

> #### Note
> Page numbering is 1-based, where omitting the `?page` parameter will return the first page.
