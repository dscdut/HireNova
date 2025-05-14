import useRoutesElements from '@/hooks/useRouterElement'
import { useScrollToTop } from '@/hooks/useScrollToTop'

function App() {
  const routerDom = useRoutesElements()
  useScrollToTop()

  return <>{routerDom}</>
}

export default App
