# Custom Video New Tab Extension

Simple chrome extension for add custom videos every time you open a new tab in your browser.

# Manual Installation Steps for Chrome
- [Download the latest .ZIP Archive](https://github.com)
- Extract the ZIP Archive **NOTE: is recomendable extract the ZIP in a safe folder**
- Open up Chrome and in your Web Browser URL, enter: `chrome://extensions`
- Enable the `Developer Mode` toggle, found in the top right of this view (typically) of the extensions page in your browser.
- Click `Load unpacked Extension`
- Navigate into the extracted folder from the ZIP Archive.

# Usage
Once the extension is installed, for add videos and configure it, you only need to edit the "config.js".

- **videosFolder:** The base directory for the videos, by default is './videos/'.
- **random:** is True, the video list will appear randomly, else just will appear the first video.
- **videoList:** List of videos to play.

Follow the comments in the code to understand how it. 