import Notifications from './Notifications.vue'
import { events }    from './events'

const Notify = {
  install(app, args = {}) {
    console.log('test av index.js')
    if (this.installed) {
      return
    }

    this.installed = true
    this.params = args

    app.component(args.componentName || 'notifications', Notifications)

    const notify = (params) => {
      console.log("notify")
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

    app['$' + name] = notify
    app[name] = notify
  }
}

export default Notify
