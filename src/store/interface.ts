import { defineStore } from 'pinia'
import { Alert } from '@/models/Alert'

export const useInterfaceStore = defineStore('interface', {
  state: () => ({
    loading: false,
    alertCfg: {
      visible: false,
      title: '',
      message: '',
      type: 'error',
    } as Alert,
  }),

  actions: {
    toggleLoading(value: boolean) {
      this.loading = value
    },

    alert(cfg: Alert) {
      this.alertCfg = {
        visible: true,
        title: cfg.title || 'Alert',
        message: cfg.message,
        type: cfg.type || 'error',
      }

      setTimeout(() => {
        this.alertCfg = {
          visible: false,
          title: '',
          message: '',
        }
      }, cfg.duration || 5000)
    },
  },
})
