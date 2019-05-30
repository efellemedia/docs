# Parameters

Many API methods take optional parameters. For GET requests, any parameters not specified as a segment in the path can be passed as an HTTP query string parameter. For example, we have the documented endpoint to pull entries for the specified matrix collection and type:

```
GET /api/v1/matrix/{collection}/type/{type}/entries
```

In the following request, the `blog` and `post` values are provided for the `{collection}` and `{type}` parameters in the endpoint, while `page` is passed in the query string.

```
curl -i "https://example.com/api/v1/matrix/blog/type/post/entries?page=3"
```

For POST, PATCH, and DELETE requests, parameters not included in the documented endpoint should be encoded as JSON with a `Content-Type` of `application/json`.
