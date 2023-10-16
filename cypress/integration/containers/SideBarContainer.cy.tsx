import React from 'react'
import SideBarContainer from './SideBarContainer'

describe('<SideBarContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SideBarContainer />)
  })
})