import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.'

describe('Header', () => {
  it('renders header', () => {
    render(<Header />)
  })
})
