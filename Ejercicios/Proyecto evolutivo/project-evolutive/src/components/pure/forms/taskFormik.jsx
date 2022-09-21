import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const taskSchema = Yup.object().shape({
          name: Yup.string()
                      .required('This field is required'),
          description: Yup.string()
                      .required('This field is required'),              
});

const TaskFormik = () => {
    const initialCredentials = {
      name: '',
      description: '',
      completed: false,
      level: LEVELS.NORMAL
    }

  return (
    <div>
      <h4>Task Form</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={taskSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2))
        }}
      >

        {({
          values,
          touched,
          errors,
          isSubmitting
        }) => (
          <Form>
            <label htmlFor="name">Name of task: </label>
            <Field id="name" name="name" placeholder="Buy milk" type="text" />

            {
              errors.name && touched.name && (
                <ErrorMessage name="name" component='div'></ErrorMessage>
              )
            }

            <label htmlFor="description">Description of task: </label>
            <Field id="description" name="description" placeholder="I am going to the market Silvine" type="text" />

            {
              errors.description && touched.description && (
                <ErrorMessage name="description" component='div'></ErrorMessage>
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

export default TaskFormik