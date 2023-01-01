import React, {useState} from 'react'
import Results from './Results'
import './Search.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'


function Search() {

    const [data, setData] = useState([])

        // Fetch data from API
    const searchShows = async (value) => {
        try {
            let answer = await fetch(`https://api.tvmaze.com/search/shows?q=${value.showName}`)
            let showsInfo = await answer.json()
            console.log(showsInfo)
            setData(showsInfo)
            
        } catch (error) {
            alert('Please try again')
        }
    }

         //Form validation
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
            <Form className='searchForm'>
                <Field className='textField' name='showName' type='text'/>
                <button className='submitButton' type='submit' >Search</button>
                <div className="break"></div>
                <div className='errorMessage'>
                <ErrorMessage name='showName'  />
                </div>
            </Form>
        </Formik>
        <Results data={ data } />
    </div>
  )
}

export default Search