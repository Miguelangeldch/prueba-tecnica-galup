import Form from '../components/Form';
import MapView from '../components/MapView';

const Home = ({ values, setValues }) => {
  return (
    <>
      <div id='liveAlertPlaceholder'></div>
      <div
        className='container-fluid d-flex m-auto'
        style={{ minHeight: '100vh'}}
      >
        <div className='card m-auto'>
          <div className='row justify-content-center g-0'>
            <div className='col-md-6'>
              <div className='card-body'>
                <h2 className='card-title mb-5 mt-5 text-center'>
                  Solicitud de Servicio
                </h2>
                <Form setValues={setValues} values={values} />
              </div>
            </div>
            <div className='col-md-6' style={{ minHeight: '75vh' }}>
              <MapView setValues={setValues} values={values} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
