BetterNewTab is a project aimed at improving the default firefox newtab.
BetterNewTab features a minimalist layout, an exact time clock, a search engine
selection option, and the
[tokyo-night](https://github.com/tokyo-night/tokyo-night-vscode-theme) color
scheme.

![Example Screenshot](screenshots/exampleSearch.png?raw=true)

To use BetterNewTab, first you must set up npm. Run the following code in the
root directory of the project: 

```
bash npm install 
``` 
On start, run the `npm run run` command, to run BetterNewTab. In firefox, go to 
`application menu->Settings->Home`. Set `New Windows and Tabs` to `Custom URLs`, 
and set the URL to the localhost port that your BetterNewTab is using (e.g.
`http://127.0.0.1:8080/`)
