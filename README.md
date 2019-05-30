# FusionCMS Documentation
This is an experimental build of our documentation using [VuePress](https://v1.vuepress.vuejs.org/).

## Getting Started
1. Clone repository
2. Run `yarn` to install dependencies
3. Run `yarn docs:dev` to spin up a local server and start watching/compiling markdown files

## Contributing
Documentation is bundled along side the source code within the docs/ directory. Pages are written in markdown and rendered through the use of [VuePress](https://v1.vuepress.vuejs.org/). You can start writing and contributing to the documentation locally by running the `yarn docs:dev` command. This will spin up a server instance and start watching and compiling any newly added or modified markdown file.

When you're happy with your work and are ready to send a pull request, close your server and compile the documentation for production by running `yarn docs:build`. This will generate the static files used in production.

## Old Documentation
There is an `old-docs` directory containing the documentation that has yet to be converted for use by Vuepress. Below you will find steps required to convert pages - luckily they're all pretty straight forward and take little time to do.

### Frontmatter
Vuepress supports frontmatter, which is extra meta information that can be applied and used by Vuepress in a more programmatic manner. For now, we're just setting the `title` value to the title of the page.

At the top of the document, simply add the following:

```
---
title: Your Page Title
---
```

### Table of Contents
Just below the first header title, we add the table of contents tag (`[[toc]]`) and breaking line (`---`):

```
# Your Page Title

[[toc]]

---

Lorem ipsum dolor...
```

### Callouts
In the old docs, we used markdown quotes for callouts. Vuepress has a better implementation to this that catches the users eyes.

#### Find
```
> Note|Warning
> Lorem ipsum dolor...
```

#### Replace
```
::: tip|warning|danger
Lorem ipsum dolor...
:::
```