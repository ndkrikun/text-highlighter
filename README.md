# TextHighlighter

## Requirements

You will need to have `10.x` node.js version to run this project

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Non-critical bugs to fix

- check the flow, when selection area is already exist and remove it form selection `area-picker.service.ts | pickArea()`
- verify if it is required to combine selection areas to one `area-picker.service.ts | pickArea()`
- verify if different color selections are crossing and implement specific conflicts managing flow `area-picker.service.ts | pickArea()`
- return exactly the node element instead of the text selection to avoid cases of the same text selection on the page `text-selection.service.ts | getSelection()`
- make `getSelection` works with selections inside textarea or input elements `text-selection.service.ts | getSelection()`

## Features to improve

- add quanity of filtered lines on each selection filter button
- hide filter buttons that have 0 lines to show
- add 'clear selections' button
- add opacity to non-active filter buttons
- add hover styles for picker-button

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
