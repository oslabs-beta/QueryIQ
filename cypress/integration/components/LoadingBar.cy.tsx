import React from 'react'
import LoadingBar from './LoadingBar'

describe('<LoadingBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingBar />)
  })
})