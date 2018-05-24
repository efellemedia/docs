# Collections

The `Illuminate\Support\Collection` class provides a fluent, convenient wrapper for working with arrays of data. For example, check out the following code. We'll use the `collect` helper to create a new collection instance from the array, run the `strtoupper` function on each element, and then remove all empty elements:

```php
$collection = collect(['taylor', 'abigail', null])->map(function ($name) {
    return strtoupper($name);
})
->reject(function ($name) {
    return empty($name);
});
```

As you can see, the `Collection` class allows you to chain its methods to perform fluent mapping and reducing of the underlying array. In general, collections are immutable, meaning every `Collection` method returns an entirely new `Collection` instance.

## Creating Collections
As mentioned above, the `collect` helper returns a new `Illuminate\Support\Collection` instance for the given array. So, creating a collection is as simple as:

```php
$collection = collect([1, 2, 3]);
```

> #### Note
> The results of Eloquent queries are always returned as `Collection` instances.

## Available Methods
For the remainder of this documentation, we'll discuss each method available on the `Collection` class. Remember, all of these methods may be chained to fluently manipulating the underlying array. Furthermore, almost every method returns a new `Collection` instance, allowing you to preserve the original copy of the collection when necessary:

<div class="collection-method-list" markdown="1">

[all](#method-all)
[average](#method-average)
[avg](#method-avg)
[chunk](#method-chunk)
[collapse](#method-collapse)
[combine](#method-combine)
[contains](#method-contains)
[containsStrict](#method-containsstrict)
[count](#method-count)
[diff](#method-diff)
[diffAssoc](#method-diffassoc)
[diffKeys](#method-diffkeys)
[each](#method-each)
[every](#method-every)
[except](#method-except)
[filter](#method-filter)
[first](#method-first)
[flatMap](#method-flatmap)
[flatten](#method-flatten)
[flip](#method-flip)
[forget](#method-forget)
[forPage](#method-forpage)
[get](#method-get)
[groupBy](#method-groupby)
[has](#method-has)
[implode](#method-implode)
[intersect](#method-intersect)
[intersectByKeys](#method-intersectbykeys)
[isEmpty](#method-isempty)
[isNotEmpty](#method-isnotempty)
[keyBy](#method-keyby)
[keys](#method-keys)
[last](#method-last)
[map](#method-map)
[mapWithKeys](#method-mapwithkeys)
[max](#method-max)
[median](#method-median)
[merge](#method-merge)
[min](#method-min)
[mode](#method-mode)
[nth](#method-nth)
[only](#method-only)
[partition](#method-partition)
[pipe](#method-pipe)
[pluck](#method-pluck)
[pop](#method-pop)
[prepend](#method-prepend)
[pull](#method-pull)
[push](#method-push)
[put](#method-put)
[random](#method-random)
[reduce](#method-reduce)
[reject](#method-reject)
[reverse](#method-reverse)
[search](#method-search)
[shift](#method-shift)
[shuffle](#method-shuffle)
[slice](#method-slice)
[sort](#method-sort)
[sortBy](#method-sortby)
[sortByDesc](#method-sortbydesc)
[splice](#method-splice)
[split](#method-split)
[sum](#method-sum)
[take](#method-take)
[tap](#method-tap)
[times](#method-times)
[toArray](#method-toarray)
[toJson](#method-tojson)
[transform](#method-transform)
[union](#method-union)
[unique](#method-unique)
[uniqueStrict](#method-uniquestrict)
[values](#method-values)
[when](#method-when)
[where](#method-where)
[whereStrict](#method-wherestrict)
[whereIn](#method-wherein)
[whereInStrict](#method-whereinstrict)
[whereNotIn](#method-wherenotin)
[whereNotInStrict](#method-wherenotinstrict)
[zip](#method-zip)

</div>

<a name="method-listing"></a>
## Method Listing

<a name="method-all"></a>
### `all()`

The `all` method returns the underlying array represented by the collection:

```php
collect([1, 2, 3])->all();

// [1, 2, 3]
```
