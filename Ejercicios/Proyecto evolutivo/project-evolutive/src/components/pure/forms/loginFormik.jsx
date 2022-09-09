import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/**
   * * Esto genera un esquema donde le decimos que queremos usar un objeto y que queremos definir ciertos campos con ciertos valores(para esto es el .shape)
   * * Luego colocamos dentro de las llaves los datos, en este caso decimos que el email sera un string de tipo email, en los parentesis posteriores a email debemos colocar el mensaje de error en caso de que la validacion resulte incorrecta.
   * * Esto es como un PropTypes pero para campos de un formulario.
   */
const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Email format is incorrect')
            .required('Email is required'),

        password: Yup.string()
            .required('Password is required')
    }
)

const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (

        <div>
            <h4>Login Form with Formik</h4>
            <Formik
                //Primero pasamos los valores de configuracion que van en forma de props. Estos son los valores iniciales y luego lo que debe pasar cuando el formulario se envie. El formik hace una especie de capa de contexto para el formulario debajo, digamos que contiene las instrucciones de configuracion. Esto nos ahorra el tener que hacer referencias a los campos, ya que el submit recibe directamente los valores del formulario que es tratado como un objeto.
                initialValues={initialCredentials}

                // Asociamos la configuracion de validacion al esquema que hemos creado con YUP
                validationSchema={loginSchema}

                // Esto hace que el envio del formulario sea asincrono, que se envien los valores y que se genere una promesa con un timeout de medio segundo donde se devuelve la respuesta. Luego se muestra una alerta con un JSON convertido a string que muestra los datos que se han colocado en el formulario.
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credential', values);
                }}
            >

                {/* Obtenemos props desde Formik. ESto nos servirá para obtener las propiedades del formulario Formik y hacer uso de ellas. Por ejemplo, los valores de los campos, saber cuando el usuario interactuo o tocó, manejar los errores, cuando el formulario se esté enviando, cuando hubiese un cambio, etc. */} {/* Tenemos dos formas, la primera es mucho mas facil y limpia. La segunda esta comentada pero la dejo para que se vea la otra alternativa */}

                {({ 
                    values,
                    touched,
                    errors,
                    isSubmitting
                 }) => (
                    <Form>
                        <label htmlFor="email">email</label>
                        <Field id="email" name="email" placeholder="Your email" type="email" />

                        {
                            errors.email && touched.email && (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password && (
                                <ErrorMessage name='password' component='div'></ErrorMessage>

                            )
                        }

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Loginformik