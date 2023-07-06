import React from 'react'
import ModalFormInput from './ModalFormInput'

describe('<ModalFormInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModalFormInput />)
  })
})