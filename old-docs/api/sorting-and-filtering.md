# Sorting & Filtering

When specified, requests that return multiple items can be sorted and filtered based on a few parameters and the data available.

## Sorting
Sorting is determined through the use of the `_sort` query string parameter. The value of this is a comma-separated list of sort keys. Sort directions can optionally be appended to each sort key, separated by the `:` character.

The supported sort directions are either `asc` for ascending or `desc` for descending. If a sort direction is not specified for a key, then a default of ascending will be assumed.

### Examples
- Only sort keys specified:
    - `_sort=key1,key2,key3`
    - `key1` is the first key, `key2` is the second key, etc.
    - Sort directions are defaulted to `ascending`
- Some sort directions specified:
    - `_sort=key1:desc,key2,key3`
    - `key1` is sorted in descending order
    - `key2` and `key3` still use the default order of ascending
- Equal number of sort keys and directions specified:
    - `_sort=key1:asc,key2:desc,key3:asc`
    - Each key is paired with a corresponding direction

## Filtering
Filtering is determined through the use of the `_filter` query string parameter. The value should (naturally) be the value you need to filter for.

Multiple filters result in an implicit `AND`.

`OR` filters will not be supported, requiring separate requests per query.

For queries that need comparisons other than simple equals, operators are supported for inequality, greater-than, greater-than-or-equal, less-than, and less-than-or-equal-to. In order, the operators are `gt`, `gte`, `lt`, and `lte`. Simple equality is the default operation, and is performed as `?_filter=param:foo`.

For example, finding objects with a size greater than `8` would be written as `?_filter=size:gt:8`.
