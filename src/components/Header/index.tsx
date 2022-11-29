import * as C from './styles'
import Logo from '../../assets/logo.svg'
export const Header = () => {
    return (
        <div>
            <C.Container>
                <img src={Logo} alt="Logo" />

                <C.Menu>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Recompensas</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Lojas</a></li>
                    </ul>
                </C.Menu>
            <C.Button>
                <a href="#">Pegar meu Café</a>
            </C.Button>
            </C.Container>
        </div>
    )
}