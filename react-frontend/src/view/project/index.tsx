/** @format */
import React from 'react'
import {Bigbutton, CForm, Card, ContentCard} from '../../components'
import AddIcon from '@material-ui/icons/Add'
import {API, graphqlOperation} from 'aws-amplify'

import {ProjectValidationSchema, projectValues} from '../../assets/content/forms/project'
import * as mutations from '../../api/amplify/graphql/mutations'
import {createFormValues} from '../../utils/createFormValues'

const renameProp = (oldProp: string, newProp: string, {[oldProp]: old, ...others}: any) => ({
  [newProp]: old,
  ...others,
})

const ProjectView = (props: any) => {
  const {setSnackbar} = props
  const [action, setAction]: [string, any] = React.useState('default')
  const [projects, setProjects]: any = React.useState(props.data.projects)
  const [projectID, setProjectID] = React.useState(0)

  const createProject = async (values: any) => {
    const _values = renameProp('location', 'projectLocationId', values)
    await API.graphql(
      graphqlOperation(mutations.createProject, {input: {..._values, state: 'pending', promoter: [_values.promoter]}}),
    )
      .then((res: any) => {
        setProjects([...projects, res.data.createProject])
        setSnackbar({variant: 'success', message: 'Project erfolgreich erstellt', open: true})
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }
  const editProject = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.updateProject, {input: values}))
      .then(async ({data}: any) => {
        projects.splice(projects.findIndex((e: any) => e.id === data.updateProject.id), 1, data.updateProject)
        setProjects(projects)
        setSnackbar({variant: 'success', message: 'Projekt erfolgreich upgedatet', open: true})
      })
      .catch((err: any) => {
        console.log(err)
        if (err.errors) {
          setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
        }
      })
  }
  const deleteProject = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.deleteProject, {input: {id: values.id}}))
      .then((res: any) => {
        projects.splice(projects.indexOf(values), 1)
        setProjects(projects)
        setSnackbar({variant: 'success', message: 'Projekt erfolgreich gelöscht', open: true})
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }

  return (
    <React.Fragment>
      {action === 'hinzufügen' ? (
        <CForm
          title={`Projekt ${action}`}
          onSubmit={createProject}
          validationSchema={ProjectValidationSchema}
          values={projectValues}
          stepperValues={['Stammdaten des Projektes', 'Promoter & Location']}
        />
      ) : action === 'editieren' ? (
        <CForm
          title={`Projekt ${action}`}
          onSubmit={editProject}
          validationSchema={ProjectValidationSchema}
          stepperValues={['Stammdaten des Projektes', 'Promoter & Location']}
          values={createFormValues(projectValues, projects[projectID])}
        />
      ) : (
        <Bigbutton
          text={'Projekt hinzufügen'}
          icon={<AddIcon />}
          width={window.innerWidth < 640 ? '100%' : 350}
          height={window.innerWidth < 640 ? '100%' : 240}
          onClick={() => {
            setAction('hinzufügen')
          }}
        />
      )}
      {projects &&
        projects.map((project: any) => {
          return (
            <Card
              key={project.name}
              height={240}
              content={
                <ContentCard
                  title={`Projekt: ${project.name}`}
                  type="project"
                  onEdit={() => {
                    setAction('editieren')
                    setProjectID(projects.indexOf(project))
                  }}
                  onDelete={() => {
                    deleteProject(project)
                  }}
                  content={project}
                />
              }></Card>
          )
        })}

      {/* <SubSite site={subsite} /> */}
    </React.Fragment>
  )
}

export default ProjectView
