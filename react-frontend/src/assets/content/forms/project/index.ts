/** @format */
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import * as queries from '../../../../api/amplify/graphql/queries'
import * as Yup from 'yup' // for everything

export const ProjectValidationSchema = Yup.object({
  name: Yup.string('Name des Projekt').required('Name ist erforderlich'),
  description: Yup.string('Beschreibung eingeben').required('Beschreibung ist erforderlich'),
  startDate: Yup.date()
    .label('StartDatum eingeben')
    .required('Startdatum ist erforderlich'),
  endDate: Yup.date()
    .label('Enddatum eingeben')
    .required('Enddatum ist erforderlich'),
  location: Yup.string('Location eingeben').required('Location ist erforderlich'),
  promoter: Yup.string('Promoter eingeben').required('Promoter ist erforderlich'),
})
export const projectValues = [
  {id: 'name', label: 'Name', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {id: 'description', label: 'Beschreibung', value: '', type: 'string', category: 'input', required: true, stepper: 1},
  {
    id: 'startDate',
    label: 'Startdatum',
    value: new Date().toLocaleDateString(),
    type: 'date',
    category: 'date',
    required: true,
    stepper: 1,
  },
  {
    id: 'endDate',
    label: 'Enddatum',
    value: new Date().toLocaleDateString(),
    type: 'date',
    category: 'date',
    required: true,
    stepper: 1,
  },
  {
    id: 'location',
    label: 'Location auswählen',
    values: async () => {
      const res = await API.graphql(graphqlOperation(queries.listLocations))
      return res.data.listLocations.items.map((loc: any) => {
        return {label: loc.name, value: loc.id}
      })
    },
    category: 'select',
    required: true,
    stepper: 2,
  },
  {
    id: 'promoter',
    label: 'Promoter auswählen',
    values: async () => {
      const res = await API.graphql(graphqlOperation(queries.listPromoters))
      console.log(res)
      return res.data.listPromoters.items.map((loc: any) => {
        return {label: loc.name, value: loc.id}
      })
    },
    category: 'select',
    required: true,
    stepper: 2,
  },
]
