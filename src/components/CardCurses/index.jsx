import imgBox from '../../assets/img/codesandbox.svg'
import { Container } from './styles'

const CardCurses = ( { item } ) => {
    return (
        <Container key={item.id}>
            <div className='card__img'>
                <img src={imgBox} alt='svg'/>
            </div>
            <div className='card__descript'>
                <h3>{item.title}</h3>
                <div>
                    <h4>{item.status}</h4>
                </div>
            </div>
        </Container>
    )
}

export default CardCurses