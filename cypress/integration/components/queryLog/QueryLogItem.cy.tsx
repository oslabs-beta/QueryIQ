import React from 'react'
import QueryLogItem from './QueryLogItem'

describe('<QueryLogItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<QueryLogItem />)
  })
})