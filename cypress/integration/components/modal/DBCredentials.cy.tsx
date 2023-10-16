import React from 'react'
import DBCredentials from '../../../../src/components/modal/DBCredentials'

describe('<DBCredentials />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DBCredentials />)
  })
})