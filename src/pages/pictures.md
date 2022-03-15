---
pageTitle: Movies
navTitle: Pictures
pageClass: pictures
singleImage: /img/launch.png
images:
  - now_playing.png
  - projector.png
  - reel.png
  - ticket.png
---

## Markdown, single image:

![alt info goes here]( {{ singleImage }} )

## HTML, single image:

<img src="{{ singleImage }}" alt="info goes here" style="transform: scale(50%) rotate(20deg);" />

## Markdown in Liquid for loop:

{% for filename in images %}
![alt info goes here](/img/{{ filename }})
{% endfor %}

## HTML in Liquid for loop:

{% for filename in images %}
<img src="/img/{{ filename }}" alt="A nice movie." />
{% endfor %}

[Home](/)