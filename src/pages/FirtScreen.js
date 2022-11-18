import React from 'react'
import { Formik, ErrorMessage } from "formik";
import "../style/App.css"
import { useNavigate } from 'react-router-dom';
import TypeError from '../Components/TypeError';



const FirtScreen = () => {
    const Navigate = useNavigate();
    const idTicket = Date.now()
    const handleSubmit = (values) => {
        let getUsuarios = []
        if (localStorage.getItem("@storage_user")) {
            getUsuarios = JSON.parse(localStorage.getItem('@storage_user'));
            getUsuarios.push(values);

            localStorage.setItem('@storage_user', JSON.stringify(getUsuarios));
            Navigate('/home');
            return
        }
        getUsuarios.push(values);
        localStorage.setItem('@storage_user', JSON.stringify(getUsuarios));

        Navigate('/home')
    }
    return (
        <Formik
            initialValues={{ fullName: '', address: '', tell: '', razon: '', ticket: idTicket }}
            onSubmit={values => handleSubmit(values)}
            validate={values => {
                const errors = {};
                if (!values.fullName) {
                    errors.fullName = 'Escribe tu nombre';
                } else if (!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(values.fullName)) {
                    errors.fullName = 'Primera letra mayuscula';
                }

                if (!values.address) {
                    errors.address = 'Escribe tu direccion';
                }

                if (!values.tell) {
                    errors.tell = 'Escribe tu telefono';
                }
                if (!values.razon) {
                    errors.razon = 'Escribe tu caso';
                }


                return errors;
            }}>
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <div className="formConatiner d-flex justify-content-center align-items-center">
                    <form className="w-50 form" onSubmit={handleSubmit}>
                        <h2 className="text-center font-primary">Has tu gestión</h2>
                        <div className="mb-3">
                            <label className="form-label font-main">Nombre Completo</label>
                            <input
                                className="form-control  inputDesk"
                                name="fullName"
                                type='text'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.fullName}
                            />
                            <ErrorMessage name="fullName" component={() => <TypeError msg={errors.fullName} />} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-main">Direccion</label>
                            <input
                                className="form-control inputDesk"
                                name="address"
                                type='text'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                            />
                            <ErrorMessage name="address" component={() => <TypeError msg={errors.address} />} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-main">Telefono</label>
                            <input
                                className="form-control  inputDesk"
                                name="tell"
                                type='number'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.tell}
                            />
                            <ErrorMessage name="tell" component={() => <TypeError msg={errors.tell} />} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-main">Caso:</label>
                            <input
                                className="form-control  inputDesk"
                                name="razon"
                                type='text'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.razon}
                            />
                            <ErrorMessage name="razon" component={() => <TypeError msg={errors.razon} />} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-main">N de ticket</label>
                            <input
                                className="form-control  inputDesk"
                                name="ticket"
                                type='text'
                                onChange={handleChange}
                                value={idTicket}
                                readOnly
                                disabled
                            />

                        </div>
                        <button type="submit" className="btn btn-primary w-100 font-main">Reportar</button>
                        <button className="btn btn-info w-100 font-main mt-2" onClick={() => Navigate('/home')}>Ver casos</button>
                    </form>
                </div>

            )}
        </Formik>
    )
}
export default FirtScreen
