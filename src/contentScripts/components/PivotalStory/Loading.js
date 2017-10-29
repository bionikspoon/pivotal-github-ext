/* @flow */
import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Well from '../Well'
import './PivotalStory.css'

export default function Loading() {
  return (
    <Well className="PivotalStory__container">
      <LoadingSpinner />
    </Well>
  )
}
