/** @jsx jsx */
import React, { Fragment } from 'react'
import { jsx } from 'theme-ui'

import SpeakerCard from './SpeakerCard';
import useSiteMetadata from '../hooks/useSiteMetadata';

const CARD_BG_LIST = [
  'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
  'linear-gradient(to right, #662D8C 0%, #ED1E79 100%)',
  'linear-gradient(to right, #009245 0%, #FCEE21 100%)',
  'linear-gradient(to right, #D585FF 0%, #00FFEE 100%)'
]

const SpeakerList = () => {
  const { speakersData } = useSiteMetadata();
  return (
    <Fragment>
      {
        speakersData.map(
          ({ name, role, company, talkTitle, imageSrc }, index) => (
          <SpeakerCard
            name={ name }
            role={ role }
            company = { company }
            bg={ CARD_BG_LIST[index] }
            imageSrc={ imageSrc }
          >
            <h3>{ talkTitle }</h3>
          </SpeakerCard>
        ))
      }
    </Fragment>
  )
}

export default SpeakerList
