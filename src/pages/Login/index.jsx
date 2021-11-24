import { Link } from 'react-router-dom'
import api from '../../service/api'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Login() {
    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório')
    })

    const onSubmitFunction = (data) => {
        api.post('/sessions', data).then(response => {
            console.log(response)
        }).catch(err => console.log(err))
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmitFunction)} >
                <input placeholder='E-mail' {...register('email')} />
                {errors.email?.message}
                <input placeholder='Senha' {...register('password')} />
                {errors.password?.message}
                <p>Não tem uma conta? Faça seu <Link to='/signup'>cadastro</Link></p>

                <button>Enviar</button>
            </form>
        </>
    )
}

export default Login