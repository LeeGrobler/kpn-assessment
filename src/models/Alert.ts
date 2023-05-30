export interface Alert {
  visible?: boolean
  title?: string
  message: string
  type?: AlertTypes
  duration?: number
}

export type AlertTypes = 'success' | 'info' | 'warning' | 'error'
