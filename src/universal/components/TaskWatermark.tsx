import React from 'react'
import styled from 'react-emotion'
import GitHubSVG from 'universal/components/GitHubSVG'
import JiraSVG from 'universal/components/JiraSVG'
import ui from 'universal/styles/ui'
import {TaskServiceEnum} from 'universal/types/graphql'

const iconLookup = {
  github: GitHubSVG,
  jira: JiraSVG
}

const WatermarkBlock = styled('div')({
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  textAlign: 'center',
  top: 0,
  verticalAlign: 'middle',
  opacity: 0.2,
  zIndex: ui.ziMenu - 2,
  '& svg': {
    height: 120,
    width: 120,
    position: 'absolute',
    bottom: -24,
    right: -24
  }
})

interface Props {
  service: TaskServiceEnum | undefined
}
const TaskWatermark = (props: Props) => {
  const {service} = props
  if (!service) return null
  const SVG = iconLookup[service]
  return (
    <WatermarkBlock>
      <SVG />
    </WatermarkBlock>
  )
}

export default TaskWatermark
