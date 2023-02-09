import React, { useState } from 'react'

const FormGroup = () => {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if(formData?.text_field === undefined || formData?.text_field.length < 3 || formData?.text_field.length > 5) {
            isValid = false;
        }   

        const selectedDate = formData?.date_field ? new Date(formData?.date_field) : undefined;
        if(selectedDate !== undefined && selectedDate > Date.now()) {
            isValid = false;
        }
        //console.log(FormData);
        console.log(isValid);
    }
    return (
        <form onSubmit={handleFormSubmit} className={'flex flex-col justify-center items-center gap-4'}>
            <div className={'flex flex-col'}>
                <label>Szöveg:</label>
                <input type="text" name={'text_field'} className={'text-black'} 
                    onChange={(e) => setFormData({...formData, text_field: e.target.value})} 
                />
            </div>
            <div className={'flex flex-col'}>
                <label>E-mail:</label>
                <input type="email" name={'email_field'} className={'text-black'} 
                    onChange={(e) => setFormData({...formData, email_field: e.target.value})}
                />
            </div>
            <div className={'flex flex-col'}>
                <label>Jelszó:</label>
                <input type="password" name={'password_field'} className={'text-black'} 
                    onChange={(e) => setFormData({...formData, password_field: e.target.value})}
                />
            </div>
            <div className={'flex flex-col'}>
                <label>Dátum:</label>
                <input type="date" name={'date_field'} className={'text-black'} 
                    onChange={(e) => setFormData({...formData, date_field: e.target.value})}
                />
            </div>
            <div className={'flex flex-col'}>
                <div className={'grid grid-cols-2 gap-2'} 
                    onChange={(e) => setFormData({...formData, radio: e.target.value})}
                >
                    <label>Rádió 1</label>
                    <input type="radio" name={'radio'} value={'radio_1'} />
                    <label>Rádió 2</label>
                    <input type="radio" name={'radio'} value={'radio_2'} />
                </div>
            </div>
            <div className={'flex flex-col'}>
                <div className={'grid grid-cols-2 gap-2'}>
                    <label>Check 1</label>
                    <input type="checkbox" name={'checkbox_1'} 
                        onChange={(e) => setFormData({...formData, checkbox_1: e.target.checked})}
                    />
                    <label>Check 2</label>
                    <input type="checkbox" name={'checkbox_2'} 
                        onChange={(e) => setFormData({...formData, checkbox_2: e.target.checked})}
                    />
                </div>
            </div>
            <div className={'flex flex-col'}>
                <select name={'select_field'} onChange={(e) => setFormData({...formData, select_field: e.target.selectedIndex})}>
                    <option value={'select_1'}>select 1</option> 
                    <option value={'select_2'}>select 2</option> 
                </select>
            </div>
            
            <button type="submit" className={'border border-white p-2'}>Form küldése</button>
        </form>
    )
}

export default FormGroup