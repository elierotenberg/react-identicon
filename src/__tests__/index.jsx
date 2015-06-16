import React from 'react';
import Identicon from '../';
import 'should';
const { describe, it } = global;

describe('renderToStaticMarkup', () =>
  it('should render to the correct HTML', () =>
    React.renderToStaticMarkup(<Identicon id='elie@rotenberg.io' type='retro' size={120} className='my-identicon' />)
      .should.be.exactly([
        '<img src="',
        '//www.gravatar.com/avatar/5638abedffa9b38c2b1155bf1ef09250?d=retro&amp;f=y&amp;s=120',
        '" class="my-identicon">',
      ].join(''))
  )
);
