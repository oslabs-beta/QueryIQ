import React from 'react'
import QueryLog from '../../../../src/components/queryLog/QueryLog'

describe('<QueryLog />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QueryLog />)
  })
})