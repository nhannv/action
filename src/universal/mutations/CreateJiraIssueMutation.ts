import {commitMutation, graphql} from 'react-relay'
import {ICreateJiraIssueOnMutationArguments, TaskServiceEnum} from 'universal/types/graphql'
import makeSuggestedIntegrationId from 'universal/utils/makeSuggestedIntegrationId'
import createProxyRecord from 'universal/utils/relay/createProxyRecord'
import Atmosphere from 'universal/Atmosphere'
import {LocalHandlers} from 'universal/types/relayMutations'
import {CreateJiraIssueMutation} from '__generated__/CreateJiraIssueMutation.graphql'

graphql`
  fragment CreateJiraIssueMutation_task on CreateJiraIssuePayload {
    task {
      integration {
        service
        ... on TaskIntegrationJira {
          cloudId
          projectKey
          projectName
        }
        ...TaskIntegrationLinkIntegrationJira
      }
      updatedAt
      teamId
      userId
    }
  }
`

const mutation = graphql`
  mutation CreateJiraIssueMutation($cloudId: ID!, $taskId: ID!, $projectKey: ID!) {
    createJiraIssue(cloudId: $cloudId, taskId: $taskId, projectKey: $projectKey) {
      error {
        message
      }
      ...CreateJiraIssueMutation_task @relay(mask: false)
    }
  }
`

const CreateJiraIssueMutation = (
  atmosphere: Atmosphere,
  variables: ICreateJiraIssueOnMutationArguments,
  {onCompleted, onError}: LocalHandlers
) => {
  return commitMutation<CreateJiraIssueMutation>(atmosphere, {
    mutation,
    variables,
    updater: (store) => {
      // TODO break out into subscription & also reorder suggested items (put newest on top if exists)
      const payload = store.getRootField('createJiraIssue')
      if (!payload) return
      const task = payload.getLinkedRecord('task')
      if (!task) return
      const userId = task.getValue('userId')
      const teamId = task.getValue('teamId')
      const integration = task.getLinkedRecord('integration')
      const user = store.get(userId)
      if (!user || !integration) return
      const suggestedIntegrations = user.getLinkedRecord('suggestedIntegrations', {teamId})
      const projectKey = integration.getValue('projectKey')
      if (!suggestedIntegrations || !projectKey) return
      const items = suggestedIntegrations.getLinkedRecords('items')
      if (!items) return
      const existingIntegration = items.find(
        (item) => !!(item && item.getValue('projectKey') === projectKey)
      )
      const hasMore = suggestedIntegrations.getValue('hasMore')
      if (!existingIntegration || !hasMore) {
        const projectName = integration.getValue('projectName')
        const cloudId = integration.getValue('cloudId')
        if (!projectName || !cloudId) return
        const nextItem = {
          cloudId,
          projectKey,
          projectName,
          service: TaskServiceEnum.jira
        }
        const id = makeSuggestedIntegrationId(nextItem)
        // the fallback is likely never used
        const latestIntegration =
          store.get(id) ||
          createProxyRecord(store, 'SuggestedIntegrationJira', {
            id,
            ...nextItem
          })
        const nextSuggestedIntegrations = [latestIntegration, ...items].slice(0, hasMore ? 3 : 1)
        suggestedIntegrations.setLinkedRecords(nextSuggestedIntegrations, 'items')
        suggestedIntegrations.setValue(true, 'hasMore')
      }
    },
    optimisticUpdater: (store) => {
      const {cloudId, projectKey, taskId} = variables
      const now = new Date()
      const task = store.get(taskId)
      if (!task) return
      const optimisticIntegration = {
        service: TaskServiceEnum.jira,
        projectKey,
        cloudId,
        issueKey: '?',
        cloudName: '',
        updatedAt: now.toJSON()
      }
      const integration = createProxyRecord(store, 'TaskIntegrationJira', optimisticIntegration)
      task.setLinkedRecord(integration, 'integration')
    },
    onCompleted,
    onError
  })
}

export default CreateJiraIssueMutation
