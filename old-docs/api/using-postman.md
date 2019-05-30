# Using Postman

[Postman](https://www.getpostman.com/) is a powerful GUI platform to make your API development faster & easier. Postman makes it easy to test API endpoints and preview the returned responses while developing integrations with the FusionCMS API.

## Request Builder
Under the **Builder** tab, the request builder lets you create any kind of HTTP request quickly. We can use this to set up requests to the FusionCMS API.

### URL
The URL is the first thing that you will need to set for a request. Simply fill in the API endpoint of your website you would like to test here.

![Postman Builder](/asset/59b99b7274ea4?w=900) {.mx-auto .d-block}

### Headers
Clicking on the **Headers** tab will show the headers key-value editor. Here is where we will be setting our `Content-Type` and `Authorization` header requests to authenticate against the API.

![Postman Builder](/asset/59b99b7396db0?w=900) {.mx-auto .d-block}

Create two headers with the following information:

| Key | Value |
|-----|-------|
| Authorization | `Bearer {Your Personal Access Token}` |
| Accept | `application/json` |

### Method
Changing the request method is straightforward, using the control dropdown next to the URL field. The request body editor area will change depending on whether the method can have a body attached to it or not.

![Postman Builder](/asset/59b99b7025f9a?w=900) {.mx-auto .d-block}

Set this accordingly for the API endpoint you're testing.

## Send Request
That pretty much wraps it up! Simply click **Send** to send your request. You'll be able to view the response with either the information you requested from the API, or a relevant error.

![Postman Builder](/asset/59b99b7137e3f?w=900) {.mx-auto .d-block}
