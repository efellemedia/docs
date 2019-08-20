# Forms
FusionCMS has an extensive form system, allowing you to receive and collect user submitted contact forms straight from the CMS.

## Captchas
### Enabling in CMS
With v5.13, [Google's reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) is available natively through the forms module. To enable this on an existing site, after upgrading to 5.13 or above, you will need to create the new captcha system settings by navigating to Operations -> Modules, and then clicking on 'Sync Settings' on the Forms module row.

This will create new settings in the System Settings menu under Google -> Captcha. To enable captcha on _any_ form, the 'Site Key' and 'Secret Key' fields must be filled out first. These keys can be generated from the [reCAPTCHA control panel](http://www.google.com/recaptcha/admin), and should be done with a Google account associated with the domain they are being used on. Generate a key for `reCAPTCHA v2`, and add the domain that this captcha will be used on (you can also include the `.test` and `.efellecloud.com` domains as well to use in development).

Once the keys have been added, a new setting will be available on the form editing page. If 'Captcha Enabled' is set to 'True', the captcha values _will be required for all form submissions_.

### Updating your theme
If you are updating a previously developed theme to include captcha, you will need to also update your form templates to render the captcha element. **If captcha is enabled on your form but the template files are not updated, all form submissions will fail.** If you are developing a new site, no changes are needed.

The changes in the git diff found in [this Oxygen PR](https://github.com/efellemedia/oxygen-theme/pull/122/files) are a comprehensive and encapsulated example of the changes needed to be made to older versions of form templates to enable the captcha element to appear. In short, the captcha requires the following:

1. Adding the `.fusion-form` class to the `<form>` element.
2. Adding a check to see if the current form has captcha enabled
3. Rendering the hidden captcha input with `captcha()`
4. Ensuring that your theme has an available `scripts` stack in the default layout file
5. Including Google's hosted recaptcha API js file (`<script src="https://www.google.com/recaptcha/api.js" async defer></script>`)
6. Including a short on-page script to ensure that the form can only be submitted if the captcha is used

### The captcha process
When the form template renders on the front end, if the form has the captcha option enabled, it will print out an empty element with the site's captcha site key as a data attribute. When the page is loaded, the Google recaptcha API js file is called, which then will create a new hidden element on the page (`g-recaptcha-response`). When the captcha challenge is clicked, the script will fill this new textarea with the captcha verification key. Once the form is submitted, this key is sent to the Fusion app along with the rest of the fields. Fusion will then make an API request to the recaptcha service, passing along this key, and if it receives a success response from Google, the form submission will proceed as normal. Otherwise, Fusion will reject the submission and display an error to the user.