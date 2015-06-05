import React from 'react';
import Identicon from './';

const got = React.renderToStaticMarkup(<Identicon id='elie@rotenberg.io' type='retro' size={120} className='my-identicon' />)
const exp = `<img src="//www.gravatar.com/avatar/5638abedffa9b38c2b1155bf1ef09250?d=retro&amp;f=y&amp;s=120" class="my-identicon">`;
console.warn({ got, exp });
got.should.be.exactly(exp);
