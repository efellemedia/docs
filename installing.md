# Installing

Before installing FusionCMS, make sure you've got everything you need:

#### Checklist
- A valid FusionCMS license key
- [Composer](https://getcomposer.org/)
- A web server that meets FusionCMS' [server requirements](server-requirements)
- An FTP client (we recommend [Forklift](http://www.binarynights.com/forklift/))
- MySQL access, either via a web-based tool like phpMyAdmin or a standalone app like [Sequel Pro](https://www.sequelpro.com/)
- Your favorite text editor
- Your favorite beverage

## Step One: Get the CMS

### Fusion Downloader
We offer a convenient downloader that will download the latest stable version of FusionCMS in the directory of your choice. Before getting started, make sure you have the `efellemedia/fusioncms-downloader` package globally installed using Composer.

```
composer global require efellemedia/fusioncms-downloader
```

> #### Note
> The FusionCMS downloader is only recommended for those on Mac or Linux systems. If you are using Windows, please install manually.

#### Registering Your Token
Now that you have the FusionCMS downloader, you need to register your FusionCMS registration token with the downloader. Once you have obtained a token, register it with the downloader using the register command:

```
fusion register token-value
```

If you would like to view the currently registered token, you may use the `token` command:

```
fusion token
```

#### Creating FusionCMS Projects
Once your FusionCMS downloader has been registered, you can run the `new` command to create new projects:

```
fusion new project-name
```

This command will create a new FusionCMS project in a directory matching the given project-name.

### Manually
Download the latest stable release from [GitHub](https://github.com/efellemedia/fusioncms/releases), extract somewhere on your computer, and upload the contents to your server. FusionCMS expects the `public` directory to be your webroot, so you will need to configure your virtual host/server block to point to the `public` directory.

## Step Two: Set the Permissions
At a minimum, FusionCMS needs to be able to write to a handful of directories on your server:

- `bootstrap/cache`
- `modules`
- `public/uploads`
- `public/themes`
- `storage`

> #### Note
> If you are setting up locally with Homestead, you don't need to worry about setting your permissions.

## Step Three: Install Composer Dependencies

> #### Note
> If you are using Homestead for local development, you will want to run the rest of the following commands from your Homestead virtual machine after SSH'ing in.

FusionCMS utilizes [Composer](https://getcomposer.org/) to manage its dependencies. So, before continuing on, make sure you have Composer installed on your machine.

From the root directory of FusionCMS, run `composer install` to download and install all the required dependencies from your terminal:

```
$ composer install
```

> #### Note
> You may be asked to enter your GitHub username and password during this process. This is simply due from hitting GitHub's API limit as an unauthenticated user.

## Step Four: Run The FusionCMS Installer
Finally, use the following command to run the FusionCMS Console Installer from your project's root directory:

```
$ php artisan fusion:install
```

The console installer will walk you through the steps required to configuring FusionCMS for installation.

The console installer also supports a handful of useful flags. These can help speed up the installation process.


- **--dev**: Enables debug mode which will display detailed error pages during local development.
- **--quick**: Utilizes the default values for the installation process and skips the installation wizard.
- **--url[=URL]**: Assign the URL to be used during installation. Can be used in combination with the `--quick` flag.
- **--host[=HOST]**: Assign the database host to be used during installation. Can be used in combination with the `--quick` flag.
- **--database[=DATABASE]**: Assign the database name to be used during installation. Can be used in combination with the `--quick` flag.
- **--username[=USERNAME]**: Assign the database username to be used during installation. Can be used in combination with the `--quick` flag.
- **--password[=PASSWORD]**: Assign the database password to be used during installation. Can be used in combination with the `--quick` flag.
- **--charset[=CHARSET]**: Assign the database charset to be used during installation. Can be used in combination with the `--quick` flag.
- **--collation[=COLLATION]**: Assign the database collation to be used during installation. Can be used in combination with the `--quick` flag.

## Step Five: Register License Key
Once FusionCMS is installed, log in under the administrator account, head to **Settings**, click the *License* tab, and enter your valid license key here.

Once registered, the CMS will be able to be updated either manually or automatically.
