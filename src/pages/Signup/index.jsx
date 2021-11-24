import { Link } from 'react-router-dom'
import api from '../../service/api'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Signup() {
    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),
        confirm_Password: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório'),
        name: yup.string().required('CAmpo obrigatório'),
        bio: yup.string().required('Campo obrigatório'),
        contact: yup.string().required('Campo obrigatório'),
        course_module: yup.string().required('Campo obrigatório')
    })

    const onSubmitFunction = (data) => {
        delete data.confirm_Password
        
        api.post('/users', data).then(response => {
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

                <input placeholder='Confirme sua senha' {...register('confirm_Password')} />
                {errors.confirm_Password?.message}
                
                <input placeholder='Seu nome' {...register('name')} />
                {errors.name?.message}

                <input placeholder='Bio' {...register('bio')} />
                {errors.bio?.message}

                <input placeholder='Contato' {...register('contact')} />
                {errors.contact?.message}

                <select name="Teste" placeholder='teste1' {...register('course_module')} >
                    <option>Primeiro módulo (Introdução ao Frontend)</option>
                    <option>Segundo módulo (Frontend Avançado)</option>
                    <option>Terceiro módulo (Introdução ao Backend)</option>
                    <option>Quarto módulo (Backend Avançado)</option>
                </select>
                {errors.course_module?.message}

                <button>Enviar</button>

                <p>Já possui uma conta? Faça seu <Link to='/login'>login</Link></p>
            </form>
        </>
    )
}

export default Signup