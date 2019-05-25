---
title: Licensing
---

# Licensing

[[toc]]

---


FusionCMS is a proprietary content management system (CMS) with an opinionated approach to managing and serving content. The following details apply regardless of whether you've purchased a license yourself or received a license through an agency.

## What Licensing Protects
Each website powered by FusionCMS must have an accompanying license. A license provides us (efelle) the means to continuously support and build upon FusionCMS and its ecosystem. As such, through licensing we can provide monthly updates to ensure the continued stability, performance, and feature-set of your website(s).

Without an active license, your website will not receive any future updates and will be placed in a suspended state until the attributed license is renewed or replaced.

## Release Cycle
FusionCMS follows a monthly sprint cycle, where we consider the **28th of every month** to be the release date of the next version of FusionCMS. FusionCMS follows the semantic versioning release system (Major.Minor.Patch). Releases are divided into three groups:

- **Major** &mdash; Major releases will likely require some user confirmation to continue, since they will consist of major and drastic changes to the underlying code base and functionality of the CMS. (e.g. v5.0 &rarr; v6.0).
- **Minor** &mdash; Minor releases consist of both bug/security fixes as well as additional or minor functionality changes that does not break backward compatibility with existing features. (e.g. v5.1 &rarr; v5.2).
- **Patch** &mdash; Patch releases are simply bug and security fixes that do not change or add any additional functionality to the CMS. (e.g. v5.2.1 &rarr; 5.2.2).

## How FusionCMS Receives Updates
Every FusionCMS powered website pings Launchpad, our release and license management service, every half-an-hour to determine if there is an update available to be applied. If so, the CMS will handle the update process on its own by downloading the proper release from Launchpad. This can of course be disabled if you wish to check for and update manually on your time.

There are fail-safe procedures in place during the update process to backup and ensure that your website is not left in a broken state if something were to happen.
