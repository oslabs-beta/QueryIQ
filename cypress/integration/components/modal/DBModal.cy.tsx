import React from 'react'
import DBModal from './DBModal'

describe('<DBModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DBModal />)
  })
})