# distraction-free-youtube

## Demo
https://eqlz.github.io/distraction-free-youtube/

## Original motivation
I want to watch a teaching video on programming without suggested videos on the right or comments below.  Just show that one video on the page.

Especially suggested videos, I can't remember how many times I clicked a seemingly entertaining video, and being sidetracked from my original learning.

## Surprised usage
You can play a music video on loop.

### How it's done
Youtube IFrame Player API offers a [`loop` parameter](https://developers.google.com/youtube/player_parameters#loop).

This does the trick:
`<iframe src="https://www.youtube.com/embed/VIDEO_ID?playlist=VIDEO_ID&loop=1">`
