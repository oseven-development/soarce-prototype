/** @format */

export interface IIcon {
  color?: any
  fontSize?: size
  style?: any
}
export type defColor = 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled' | undefined
type size = 'inherit' | 'small' | 'default' | 'large' | undefined
export enum EStandardColor {
  'inherit',
  'primary',
  'secondary',
  'action',
  'error',
  'disabled',
}
