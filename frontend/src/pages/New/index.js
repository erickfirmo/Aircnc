import React, { useState } from 'react';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');



    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">EMPRESA *</label>
            <input
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}        
            />

            <label htmlFor="techs">TECNOLOGIAS *</label>
            <input
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}        
            />

        </form>
        
    )
}