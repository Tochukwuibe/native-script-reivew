# Native Script review sample app

## Issues

### Template
The current angular template tns-template-blank-ng is outdated, use this template insted: @nativescript/template-blank-ng.
See here for more details: https://github.com/NativeScript/NativeScript/issues/8807


### HMR (HOT MODULE RELOADING)
Currently doesn't work (as of 01/04/2020). Issue has be known by the team since at  least 08/01/2020. Unresponsive to Githib issues on this, see here: https://github.com/NativeScript/nativescript-schematics/issues/291

Only fix is to disable the HMR, which means the app closes and reopens on each save.