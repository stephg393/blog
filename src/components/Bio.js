import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Courier New, Courier, monospace',
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}

          alt={`Stephanie Gnammakou`}

          style={{
            marginRight: rhythm(1/2),
            marginBottom: 0,
            width: rhythm(5),
            height: rhythm(5),
            borderRadius: 90,
            resizeMode: 'contain'

          }}

        />
        <p>
          Hi, I'm <strong>Stephanie Gnammakou</strong>! I'm a student at
          University of Maryland, College Park doubling in computer science and
          communcation.{' '}
          <a href="https://www.linkedin.com/in/stephaniegnammakou/">
            Check out my LinkedIn profile
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
