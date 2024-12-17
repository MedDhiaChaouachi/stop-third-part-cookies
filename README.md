# Block Third-Party Cookies Extension

## Overview
This Chrome extension blocks third-party cookies to enhance privacy and security by preventing trackers from accessing your data across different websites.

## Features
- Blocks third-party cookies by preventing requests made from different origins.
- Protects user privacy while browsing.
- Easy to install and use.

## Installation

1. Download or clone the repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click on the **Load unpacked** button.
5. Select the folder containing the extension files (e.g., `manifest.json`, `background.js`, `content.js`).
6. The extension should now appear in your extension list and be active.

## Usage
Once the extension is installed, it will automatically start blocking third-party cookies while you browse. No further action is required from the user.

## Permissions
- `cookies`: Grants access to manage cookies.
- `webRequest`: Allows the extension to observe network requests.
- `webRequestBlocking`: Allows the extension to block requests.
- `storage`: Enables storing settings and preferences.
- `tabs`: Provides access to browser tabs.

## How it Works
The extension uses the `webRequest` API to monitor and block requests that come from third-party domains (requests that originate from a different domain than the one being visited).

## Development

To make changes or improvements to the extension, follow these steps:

1. Clone or download the repository to your local machine.
2. Modify the extension files as necessary.
3. Reload the extension in `chrome://extensions/` to see changes.

## License
This extension is open-source and distributed under the MIT License.

## Disclaimer
This extension is intended to block third-party cookies for privacy purposes. While it can significantly reduce tracking, it may break some website functionalities that rely on third-party cookies.


