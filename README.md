React Identicon
===============

Tiny React Component to render an [Identicon](http://en.wikipedia.org/wiki/Identicon) hosted by [Gravatar](https://en.gravatar.com/).

#### Usage

`<Identicon {id=''} {type='identicon'} {size=80} {...otherProps} />`

Creates a new `<img>` tag containing a gravatar image.

- `id` is a string (which will `md5`-hashed internally). Same `id` will yield the same image. Different `id` will (most likely) yield different images.
- `type` is a string which can be either `identicon` (the default), `retro` (like github), `monsterid` or `wavatar`). This is the type of avatar generated.
- `size` is the image source in pixels. Note that this can be different from the actual display size of the image, if you specifcy `styles.height` for example.
- All other props will be passed directly to the `<img>` tag (eg. `style`, `className`, `onClick`, etc).

This module is written in ES6/7. You will need `babel` to run it.

#### License

MIT [Elie Rotenberg](http://elie.rotenberg.io) <[elie@rotenberg.io](mailto:elie@rotenberg.io)>
