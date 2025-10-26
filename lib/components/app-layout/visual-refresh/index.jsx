import {forwardRef, memo} from 'react'
import {AppLayoutInternalsProvider} from './context'
import Background from './background'
import Breadcrumbs from './breadcrumbs'
import Drawers from './drawers'
import Header from './header'
import Layout from './layout'
import Main from './main'
import MobileToolbar from './mobile-toolbar'
import Navigation from './navigation'
import Notifications from './notifications'
import SplitPanel from './split-panel'
import Tools from './tools'

const AppLayout = memo(
  forwardRef((props, ref) => (
    <AppLayoutInternalsProvider {...props} ref={ref}>
      <SplitPanel>
        <Layout>
          <Background/>
          <Navigation/>
          <MobileToolbar/>
          <Notifications/>
          <Breadcrumbs/>
          <Header/>
          <Main/>
          <SplitPanel.Bottom />
          <Tools>
            <SplitPanel.Side />
          </Tools>
          <Drawers/>
        </Layout>
      </SplitPanel>
    </AppLayoutInternalsProvider>
  ))
)

export {
  AppLayout as default
}
