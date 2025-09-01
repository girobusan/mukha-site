---
title: Installation
doc: install_en
order: "001_001"
excerpt: |-
  Three installation methods
---

### NPM

The easiest way to install is using npm (npm is installed automatically with Node). Run the following command in your terminal:

```bash
npm install mukha-ssg
```

After this, Mukha can be launched with the `mukha-ssg` command. Examples in the documentation are provided for this installation method.

### Git + NPM

You can clone the repository and use npm only to create the necessary links:

```shell
git clone ssh://git@gitverse.ru:2222/girobusan/mukha-ssg.git
cd mukha-ssg
npm install
npm run build
npm link
```

The result is the same as in the previous method.

### Manual Installation

If for some reason you do not want to install via npm, you can download the distribution using any available method. The main file is called `mukha.js`. You can even store it with your site files. Run it with the command:

```bash
node <path to file>mukha.js <command line parameters>
```

You will also need a starter site. You can download it separately and unpack it to a convenient location, or you can [create one using Mukha itself](/+doc:make_site_en).

