---
layout: layout.html
pageTitle: Current Movies Playing 
tags: page
navTitle: Home
---

## A list of current Movies Now Playing

>Now Playing in a Theater Near You

{% for page in collections.page %}

  <h2><a href="{{ page.url }}">{{ page.data.pageTitle | upcase}}</a></h2>
  <em>{{ page.date | date: "%Y-%m-%d" }}</em>
{% endfor %}