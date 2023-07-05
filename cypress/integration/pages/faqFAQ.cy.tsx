import React from 'react'
import FAQ from './faq'

describe('<FAQ />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FAQ />)
  })
})