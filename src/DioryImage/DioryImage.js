import React from 'react'
import PropTypes from 'prop-types'

const defaultStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const getBackgroundImage = image => ({ backgroundImage: 'url(' + image + ')' })

export const DioryImage = ({ image, styles: { image: style } }) => !image ? null : (
  <div style={{ ...defaultStyle, ...getBackgroundImage(image), ...style }} />
)

DioryImage.propTypes = {
  image: PropTypes.string,
  styles: PropTypes.shape({
    image: PropTypes.object
  })
}

DioryImage.defaultProps = {
  image: '',
  styles: {}
}
