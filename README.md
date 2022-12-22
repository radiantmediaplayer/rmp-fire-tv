# rmp-fire-tv

Example for using [Radiant Media Player](https://www.radiantmediaplayer.com) in a Fire TV app.

## Usage

You can use Radiant Media Player to build media-oriented web-based Fire TV applications.
The player is equipped with various optimisations, to work in the following environments:

- [HTML5 Web Apps for Fire TV](https://developer.amazon.com/docs/fire-tv/getting-started-with-web-apps.html)
- [HTML5 Hybrid Apps for Fire TV](https://developer.amazon.com/docs/fire-tv/hybrid-apps-overview.html) - this is required for DRM support

We support Fire TV devices running on FireOS 6+.

For a list of supported features [see our documentation](https://www.radiantmediaplayer.com/docs/latest/fire-tv-apps.html#features).

## Demo app structure

The demo app is built with a landing page (index.html) that offers the possibility to start different players showcasing various features available with Radiant Media Player for Fire TV app.
Players displayed use our dedicated TV skin for a better fullscreen experience on large displays.

### Example

A live example of our demo app [can be viewed here](https://www.radiantmediaplayer.com/rmp-fire-tv/). This example
is meant to be tested in [Amazon Web App Tester](https://developer.amazon.com/docs/fire-tv/webapp-app-tester.html) but can also be viewed in a web browser.

## DRM

We support Widevine DRM with DASH streaming on Fire TV. A basic Web Apps for Fire TV however does not allow for DRM support. We need to build a native Android app to display a WebView (a.k.a. hybrid app) - this is typically done by using a hybrid framework like Cordova or by creating a WebView project with Android Studio. This hybrid approach on Fire TV allows to provide capabilities that are not possible in a basic web app, due to the security boundary between the browser and the device APIs. This also enables DRM support in Amazon WebView (AWV) and better performance for video playback.

Please follow [our guide for building Android TV apps with Cordova](https://www.radiantmediaplayer.com/docs/latest/android-tv.html) for guidance.

## Issues

Issues should be submitted in this GitHub page. We will do our best to review them.

## License for rmp-fire-tv

rmp-fire-tv is released under MIT.

## License for Radiant Media Player

Radiant Media Player is a commercial HTML5 media player, not covered by the above MIT license.

Radiant Media Player license can be found here: [https://www.radiantmediaplayer.com/terms-of-service.html](https://www.radiantmediaplayer.com/terms-of-service.html).

You may request a free trial for Radiant Media Player at: [https://www.radiantmediaplayer.com/free-trial.html](https://www.radiantmediaplayer.com/free-trial.html).
