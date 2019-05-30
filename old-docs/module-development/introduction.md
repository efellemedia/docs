# Introduction

FusionCMS is a modular platform; meaning, you may extend the functionality and feature-set of the CMS through an organized manner. In fact, this is even how the core features of the CMS have been developed. When creating modules that extend the CMS outside of the core set of features, we call these **Add-on Modules**.

## Add-on Module Responsibility
Modules hold a different role in the CMS than their previous renditions in previous versions of the CMS (FusionCMS v4 and below). Instead of modules driving _both_ the feature set as well as content needs; modules in v5 extend and provide features to the platform as a whole. So, rather than creating a module dedicated to a Blog, the focus should be on "what makes up a blog?" and lean on the Matrix to provide the scaffold for the needs of the content.

Add-on modules can range in complexity as well. They can cover the needs of just housing a few helper methods to full-fledged feature sets such as eCommerce and other complex needs.

## Assumed Knowledge
As FusionCMS is built on top of Laravel, working knowledge of Laravel is a must. If you are new to Laravel, you will want to ensure that you understand some core fundamentals of programming in PHP such as [object oriented programming](http://php.net/manual/en/language.oop5.php), [namespaces](http://php.net/manual/en/language.namespaces.php) and package management through [Composer](https://getcomposer.org/).

For supplemental learning, we highly recommend both [Laracasts](https://laracasts.com/) and [CodeCourse](https://www.codecourse.com/).

## Structure
The structure of add-on modules follows the same structure as any vanilla Laravel project. Here's a few of the core components that make up an add-on module:

- [API](#)
- [Commands](#)
- [Controllers](#)
- [Event Listeners](#)
- [Fieldtypes](/module-development/fieldtypes)
- [Helpers](#)
- [Menus](#)
- [Migrations](#)
- [Models](#)
- [Notifications](#)
- [Service Providers](#)
- [Settings](#)
