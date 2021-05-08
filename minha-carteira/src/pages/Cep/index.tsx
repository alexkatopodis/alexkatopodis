import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Cep: React.FC = () => {

    const [cep, setCep] = useState<any>('');

    const getCep = async () => {
        const resultado = await axios.get('https://viacep.com.br/ws/07021001/json/')
        if (resultado.data !== undefined) {
            setCep(resultado.data)
        } else {
            alert('Não foi possível encontrar o cep')
        }
    }

    useEffect(() => {
        if (cep === '') getCep()
    }, [])

    console.log(cep);



    return (
        cep !== '' ? <div>
            <h5>
                rua: {cep.logradouro}
            </h5>
        </div> : <div>Sem Valor</div>

    );
}

export default Cep;
