import React from 'react';
import pure from 'pure-render-decorator';
import md5 from 'MD5';

export default @pure class extends React.Component {
  static displayName = 'Identicon';

  static propTypes = {
    id: React.PropTypes.any,
    size: React.PropTypes.number,
    type: React.PropTypes.string,
  };

  static defaultProps = {
    id: '',
    type: 'identicon',
    size: 80,
  };

  render() {
    const { id, type, size, ...otherProps } = this.props; // eslint-disable-line object-shorthand
    return <img src={`//www.gravatar.com/avatar/${md5(id)}?d=${type}&f=y&s=${size}`} {...otherProps} />;
  }
}
