import { useNavigate } from 'react-router-dom';
import FormFields from './FormFields';
import useFetch from '../hooks/useFetch';
import { postRegister } from '../utils/postRegister';
import { alertMessage } from '../utils/alertMessage';
import getDate from '../utils/getDate';

const Form = ({ setValues, values }) => {
  const navigate = useNavigate();
  const { data } = useFetch('/service');

  const onSubmit = (e) => {
    e.preventDefault();
    const date = getDate();
    setValues({...values, date})

    const postResult = async () => {
      const result = await postRegister('/register', { ...values, date });
      const error = result.error
      if (error) {
        error.error.code
          ? alertMessage(
              'El correo electrónico o número de teléfono ya se encuentra registrado'
            )
          : alertMessage(
              'Los campos teléfono, latitud y longitud, deben ser númericos.'
            );
      } else {
        console.log(Object.values(result.data));
        navigate('/success', { replace: true });
      }
    };

    postResult();
  };

  return (
    <>
      <form className='row g-2' onSubmit={onSubmit}>
        <FormFields
          label={'Nombre *'}
          id={'name'}
          type={'text'}
          placeholder={'Nombre'}
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
        />
        <FormFields
          label={'Apellido'}
          id={'lastname'}
          type={'text'}
          placeholder={'Apellido'}
          value={values.lastname}
          onChange={(e) => setValues({ ...values, lastname: e.target.value })}
        />
        <FormFields
          label={'Correo Electrónico *'}
          id={'email'}
          type={'email'}
          placeholder={'xxx@xxxx.com'}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
        <FormFields
          label={'Teléfono *'}
          id={'phone'}
          type={'tel'}
          placeholder={'xxxx-xxx-xxxx'}
          value={values.phone}
          maxLength={11}
          minLength={11}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
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
          onChange={(e) =>
            setValues({ ...values, location: { lat: e.target.value } })
          }
          required
        />
        <FormFields
          label={'Longitud *'}
          id={'lng'}
          type={'number'}
          placeholder={'Longitud'}
          value={values.location.lng}
          onChange={(e) =>
            setValues({ ...values, location: { lng: e.target.value } })
          }
          required
        />

        <div className='form-floating mb-3 col-md-8'>
          <select
            id='service'
            className='form-select'
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
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
            value={values.comment}
            onChange={(e) => setValues({ ...values, comment: e.target.value })}
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
