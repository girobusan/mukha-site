---
title: "Built-in search"
tags: 
date: "2025.07.19 10:34"
id: 16d0f647e923ac47b4c73734e867badf
doc: search_en
---

Mukha has integrated indexing and search using [lunr](https://lunrjs.com/).  
Search works independently of the content delivery method.

---

### Supported languages:

Integrated support for languages from the lunr-languages package.  

<div style="column-count:2">
{% for l in datasets.api.langlist %}
<div>{{l.name_en }} ({{l.code}})</div>
{% endfor %}
</div>

### Enabling search

For search to work, the Java Script API must be enabled ([instructions](/+doc:jsapi_en)).
Further steps:

1. Configuring the site configuration file
2. Installing language files for languages other than English, Chinese, and Russian
3. Installing the search client script on the site
4. Configuring the search form

#### Configuration

Several options are responsible for search settings. First - enabling search:

```yaml
search: true
```

The next option is responsible for saving article excerpts. If set to true,
search results will include not only titles but also excerpts:  

```yaml
keep_excerpts: true
```
Indexing and search languages. If all your text is only in English, you can
leave this unset. If another language is used - or several, they must be listed:

```yaml
search_lang: ["ru", "en"]
```
Note - the value of this option is always a list. If you want to specify one language, do
it like this:

```yaml
search_lang: ["de"]
```

#### Installing additional language files

If you only use English, Chinese, and Russian languages - this step is not needed.
For other languages, you need to install language files on the site so the search client can
load them.

Language files should be located at `/_js/lib/lunr/lang`, in files named `lunr.<language code>.js`.
For example, the file for the Armenian language is called `lunr.hy.js`.

It's convenient to create the corresponding directory in the `assets` folder within the site folder. The files themselves
can be taken from the [Lunr-languages repository](https://github.com/MihaiValentin/lunr-languages) or
installed [from npm](https://www.npmjs.com/package/lunr-languages).

These files are only needed for the client to work; indexing in all supported languages does not require additional
files.

#### Installing the client script on the site

The search itself is provided by the `search_client.js` script, which is included in the Mukha
distribution. If you installed Mukha from npm, it is located in the same directory as
the main script. The easiest way is to place it in the `assets` folder, and it will end up in the site root.
Next, you need to include it in the template - somewwhere **after** the JS API - best
before the closing `</body>` tag:

```html
<script src="/search_client.js"></script>
```

#### Search form

If you want to use the standard search UI, you need to place a text input field
somewhere at the top of the page and add the attribute `data-role:lunr-search` to it.

```html
<input type="text" data-role="lunr-search" placeholder="Search">
```
If you add the `disabled` attribute to this input field, this attribute will be removed after the search files are loaded.
This can be used to signal to the user that the search is ready.

After generation, you may enter words into this form, and search results will be displayed in a dropdown
menu below it.

You can create your own UI for search; instructions will be provided.

