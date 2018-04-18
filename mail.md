# Mail

FusionCMS sends out various emails to users based on various events (such as when a new user registers for an account). In order to send and receive emails through your website, you will need to configure your email settings from the Settings section of the AdminCP.

![Mail Settings - General](/asset/59c1500be2757?w=600) {.mx-auto .d-block}

## General Settings

### Driver
The driver will control the service or provider responsible for sending out emails from the CMS. Each driver that requires additional configuration will have it's own specific tab under Email Settings to set. More information on the available drivers and their configuration settings can be found under the [drivers](#drivers) section below.

### From
Emails that are sent out by the CMS will be sent **from** the email address specified here.

### From Name
Emails that are sent out by the CMS will be attributed with the name specified here.

### Contact
Depending on your theme and design, the contact email provided here may be displayed at various locations throughout your website - such as the footer or at the foot of emails sent out by the CMS.

## Drivers
The API based drivers such as Mandrill and Mailgun are often simpler and faster than SMTP servers. If possible, you should use one of these drivers. FusionCMS currently supports the following email drivers and subsequent providers:

---

### SMTP

The SMTP driver will be the most common solution for email. API based providers such as Mandrill also offer the option of using SMTP configuration options rather than go through their API.

![Mail Settings - SMTP](/asset/59c17067b9372?w=600) {.mx-auto .d-block}

---

### SparkPost
To use the [SparkPost](https://www.sparkpost.com/) provider, simply grab the **API secret** that you generated and input it within the SparkPost settings tab of your CMS.

![Mail Settings - SparkPost](/asset/59c1815c73268?w=600) {.mx-auto .d-block}

> #### Note
> SparkPost is an API based provider. There is additional setup required from the SparkPost side of things on your account and server in order to proceed. Please see the following additional references if you are creating a new account.
>
> - [Preparing Your From Address](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address)
> - [Create API Keys](https://www.sparkpost.com/docs/getting-started/create-api-keys/)

---

### Mailgun
To use the [Mailgun](https://www.mailgun.com/) provider, simply grab the **Domain** and **Secret** values assigned to you under your Mailgun account and input them within the Mailgun settings tab of your CMS.

![Mail Settings - Mailgun](/asset/59c1733a29f67?w=600) {.mx-auto .d-block}

> #### Note
> Mailgun is an API based provider. There is additional setup required from the Mailgun side of things on your account and server in order to proceed. Please see the following additional references if you are creating a new account.
>
> - [Verifying Your Domain](https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain)
> - [Where can I find my API key and SMTP credentials?](https://help.mailgun.com/hc/en-us/articles/203380100-Where-can-I-find-my-API-key-and-SMTP-credentials-)

---

<a name="driver-mandrill"></a>
### Mandrill
Mandrill is an add-on to send emails provided by [Mailchimp](https://mailchimp.com/). To use the Mandrill provider, you will need to ensure that you have Mandrill added to your Mailchimp account as an add-on. Once configured, simply grab the API key that you generated and input it within the Mandrill settings tab of your CMS.

![Mail Settings - Mandrill](/asset/59c17651ac905?w=600) {.mx-auto .d-block}

> #### Note
> Mandrill is an API based provider. There is additional setup required from the Mandrill side of things on your account and server in order to proceed. Please see the following additional references if you are creating a new account.
>
> - [Add or Remove Mandrill](https://kb.mailchimp.com/mandrill/add-or-remove-mandrill)
> - [How to Set up Sending Domains](https://mandrill.zendesk.com/hc/en-us/articles/205582387-How-to-Set-up-Sending-Domains)

---

<a name="driver-log"></a>
### Log
The Log driver is useful only in troubleshooting emails. It does not actually send out any emails, but instead logs the output of emails to a text file on the server to aid in debugging.
