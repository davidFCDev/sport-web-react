import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Form = () => {
    const [accepted, setAccepted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, surname, email, phone } = event.target;
        if (!name.value || !surname.value || !email.value || !phone.value) {
            toast.error('Por favor, completa todos los campos requeridos');
            return;
        }
        if (!accepted) {
            toast.error('Debes aceptar la política de privacidad primero!');
            return;
        }
        setIsSubmitting(true);
        try {
            const response = await axios.post('', {
                name: event.target.name.value,
                surname: event.target.surname.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
            });
            toast.success('Enviado correctamente')
            console.log('Formulario enviado', response.data);
            event.target.name.value = '';
            event.target.surname.value = '';
            event.target.email.value = '';
            event.target.phone.value = '';
            setAccepted(false);
        } catch (error) {
            console.error('Error al enviar formulario', error);
        }
        setIsSubmitting(false);
    }

    const handleCheckboxChange = () => {
        setAccepted(!accepted);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="form flex flex-col gap-1 md:gap-3"
        >
            <h2 className="text-lg md:text-xl font-bold text-center">Ven a probar!</h2>
            <input
                type="text"
                placeholder="Nombre"
                name="name"
                className="border px-2 py-1 md:px-4 md:py-3 text-[13px] md:text-[15px]"
            />
            <input
                type="text"
                placeholder="Apellido"
                name="surname"
                className="border px-2 py-1 md:px-4 md:py-3 text-[13px] md:text-[15px]"
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="border px-2 py-1 md:px-4 md:py-3 text-[13px] md:text-[15px]"
            />
            <input
                type="text"
                placeholder="Teléfono"
                name="phone"
                className="border px-2 py-1 md:px-4 md:py-3 text-[13px] md:text-[15px]"
            />
            <div className="flex items-center gap-1">
                <input 
                    type="checkbox" 
                    checked={accepted}
                    onChange={handleCheckboxChange}
                    />
                <Link
                to={'/privacity'}
                className="text-[14px] tracking-tight font-semibold hover:underline"
                >
                    <span className='text-[9px] md:text-[15px]'>Acepto política de privacidad</span>
                </Link>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="custom-btn btn-1"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    )
}

export default Form
