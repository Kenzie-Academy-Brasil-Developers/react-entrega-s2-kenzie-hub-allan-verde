import imgCell from '../../assets/img/smartphone.svg'
import imgMail from '../../assets/img/mail.svg'

import { Container } from './styles.js'

const CardContact = ( { item, cor='green' } ) => {

    const imgSvg = cor !== 'green' ? imgCell : imgMail

    return (
        <Container cor={cor} >
            <div className='fig'>
                <img src={imgSvg} alt='svg'/>
            </div>

            <div className='info' >
                <h4>Contact</h4>
                <p>{item    }</p>
            </div>
        </Container>
    )
}

export default CardContact