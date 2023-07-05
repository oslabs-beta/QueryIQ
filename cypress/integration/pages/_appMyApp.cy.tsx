import React from 'react'
import MyApp from '../../../src/pages/_app'

describe('<MyApp />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyApp />)
  })
})