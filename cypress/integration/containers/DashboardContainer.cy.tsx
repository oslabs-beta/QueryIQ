import React from 'react'
import DashboardContainer from '../../../src/containers/DashboardContainer'

describe('<DashboardContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DashboardContainer />)
  })
})