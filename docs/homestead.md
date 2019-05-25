---
title: Homestead
---

# Homestead

[[toc]]

---


As FusionCMS is built on Laravel, we pretty much follow the standard local development workflow as you would find with any Laravel developer. For local development, we use the official Laravel Homestead Vagrant box that provides all the necessary software and libraries. If you're not familiar with virtual boxes, you're in for a treat! With a virtual box development environment, you do not need to worry about messing up your operating system. Virtual boxes are completely disposable. If something goes wrong, you can destroy and re-create the box in minutes!

Homestead runs on any Windows, Mac, or Linux system, and includes the Nginx web server, PHP 7.2, PHP 7.1, PHP 7.0, MySQL, PostgreSQL, Redis, Memcached, Node, and all of the other goodies you need to develop amazing websites.

::: tip
If you are using Windows, you may need to enable hardware virtualization (VT-x). It can usually be enabled via your BIOS. If you are using Hyper-V on a UEFI system you may additionally need to disable Hyper-V in order to access VT-x.
:::

## Included Software
- Ubuntu 18.04
- Git
- PHP 7.2
- PHP 7.1
- PHP 7.0
- PHP 5.6
- Nginx
- Apache (Optional)
- MySQL
- MariaDB (Optional)
- Sqlite3
- PostgreSQL
- Composer
- Node (with Yarn, Bower, Grunt, and Gulp)
- Redis
- Memcached
- Beanstalkd
- Mailhog
- Neo4j (Optional)
- MongoDB (Optional)
- ngrok
- wp-cli
- Zend Z-Ray
- Go
- Minio

## Installation and Setup
Before launching your Homestead environment, you must install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](https://www.vagrantup.com/downloads.html). Both of these offer easy-to-use visual installers for all popular operating systems.

### Installing The Homestead Vagrant Box
Once VirtualBox and Vagrant have been installed, the next step is adding the `laravel/homestead` box to your Vagrant installation using the following command in your terminal. It will take a few minutes to download the box, depending on your internet connection speed:

```
vagrant box add laravel/homestead
```

If this command fails, make sure your Vagrant installation is up to date.

### Installing Homestead
Next you will need to clone the Homestead repository to your local machine. We suggest cloning this into a `Homestead` folder within your **home** directory:

```sh
cd ~

git clone https://github.com/laravel/homestead.git Homestead
```

You should then check out a tagged version of Homestead since the `master` branch may not always be stable. You can find the latest stable version on the [GitHub Release Page](https://github.com/laravel/homestead/releases):

```sh
cd ~/Homestead

// Clone the desired release...
git checkout v7.16.1
```

Once you have cloned the Homestead repository, run the `bash init.sh` command from the Homestead directory to create the `Homestead.yaml` configuration file. The `Homestead.yaml` file will be placed in the Homestead directory:

```sh
// Mac / Linux
bash init.sh

// Windows
init.bat
```

## Configuring Homestead
The previously created `Homestead.yaml` file contains all the configuration options for your Homestead environment. Below we'll go through some of the common things you'll be working with frequently.

### Setting Your Provider
Homestead does support more than just VirtualBox as your provider. If you are using something other than VirtualBox, you will need to update Homestead with your desired provider:

```yaml
provider: virtualbox
```

Supported Options: `virtualbox`, `vmware_fusion`, `vmware_workstation`, or `parallels`.

### Configuring Shared Folders
The `folders` property of the Homestead configiration file lists all of the folders you wish to share with your Homestead environment. As files within these folders are changed, they will be kept in sync between your local machine and the Homestead environment. You may configure as many shared folders as necessary. Two common folders we usually add here are the `Code` and `Sites` folders within our home directory.

```yaml
folders:
    - map: ~/Code
      to: /home/vagrant/Code
    - map: ~/Sites
      to: /home/vagrant/Sites
```

If you are only creating a few sites, this generic mapping will work just fine. However, as the number of sites continue to grow, you may begin to experience performance problems. This problem can be painfully apparent on low-end machines or projects that contain a very large number of files. If you are experiencing this issue, try mapping every project to its own Vagrant folder:

```yaml
folders:
    - map: ~/Sites/project1
      to: /home/vagrant/Sites/project1
    - map: ~/Sites/project2
      to: /home/vagrant/Sites/project2
```

To add a little performance boost on top of this, you may enable [NFS](https://www.vagrantup.com/docs/synced-folders/nfs.html) by adding a simple flag to your synced folder configuration as shown below:

```yaml
folders:
    - map: ~/Code
      to: /home/vagrant/Code
      type: "nfs"
```

You may also pass any options supported by Vagrant's [Synced Folders](https://www.vagrantup.com/docs/synced-folders/basic_usage.html) by listing them under the `options` key:

```
folders:
    - map: ~/Code
      to: /home/vagrant/Code
      type: "rsync"
      options:
          rsync__args: ["--verbose", "--archive", "--delete", "-zz"]
          rsync__exclude: ["node_modules"]
```

### Configuring Nginx Sites
Not familiar with Nginx? No problem. The `sites` property allows you to easily map a "domain" to a folder in your Homestead environment. A sample site configuration is included in the Homestead configuration file. Again, you may add as many sites to your Homestead environment as necessary.

```
sites:
    - map: example.test
      to: /home/vagrant/Sites/example/public
```

If you change the `sites` property after provisioning the Homestead box, you should re-run `vagrant reload --provision` to update the Nginx configuration on the virtual machine.

### The Hosts File
You must add the "domains" for your Nginx sites to the `hosts` file on your machine. The `hosts` file will redirect requests for your Homestead sites into your Homestead machine. On Mac and Linux, this file is located at `/etc/hosts`. On Windows, it is located at `C:\Windows\System32\drivers\etc\hosts`. The line you add to this file will look like the following:

```
192.168.10.10   example.test
```

Make sure the IP address listed is the one set in your Homestead configuration file. Once you have added the domain to your `hosts` file and launched Homestead you will be able to access the site via your web browser:

```
https://example.test
```

## Database Backups
Homestead can automatically backup your database when your Vagrant box is destroyed. To utilize this feature, you must be using Vagrant 2.1.0 or greater. Or, if you are using an older version of Vagrant, you must install the `vagrant-triggers` plug-in. To enable automatic database backups, add the following line to your Homestead configuration file:

```yaml
backup: true
```

Once configured, Homestead will export your databases to `mysql_backup` and `postgres_backup` directories when the vagrant destroy command is executed. These directories can be found in the folder where you cloned Homestead.

## Launching The Vagrant Box
Once you have edited the Homestead configuration file to your liking, run the `vagrant up` command from your Homestead directory. Vagrant will boot the virtual machine and automatically configure your shared folders and Nginx sites.

To destroy the machine, you may use the `vagrant destroy --force` command.

## Aliases
You may add Bash aliases to your Homestead machine by modifying the `aliases` file within your Homestead directory:

```
alias c='clear'
alias ..='cd ..'
```

After you have updated the `aliases` file, you will need to re-provision the Homestead machine using the `vagrant reload --provision` command. This will ensure that your new aliases are available on the machine.

## Daily Usage
You'll be running Vagrant command and editing your Homestead configuration file frequently. It's not fun having to `cd` into your Homestead directory anytime you want to perform any of these actions, so let's get a handy alias to make this process easier setup:

```sh
alias homestead='function __homestead() {
    if [[ $@ == "config" ]]; then
        command open ~/Homestead/Homestead.yaml
    else
        (cd ~/Homestead && vagrant $*);
    fi
}; __homestead'
```

Make sure to tweak the `~/Homestead` path in the function to the location of your actual Homestead installation. Once the function is installed, you may run commands like  `homestead up` or `homestead ssh` from anywhere on your system. We'll be referencing Homestead through the terminal this way through the remainder of the documentation.

## Connecting Via SSH
You can SSH into your virtual machine by issuing the `homestead ssh` terminal command.

## Connecting To Databases
To connect to your MySQL database from your host machine's database client, you should connect to `127.0.0.1` and port `33060`. The username and password is `homestead` / `secret`.

::: warning
You should only use this non-standard port when connecting to databases from your host machine. You will use the default `3306` port in your FusionCMS database configuration file since FusionCMS is running within the virtual machine.
:::

## Adding Additional Sites
Once your Homestead environment is provisioned and running, you will still need to add additional Nginx sites for future projects you work on. You can run as many sites as you wish on a single Homestead environment. To add an additional site, add the site to your Homestead configuration file just the same:

```yaml
sites:
    - map: example.test
      to: /home/vagrant/Sites/example/public
    - map: another.test
      to: /home/vagrant/Sites/another/public
```

Be sure to update your hosts file as necessary, checking that the IP supplied is the same one set in your Homestead configuration file:

```
192.168.10.10   example.test
192.168.10.10   another.test
```

Once the site has been added, run the `homestead reload --provision` command from your terminal.

### Site Paramaters
You may add additional Nginx `fastcgi_param` valies to your site via the `params` site directive. For example, we'll add a `FOO` parameter with a value of `BAR`:

```yaml
sites:
    - map: example.test
      to: /home/vagrant/Sites/example/public
      params:
          - key: FOO
            value: BAR
```

## Environment Variables
You can set global environment variables by adding them to your Homestead configuration file:

```
variables:
    - key: APP_ENV
      value: local
    - key: FOO
      value: BAR
```

After updating the Homestead configuration file, be sure to re-provision the machine by running `homestead reload --provision`. This will update the PHP-FPM configuration for all of the installed PHP versions and also update the environment for the `vagrant` user.

## Configuring Cron Schedules
Laravel, which FusionCMS is built on, provides a convenient way to schedule Cron jobs by scheduling a single `schedule:run` Artisan command to be run every minute. The `schedule:run` command will examine the job schedule defined in the CMS' source code to determine which jobs should be run. For example, FusionCMS has scheduled jobs to check for updates.

If you would like the `schedule:run` command to be run for a Homestead site, you may set the `schedule` option to `true` when defining the site:

```yaml
    - map: example.test
      to: /home/vagrant/Sites/example/public
      schedule: true
```

The Cron job for the site will be defined in the `/etc/cron.d` folder of the virtual machine.

## Ports
By default, the following ports are forwarded to your Homestead environment:

- **SSH:** 2222 → Forwards to 22
- **ngrok UI:** 4040 → Forwards to 4040
- **HTTP:** 8000 → Forwards to 80
- **HTTPS:** 44300 → Forwards to 443
- **MySQL:** 33060 → Forwards to 3306
- **PostgreSQL:** 54320 → Forwards to 5432
- **MongoDB:** 27017 → Forwards to 27017
- **Mailhob:** 8025 → Forwards to 8025
- **Minio:** 9600 → Forwards to 9600

### Forwarding Additional Ports
If you wish, you may forward additional ports to the Vagrant box, as well as specify their protocol:

```yaml
ports:
    - send: 50000
      to: 5000
    - send: 7777
      to: 777
      protocol: udp
```

## Sharing Your Environment
Sometimes you may wish to share what you're currently working on with coworkers or a client. Vagrant has a built-in way to support this via `vagrant share`; however, this will not work if you have multiple sites configured in your Homestead configuration file.

To solve this problem, Homestead includes its own `share` command. To get started, SSH into your Homestead machine via `homestead ssh` and run `share example.test`. This will share the `example.test` site from your Homestead configuration file. Of course, you may substitute any of your other configured sites for `example.test`:

```sh
share example.test
```

After running the command, you will see an Ngrok screen appear which contains the activity log and the publicly accessible URLs for the shared site. If you would like to specify a custom region, subdomain, or other Ngrok runtime option, you may add them to your `share` command:

```sh
share example.test -region=eu -subdomain=fusioncms
```

::: danger
Remember, Vagrant is inherently insecure and you are exposing your virtual machine to the Internet when running the `share` command.
:::

## Multiple PHP Versions
Homestead 6 introduced support for multiple versions of PHP on the same virtual machine. You may specify which version of PHP to use for a given site within your Homestead configuration file. The available PHP versions are: "5.6", "7.0", "7.1" and "7.2" (the default):

```yaml
sites:
    - map: example.test
      to: /home/vagrant/Sites/example/publix
      php: "5.6"
```

In addition, you may use any of the supported PHP versions via the CLI:

```sh
php5.6 artisan list
php7.0 artisan list
php7.1 artisan list
php7.2 artisan list
```

## Mail
Homestead includes the Postfix mail transfer agent, which is listening on port `1025` by default. So, you may instruct your project through FusionCMS to use the `smtp` mail driver on `localhost` port `1025`. Then, all sent mail will be handled by Postfix and caught by Mailhog. To view your sent emails, open http://localhost:8025 in your web browser.

## Updating Homestead
You can update Homestead in two simple steps. First, you should update the Vagrant box using the `homestead box update` command:

```
homestead box update
```

Next, you need to update the Homestead source code. If you cloned the repository you can `git pull origin master` at the location you originally cloned the repository.