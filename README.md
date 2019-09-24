# Learning with the ArcGIS JavaScript API

## What is this?
This is a physical heatmap of where I spent my time in the past 6 months, based on my phone tracking me. It's built with the ArcGIS JavaScript API and a *lot* of fiddling.

## Acknowledgements
I utilized the [ArcGIS QuickStart Guide](https://developers.arcgis.com/javascript/latest/guide/quick-start/) as a baseplate for how to use the API, but expanded from there on my own using my imagination and the API [docs](https://developers.arcgis.com/javascript/latest/api-reference/).

The data is my Google Maps location history, sourced as a JSON using Google's Takeout personal data extraction tool. It was then converted and cleaned as a CSV; huge thanks to [SQLify](https://sqlify.io) for allowing me to convert such a huge file. The file is hosted on AWS S3.


## Learnings
So, turns out the ArcGIS JavaScript library is a HUGE pain to work with. I spent hours and hours just screwing with stuff to try to get it to display simple dots, and there are very few Stack Overflow / forum posts / etc for debugging the plethora of weird and unclear bugs it spits out. I think if I were building a map like this in the future, I'd want to just leverage the actual licensed software to make it.

I guess another thing I learned was the benefit of cleaning your dataset earlier: for quite a while I was keeping *all* of the data intact, in case I wanted to adjust the visualization based on what I saw. However, a lot of it wasn't useful -- and it made cleaning and passing around a 40MB data file way harder than it needed to be. 
