import React from 'react'
import { Container } from 'semantic-ui-react'

import css from './index.scss'

const Footer = ({ name = 'LIXIN DIGITAL' }) => (
  <Container fluid>
    <div className={css.footer}>
      <p>{name}</p>
      <a href="#">網頁製作</a>
    </div>
  </Container>
)

export default Footer
