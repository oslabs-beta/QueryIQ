import React from 'react'
import InputQuery from './InputQuery'

describe('<InputQuery />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputQuery />)
  })
})