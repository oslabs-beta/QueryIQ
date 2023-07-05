import React from 'react'
import GrafanaCredentials from './GrafanaCredentials'

describe('<GrafanaCredentials />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GrafanaCredentials />)
  })
})