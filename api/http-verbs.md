# HTTP Verbs

Where possible, the FusionCMS API strives to use appropriate HTTP verbs for each action.

| Verb | Description |
|------|-------------|
| `GET` | Used for retrieving resources. |
| `POST` | Used for creating resources. |
| `PATCH` | Used for updating resources with partial JSON data. For instance, a Matrix entry has a name attribute but could have any number of additional attributes. A PATCH request may accept one or more of the attributes to update the resource. PATCH it a relatively new and uncommon HTTP verb, so resource endpoints also accept `POST` requests. |
| `DELETE` | Used for deleting resources. |
