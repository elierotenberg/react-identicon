React Identicon
===============

Tiny React Component to render an [Identicon](http://en.wikipedia.org/wiki/Identicon) hosted by [Gravatar](https://en.gravatar.com/).

#### Usage

<<<<<<< HEAD
`<Identicon {id=''} {type='identicon'} {size=80} {...otherProps} />`
=======
1. Fork or clone this repository.
2. (Optional) Edit `package.json` if you intent to publish your package on `npm`.
3. `npm install` to install all the required dependencies from `npm`.
4. Hack `src/index.jsx` and `src/__tests__/index.jsx`.
5. Lint/test using `gulp`.
6. Don't forget to edit this `README.md` file.
>>>>>>> starterkit/master

Creates a new `<img>` tag containing a gravatar image.

- `id` is a string (which will `md5`-hashed internally). Same `id` will yield the same image. Different `id` will (most likely) yield different images.
- `type` is a string which can be either `identicon` (the default), `retro` (like github), `monsterid` or `wavatar`). This is the type of avatar generated.
- `size` is the image source in pixels. Note that this can be different from the actual display size of the image, if you specifcy `styles.height` for example.
- All other props will be passed directly to the `<img>` tag (eg. `style`, `className`, `onClick`, etc).

<<<<<<< HEAD
This module is written in ES6/7. You will need `babel` to run it.
=======
- Sanely configured `gulpfile.js`, `package.json`, `.gitignore`, `.editorconfig`, `.eslintrc`, `.jsbeautifyrc`.
- Both CommonJS and ES6 modules are supported.
- Linting and testing is pre-configured.
- `lodash`, `bluebird` and `should` are included by default.
>>>>>>> starterkit/master

#### License

MIT [Elie Rotenberg](http://elie.rotenberg.io) <[elie@rotenberg.io](mailto:elie@rotenberg.io)>
