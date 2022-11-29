import * as C from './styles'
type Props = {
    title1: string,
    title2: string
}
export const Main = ({ title1, title2 }: Props) => {
    return (
        <div>
            <C.Container>
                <h1>{title1}</h1>
                <h2>{title2}</h2>
            </C.Container>

        </div>
    )
}