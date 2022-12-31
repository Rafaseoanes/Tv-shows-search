import { Formik, Form, Field } from 'formik'
import React from 'react'
import Results from './Results'


function Search() {

    const searchShows = (value) => {
        console.log(value)
    }

  return (
    <div>
        <Formik
        initialValues={{
            showName: ''
        }}
        onSubmit = { searchShows }
        >
            <Form>
                <Field name='showName' type='text'/>
                <button type='submit' >Search</button>
            </Form>
        </Formik>
        
        <Results />
    </div>
  )
}

export default Search