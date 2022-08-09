import React from 'react';
import { Link } from 'react-router-dom';
import SuccessFields from '../components/SuccessFields';

const Success = ({ values, setValues }) => {
  const handleOnClick = () => {
    setValues({
      name: '',
      lastname: '',
      email: '',
      phone: '',
      location: { lat: '', lng: '' },
      service: '',
      comment: ''
    });
  };

  return (
    <>
      <div
        className='container-fluid d-flex justify-content-center p-5'
        style={{ minHeight: '100vh' }}
      >
        <div className='card col-md-4'>
          <div className='card-body'>
            <h2 className='card-title text-center pt-3'>
              ¡Solicitud Exitosa!
            </h2>
            <p className='card-text text-center'>
              ¡Gracias por preferirnos, pronto le contactaremos!
            </p>
            <SuccessFields values={values} />
          </div>
          <Link
            to={'/'}
            onClick={handleOnClick}
            className='btn btn-primary col-md-4 m-3'
          >
            Aceptar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
