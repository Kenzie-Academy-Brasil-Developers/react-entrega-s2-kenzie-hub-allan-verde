import { Container } from './styles.js'
import imgJob from '../../assets/img/git-pull-request.svg'

const CardJob = ( { item } ) => {
    return (
        <Container key={item.job} >
            <div className='card__img'>
                <img src={imgJob} alt='svg'/>
            </div>
            <div className='card__descript'>
                <h3>{item.title}</h3>
                <h4>{item.description}</h4>
            </div>
        </Container>
    )
}

export default CardJob