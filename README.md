Better New Tab is a project aimed at improving the default firefox newtab. Better New Tab features a minimalist layout, an exact time clock, a search engine selection option, and the [tokyo-night](https://github.com/tokyo-night/tokyo-night-vscode-theme) color scheme.

![Example Screenshot](screenshots/exampleSearch.png?raw=true)
# Setup
Once you have downloaded the repository (`git clone https://github.com/2Carrot10/better-new-tab.git`), you need to build the project.
Run the command `npm install` to install all packages. Next, run `npm run build`.
Type `file:///<PATH TO BETTER NEW TAB>/docs/index.html` into your address bar to view Better New Tab.

There are two ways to make this Better New Tab your homepage, by editing the `user.js` file, and by changing settings within `firefox`.
* Editing user.js
Insert the following code into `<your profile directory>/user.js`:
```js
user_pref("browser.startup.homepage", "file:///<PATH TO BETTER NEW TAB>/docs/index.html");
```
You can find your profile directory in `about:support`
* Changing settings in Firefox
To set up Better New Tab in Firefox, go to `about:preferences` and select `Home`. Set `New Windows and Tabs` 
to `Custom URLs`, and set the URL to the `docs/index.html` file (i.e. `file:///<PATH TO BETTER NEW TAB>/docs/index.html`)
