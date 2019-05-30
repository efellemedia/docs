# Errors

The FusionCMS API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the `5xx` range indicate an error at the server level.

## Responses
All error responses will be returned within an `error` array of your request. Error responses will include the following information:

- Status Code
- Message

Here's an example of a returned 404 response:

```json
{
    "error": [
        "message": "Category not found.",
        "status_code": 404
    ]
}
```
