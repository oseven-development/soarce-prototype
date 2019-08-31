/** @format */

export interface IFormElements {
  id: string
  label: string
  value: string | any
  type: 'string' | 'number'
  category: 'input' | 'select'
  values?: any
  required?: boolean
}
