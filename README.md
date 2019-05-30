# FusionCMS Documentation
This is an experimental build of our documentation using [VuePress](https://v1.vuepress.vuejs.org/).

## Getting Started
1. Clone repository
2. Run `yarn` to install dependencies
3. Run `yarn docs:dev` to spin up a local server and start watching/compiling markdown files

## Contributing
Documentation is bundled along side the source code within the docs/ directory. Pages are written in markdown and rendered through the use of [VuePress](https://v1.vuepress.vuejs.org/). You can start writing and contributing to the documentation locally by running the `yarn docs:dev` command. This will spin up a server instance and start watching and compiling any newly added or modified markdown file.

When you're happy with your work and are ready to send a pull request, close your server and compile the documentation for production by running `yarn docs:build`. This will generate the static files used in production.