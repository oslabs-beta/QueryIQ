import React from 'react'
import MainContainer from './MainContainer'

describe('<MainContainer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainContainer />)
  })
})