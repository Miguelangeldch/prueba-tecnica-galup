import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FormFields from './FormFields';
import useFetch from '../hooks/useFetch';
import { postRegister } from '../utils/postRegister';
import { alertDuplicatedEmailPhone } from '../utils/alertDuplicatedEmailPhone';

const Form = ({ setValues, values }) => {
  const navigate = useNavigate();
  const { data } = useFetch('/service');

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      name: name,
      lastname: lastName,
      email: email,
      phone: phone,
      location: {
        lat: lat,
        lng: long,
      },
      service: service,
      comment: comment,
    }));
  }, [comment, email, lastName, lat, long, name, phone, service, setValues]);

  const onSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      const data = await postRegister('/register', values);
      if (data.error) {
        alertDuplicatedEmailPhone();
      } else {
        navigate('/success', { replace: true });
      }
    };
    getData();
  };

  return (
    <>
      <form className='row g-2' onSubmit={onSubmit}>
        <FormFields
          label={'Nombre *'}
          id={'name'}
          type={'text'}
          placeholder={'Nombre'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormFields
          label={'Apellido'}
          id={'lastName'}
          type={'text'}
          placeholder={'Apellido'}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormFields
          label={'Correo Electrónico *'}
          id={'email'}
          type={'email'}
          placeholder={'xxx@xxxx.com'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormFields
          label={'Teléfono *'}
          id={'phone'}
          type={'tel'}
          placeholder={'xxxx-xxx-xxxx'}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label className='form-label'>
          Seleccione una ubicación en el mapa o escriba las coordenadas
          precisas:
        </label>
        <FormFields
          label={'Latitud *'}
          id={'lat'}
          type={'number'}
          placeholder={'Latitud'}
          value={values.location.lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
        <FormFields
          label={'Longitud *'}
          id={'long'}
          type={'number'}
          placeholder={'Longitud'}
          value={values.location.lng}
          onChange={(e) => setLong(e.target.value)}
          required
        />

        <div className='form-floating mb-3 col-md-8'>
          <select
            id='service'
            className='form-select'
            value={service}
            onChange={(e) => setService(e.target.value)}
            // required
          >
            <option value=''>Seleccione el servicio *</option>
            {data.map((service) => {
              return (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              );
            })}
          </select>
          <label htmlFor='service' className='form-label'>
            Servicio:
          </label>
        </div>
        <div className='form-floating mb-3'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <label htmlFor='floatingTextarea'>Comentarios:</label>
        </div>
        <div className='text-center'>
          <button type='submit' className='btn btn-primary col-md-3 mb-4'>
            Enviar Solicitud
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
