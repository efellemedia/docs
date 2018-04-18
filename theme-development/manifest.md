# Manifest

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
    "admin_theme": false
}
```
