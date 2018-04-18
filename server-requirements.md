# Server Requirements

FusionCMS has a few system requirements. If you are developing locally on your machine, you don't have to worry about any of these details as [Homestead](homestead) takes care of everything for you. However, if you are a server admin or are otherwise installing FusionCMS on a server, you will need to make sure your server meets the following requirements:

- Apache or Nginx
- PHP >= 5.6.4
- MySQL >= 5.6
- GD Image Library
- Beanstalkd
- Supervisor
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

## Server Configuration

### Pretty URLs

#### Apache
FusionCMS includes a `public/.htaccess` file that is used to provide URLs without the `index.php` front controller in the path. Before serving FusionCMS with Apache, be sure to enable the `mod_rewrite` module so the `.htaccess` file will be honored by the server.

If the `.htaccess` file that ships with FusionCMS does not work with your Apache installation, try this alternative:

```
Options +FollowSymLinks
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

#### Nginx
If you are using Nginx, the following directive in your site configuration block will direct all requests to the `index.php` front controller:

```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

Of course, when using [Homestead](homestead), pretty URLs will be automatically configured.
