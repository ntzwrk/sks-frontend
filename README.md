# sks-frontend

[![npm package](https://img.shields.io/npm/v/sks-frontend.svg)](https://www.npmjs.com/package/sks-frontend) [![npm license](https://img.shields.io/npm/l/sks-frontend.svg)](https://github.com/ntzwrk/sks-frontend/blob/develop/LICENSE.md)

`sks-frontend` is an Angular frontend for your SKS (keyserver) to make your keyserver page a little bit prettier.
Currently supports searching, submitting and statistics. Anti-feature: No `noscript` support.

Demo: [https://keyserver.ntzwrk.org](https://keyserver.ntzwrk.org)


## Todo
* [ ] Integrate search into UI (redirects currently to the default results)
* [ ] `noscript` support
* [ ] Add tests
* [ ] Migrate to Angular 6
* [ ] Migrate to Angular Material


## Installation

### Pre-packaged
Just download the latest pre-built release from the [releases on GitHub](https://github.com/ntzwrk/sks-frontend/releases), unzip it into a public available directory, edit the config file (in `src/environments/environment.prod.ts`) and have fun.

### Manual
Install the project via `yarn add sks-frontend` (or `npm install sks-frontend`) into a local directory, then build it with `ng build --prod`, then proceed as mentioned above.


## Development

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## License
This code is published under the [GNU General Public License v3.0](LICENSE.md).
