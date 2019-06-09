import { ExpressAdapter } from './Adapter/ExpressAdapter'
import { RouterExpressAdapter } from './Adapter/RouterExpressAdapter'
import { PluginAdapter } from './Adapter/PluginAdapter'
import { Container } from 'inversify'
import 'reflect-metadata'
import { Server, Router, Plugins, ServerType, PluginsType, RouterType } from 'server-port'

export default (container: Container): void => {
  container.bind<Server>(ServerType).to(ExpressAdapter)
  container.bind<Plugins>(PluginsType).to(PluginAdapter)
  container.bind<Router>(RouterType).to(RouterExpressAdapter)
}

export { ServerType, PluginsType, RouterType, ExpressAdapter, RouterExpressAdapter, PluginAdapter }
