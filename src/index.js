import Notifications from './Notifications.vue'
import { events }    from './events'

const Notify = {
  install(app, args = {}) {
    if (this.installed) {
      return
    }

    this.installed = true
    this.params = args

    app.component(args.componentName || 'notifications', Notifications)

    const notify = (params) => {
      if (typeof params === 'string') {
        params = { title: '', text: params }
      }

      if (typeof params === 'object') {
        events.emit('add', params)
      }
    }

    notify.close = function (id) {
      events.emit('close', id)
    }

    const name = args.name || 'notify'

    app.config.globalProperties['$' + name] = notify
    app[name] = notify
  }
}

export default Notify
