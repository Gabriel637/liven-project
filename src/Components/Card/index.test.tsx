import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'

describe('Card', () => {
  it('renders card', () => {
    render(
      <Card
        key={'13'}
        name={'Bag'}
        price={34.56}
        image={''}
        rate={4.5}
        handleAddToCart={() => console.log('test')}
      />
    )
  })
})
