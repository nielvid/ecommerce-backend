import React from 'react'

export default function ImageThumb({ image }) {
    return (
      <img src={URL.createObjectURL(image)} alt={image.name} />
    )
}
