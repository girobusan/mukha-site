---
title: Command line usage
excerpt: Usage in the _command line._
part: basics
doc: cli_en
order: "1.02"
---

If the source directory is named `site`, then to generate the site, it is sufficient to run the `mukha-ssg` command in the parent directory. The generated files will be placed in the `static` directory next to the site directory.

Additionally, you can use command line keys:
<small>
| Short   | Full         | Value             | Description                                                                                         |
| ------- | ------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| -v      | --version    | —                 | Outputs the Mukha version to the console                                                           |
| -i      | --input      | directory         | Specifies the directory to take files from; defaults to the `site` directory in the current directory. |
| -o      | --output     | directory         | Path for the generated files; defaults to `static`.                                                |
| -t      | --timed      | —                 | If set, files with a date in the future will be skipped during generation.                          |
| -с      | --cleanup    | —                 | Cleans the output directory of unnecessary files **after** generation.                             |
| -w      | --watch      | —                 | Enables development mode; more details below.                                                      |
| -p      | --port       | port number >1024 or 0 | Port on which the development server will run. Port `0` means automatic selection of an available port. |
| -n      | --new        | —                 | Creates a new site in the current directory                                                        |
| -l | <nobr>--loglevel</nobr> | logging level | Amount of information output, `info`, `warn`, `debug`, or `error`   |
</small>

## Examples

Enables development mode; the server will be available at `http://localhost:8000`

```shell
mukha-ssg -w -p 8000
```

Takes source files from the `site` directory, saves the result in `blog`, and cleans it of unnecessary files after generation.

```bash
mukha-ssg --output blog -c
```
