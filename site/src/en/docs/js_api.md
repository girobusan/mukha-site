---
title: Java Script API
excerpt: API for custom scripts
doc: jsapi_en
---

For transparent work with data on the client side, and more efficient
development of custom scripts, Mukha provides a simple API for
Java Script.

---

The API works independently of the site's location; for example, data is loaded
both when opening pages over the network and locally (via the file:// protocol). To enable it, you need to:

- In the template, _as close to the beginning of the HTML as possible_, place the tag {% raw %}`{{ jsapi }}`{% endraw %} (if it is not already there)
- In the [configuration file](/+doc:config_file_en), add the option `js_api: true`

With the API connected, the `window.Mukha` object becomes available to scripts. Below is a list of its fields.

### Available fields

{% for unit in data.datasets.api.jsapi %}
<div class="mb-6">
<strong>
{{ unit.field }}{% if unit.isFunction %}(
{% if unit.params %}
{% for P in unit.params %}
{{ P[0] }}{% if not loop.last %} , {% endif %}
{% endfor %}
{% endif %} )
{% endif %}
</strong>
<div>{{ unit.description_en}} </div>
{% if unit.params %}
<table>
<thead>
<tr>
<td>Parameter</td>
<td>Type</td>
<td>Description</td>
</tr>
</thead>
<tbody>
{% for row in unit.params %}
<tr>
<td><code>{{row[0]}}</code></td>
<td>{{row[1]}}</td>
<td>{{row[3]}}</td>
</tr>
{% endfor %}
</tbody></table>
{% endif %}

</div>
{% endfor %}
