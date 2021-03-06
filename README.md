# rmp-fire-tv
Example for using [Radiant Media Player](https://www.radiantmediaplayer.com) in a web-based Fire TV app.

## Usage
You can use Radiant Media Player to build media-oriented web-based Fire TV applications. 
The player is equipped with various optimisations, to work in the following environments:
- [HTML5 web apps for Fire TV](https://developer.amazon.com/docs/fire-tv/getting-started-with-web-apps.html)
- Fire OS 6+ (previous versions of Fire OS may work but they are untested)

For a list of supported features [see our documentation](https://www.radiantmediaplayer.com/docs/latest/fire-tv-apps.html#features).

## Demo app structure
The demo app is built with a landing page (index.html) that offers the possibility to start 5 different players showcasing various features available with Radiant Media Player for Fire TV app:
- mp4.html (MP4 VOD)
- hls.html (HLS VOD)
- aes-hls.html (AES-128 HLS VOD)
- live.html (Live HLS)
- dash-drm.html (DASH DRM) **BETA**
- dash-live.html (Live DASH)
- dash-vp9.html (DASH VP9 VOD)
- ads.html (HLS VOD with video ads)
- ads-ima.html (HLS VOD with video ads (Google IMA))

Players displayed use our dedicated TV player layout for a better fullscreen experience on large displays.

This demo app has been tested on an Amazon Fire TV Stick 4K (FireOS 6+).

## Example
A live example of our demo app [can be viewed here](https://www.radiantmediaplayer.com/rmp-fire-tv/). This example 
is made to be tested in web browsers or in Amazon Web App Tester. When testing your web app for Fire TV make sure to use your PLATFORM Edition license key. 

## Issues
Issues should be submitted in this GitHub page. We will do our best to review them.

## License for rmp-fire-tv
rmp-fire-tv is released under MIT.

## License for Radiant Media Player
Radiant Media Player is a commercial HTML5 media player, not covered by the above MIT license. 

Radiant Media Player license can be found here: [https://www.radiantmediaplayer.com/terms-of-service.html](https://www.radiantmediaplayer.com/terms-of-service.html). 

You may request a free trial for Radiant Media Player at: [https://www.radiantmediaplayer.com/free-trial.html](https://www.radiantmediaplayer.com/free-trial.html).
