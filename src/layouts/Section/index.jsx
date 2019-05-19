import React from 'react'

import css from './index.scss'

const Section = props => <div className={css.section} style={props.style}>{props.children}</div>

export default Section
