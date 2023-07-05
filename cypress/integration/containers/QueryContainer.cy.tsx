import React from 'react'
import QueryContainer from './QueryContainer'

describe('<QueryContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QueryContainer />)
  })
})