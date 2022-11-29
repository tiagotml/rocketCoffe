import * as C from './AppStyles'
import { Header } from './components/Header'
import { Main } from './components/Main'
const App = () => {
  return (
    <div>
      <C.Container>
        <Header />
        <Main title1="Great Coffe" title2="<Great Code />" />
        <C.blurRight />
        <C.blurLeft />
      </C.Container>
    </div>
  )
}
export default App;