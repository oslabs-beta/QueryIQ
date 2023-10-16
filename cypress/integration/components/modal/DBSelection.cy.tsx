import React from 'react'
import DBSelection from './DBSelection'

describe('<DBSelection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DBSelection />)
  })
})