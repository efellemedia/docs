# Input

The input fieldtype is the most basic fieldtype available. The default type allows users to input simple text. Depending on the need, there are additional input types that can be selected to determine the type of text content the field will store.

## Data Structure
The input fieldtype is as simple as it gets. Values are returned as a `string`. If no content is present, `null` is returned.

## Settings
This fieldtype supports the following settings:

- **Type** &mdash; Select one of seven different input types (text, email, hidden, password, search, telephone number, and url)
- **Read Only** &mdash; Determine if the field should be readonly or not
- **Disabled** &mdash; Determine if the field should be disabled or not
- **Placeholder** &mdash; The placeholder text for when the field has no value
- **Help** &mdash; The displayed help text for the field
- **Class** &mdash; Define sets of CSS classes to be reference in the active public theme

## Validation
This fieldtype supports the following validation settings:

- **Required** &mdash; Determine if the field is required or not
