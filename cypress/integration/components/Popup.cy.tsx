import React from 'react'
import Popup from './Popup'

describe('<Popup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Popup />)
  })
})