import React from 'react'
import GraphCard from '../../../src/components/GraphCard'

describe('<GraphCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GraphCard />)
  })
})