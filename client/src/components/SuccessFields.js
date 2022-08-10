import React from 'react';

const SuccessFields = ({ values }) => {
  return (
    <div className='mt-5 mb-3'>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <h6> Nombre: </h6>
          {values.name} {values.lastname}
        </li>
        <li className='list-group-item'>
          <h6> Correo Electrónico: </h6>
          {values.email}
        </li>
        <li className='list-group-item'>
          <h6> Teléfono: </h6>
          {values.phone}
        </li>
        <li className='list-group-item'>
          <h6> Ubicación: </h6>{' '}
          <ul>
            <li>
              <h6>Latitud:</h6> {values.location.lat}
            </li>
            <li>
              <h6>Longitud:</h6> {values.location.lng}
            </li>
          </ul>
        </li>
        <li className='list-group-item'>
          <h6> Servicio: </h6>
          {values.service}
        </li>
        <li className='list-group-item'>
          <h6> Comentarios: </h6>
          {values.comment}
        </li>
        <li className='list-group-item'>
          <h6> Fecha: </h6>
          {values.date}
        </li>
      </ul>
    </div>
  );
};

export default SuccessFields;
