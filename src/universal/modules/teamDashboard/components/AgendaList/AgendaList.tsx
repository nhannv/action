import {AgendaList_team} from '__generated__/AgendaList_team.graphql'
import React, {useCallback, useMemo} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
// import SexyScrollbar from 'universal/components/Dashboard/SexyScrollbar'
import styled from 'react-emotion'
import {createFragmentContainer, graphql} from 'react-relay'
import ScrollableBlock from 'universal/components/ScrollableBlock'
import {useGotoStageId} from 'universal/hooks/useMeeting'
import useAtmosphere from 'universal/hooks/useAtmosphere'
import AgendaItem from 'universal/modules/teamDashboard/components/AgendaItem/AgendaItem'
import AgendaListEmptyState from 'universal/modules/teamDashboard/components/AgendaList/AgendaListEmptyState'
import UpdateAgendaItemMutation from 'universal/mutations/UpdateAgendaItemMutation'
import {navItemRaised} from 'universal/styles/elevation'
import {AGENDA_ITEM, SORT_STEP} from 'universal/utils/constants'
import dndNoise from 'universal/utils/dndNoise'

const AgendaListRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 3.625rem)',
  width: '100%'
})

const DraggableAgendaItem = styled('div')(({isDragging}: {isDragging: boolean}) => ({
  boxShadow: isDragging ? navItemRaised : undefined
}))

interface Props {
  gotoStageId: ReturnType<typeof useGotoStageId> | undefined
  team: AgendaList_team
}

const AgendaList = (props: Props) => {
  const atmosphere = useAtmosphere()
  const {gotoStageId, team} = props
  const {contentFilter, agendaItems, newMeeting} = team
  const filteredAgendaItems = useMemo(() => {
    return contentFilter
      ? agendaItems.filter(({content}) => content.match(contentFilter))
      : agendaItems
  }, [contentFilter, agendaItems])

  const onDragEnd = useCallback(
    (result) => {
      const {source, destination} = result
      if (
        !destination ||
        destination.droppableId !== AGENDA_ITEM ||
        source.droppableId !== AGENDA_ITEM ||
        destination.index === source.index
      ) {
        return
      }
      const sourceItem = agendaItems[source.index]
      const destinationItem = agendaItems[destination.index]

      let sortOrder
      if (destination.index === 0) {
        sortOrder = destinationItem.sortOrder - SORT_STEP + dndNoise()
      } else if (destination.index === agendaItems.length - 1) {
        sortOrder = destinationItem.sortOrder + SORT_STEP + dndNoise()
      } else {
        const offset = source.index > destination.index ? -1 : 1
        sortOrder =
          (agendaItems[destination.index + offset].sortOrder + destinationItem.sortOrder) / 2 +
          dndNoise()
      }
      UpdateAgendaItemMutation(atmosphere, {
        updatedAgendaItem: {id: sourceItem.id, sortOrder}
      })
    },
    [filteredAgendaItems]
  )

  if (filteredAgendaItems.length === 0) {
    return <AgendaListEmptyState isDashboard={!newMeeting} />
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AgendaListRoot>
        <ScrollableBlock>
          <Droppable droppableId={AGENDA_ITEM}>
            {(provided) => {
              return (
                <div ref={provided.innerRef}>
                  {filteredAgendaItems.map((item, idx) => {
                    return (
                      <Draggable key={item.id} draggableId={item.id} index={idx}>
                        {(dragProvided, dragSnapshot) => {
                          return (
                            <DraggableAgendaItem
                              isDragging={dragSnapshot.isDragging}
                              innerRef={dragProvided.innerRef}
                              {...dragProvided.draggableProps}
                              {...dragProvided.dragHandleProps}
                            >
                              <AgendaItem
                                key={item.id}
                                agendaItem={item}
                                agendaLength={filteredAgendaItems.length}
                                gotoStageId={gotoStageId}
                                idx={agendaItems.findIndex((agendaItem) => agendaItem === item)}
                                isDragging={dragSnapshot.isDragging}
                                newMeeting={newMeeting}
                              />
                            </DraggableAgendaItem>
                          )
                        }}
                      </Draggable>
                    )
                  })}
                </div>
              )
            }}
          </Droppable>
        </ScrollableBlock>
      </AgendaListRoot>
    </DragDropContext>
  )
}

export default createFragmentContainer(
  AgendaList,
  graphql`
    fragment AgendaList_team on Team {
      contentFilter
      agendaItems {
        id
        content
        # need this for the DnD
        sortOrder
        ...AgendaItem_agendaItem
      }
      newMeeting {
        ...AgendaItem_newMeeting
        id
      }
    }
  `
)

// <SexyScrollbar color='rgba(0, 0, 0, 0.3)' activeColor='rgba(0, 0, 0, 0.5)'>
//  {(scrollRef) => {
//    return (
//      <div ref={scrollRef}>
//        {/* wrap filteredAgendaItems here */}
//      </div>
//    )
//  }}
// </SexyScrollbar>
