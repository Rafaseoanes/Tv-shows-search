import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import Results from './Results'


function Search() {

    const searchShows = async (value) => {
   
        try {
            let answer = await fetch(`https://api.tvmaze.com/search/shows?q=${value.showName}`)
            let data = await answer.json()
            return data
            
        } catch (error) {
            alert('Please try again')
        }
    }

    const validations = (value) => {
        const error = {}
        if(value.showName.length < 1) error.showName = 'Please enter a Tv show name!'
        return error;
    }

  return (
    <div>
        <Formik
        initialValues={{
            showName: ''
        }}
        onSubmit = { searchShows }
        validate = { validations }
        >
            <Form>
                <Field name='showName' type='text'/>
                <ErrorMessage name='showName' />
                <button type='submit' >Search</button>
            </Form>
        </Formik>
        
        <Results />
    </div>
  )
}

export default Search