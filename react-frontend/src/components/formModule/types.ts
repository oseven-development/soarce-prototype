/** @format */

export interface IFormElements {
  id: string
  label: string
  value: string | any
  type: 'string' | 'number' | 'date' | 'time'
  values?: any
  required?: boolean
  category?: 'input' | 'select' | 'date'
}
export interface IFormStepperElements extends IFormElements {
  stepper: number
}
export interface IFormField {
  element: IFormElements
  errors: any
  touched: any
  values: any
  change: Function
}

export interface IDatePicker extends IFormElements {
  touched: any
  errors: any
  value: Date
  onChange: Function
}
export interface ISelect {
  id: string
  label: string
  errors: any
  required: boolean
  variant?: 'standard' | 'outlined' | 'filled'
  values: Object[]
  onChange: Function
}
export interface ITextField extends IFormElements {
  touched: any
  errors: any
  value: any
  onChange: Function
}
