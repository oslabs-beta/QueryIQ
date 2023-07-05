import React from 'react'
import HamburgerMenu from './HamburgerMenu'

describe('<HamburgerMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HamburgerMenu />)
  })
})