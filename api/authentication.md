# Authentication

Currently, API v1 supports authentication through Personal Access Tokens. Requests that require authentication will return `403 Forbidden` when requests are sent without proper authentication headers.

## Creating Personal Access Tokens
Simply navigate to the API section of your admin control panel to create and manage your personal access tokens.

> #### Warning
> Once you create a token you will be presented with a popup modal. This modal will contain your generated token. **Copy this token down** as it will not be accessible afterwards. If you forget or lose this token, you will not be able to recover it and will be required to delete and re-create a new token to gain access to the API.

## Passing The Access Token
When calling endpoints against the API, you will be required to specify your access token as a `Bearer` token in the `Authorization` header of your request. For example, when using the Guzzle HTTP library:

```php
$response = $client->request('GET', '/api/v1/categories', [
    'headers' => [
        'Accept' => 'application/json',
        'Authorization' => 'Bearer '.$yourToken,
    ],
]);
```
