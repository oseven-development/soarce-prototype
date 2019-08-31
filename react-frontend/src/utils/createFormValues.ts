/** @format */

export const createFormValues = (formValues: any, values: Object) => {
  return Object.entries(values)
    .map((e: any) => {
      return {id: e[0], value: e[1]}
    })
    .map((obj: any) => {
      return {...formValues[formValues.map((e: any) => e.id).indexOf(obj.id)], ...obj}
    })
}
