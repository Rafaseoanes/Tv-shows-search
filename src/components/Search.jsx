import React, {useState} from 'react'
import Results from './Results'
import './Search.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'


function Search() {

    const [data, setData] = useState([])


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

    const validations = (value) => {
        const error = {}
        if(value.showName.length < 1) error.showName = 'Please enter a Tv show name!'
        return error;
    }

  return (
    <div className='searchForm'>
        <Formik
        initialValues={{
            showName: ''
        }}
        onSubmit = { searchShows }
        validate = { validations }
        >
            <Form>
                <Field className='textField' name='showName' type='text'/>
                <ErrorMessage name='showName' />
                <button className='submitButton' type='submit' >Search</button>
            </Form>
        </Formik>
        <Results data={ data } />
    </div>
  )
}

export default Search