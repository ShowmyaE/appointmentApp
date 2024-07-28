import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './bookingForm.css'; 
import Cookies from 'js-cookie'

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  age: Yup.number().min(1, 'Must be at least 1').max(120, 'Must be 120 or less'),
  comments: Yup.string()
});

function bookingForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', company: '', phonenumber: '',domain: '', interests:'', bookingDate:'2008-11-11'  }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const jwtToken=Cookies.get('jwt_token')
        console.log('Form data submitted:', values);
        const url = 'http://localhost:4000/bookingDetail'
        const options = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                "Content-Type": "application/json"
              }

        }
        const response = await fetch(url, options)
        const data = await response.json()

        console.log("SUCCESS", data)
        // if (response.ok === true) {
        //     //this.onSubmitSucess(data.jwt_token)
        // }
        // else {
        //     this.onSubmitFailure(data.error_msg)
        // }
        // Add further logic to handle form submission (e.g., sending data to a server)
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <Field type="text" id="company" name="company" />
          <ErrorMessage name="company" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone Number:</label>
          <Field type="number" id="phonenumber" name="phonenumber" min="1" max="10" />
          <ErrorMessage name="phonenumber" component="div" className="error" />
        </div>
        <div>
            <h3>Select Your Interests:</h3>
            {['Thought Quality', 'Thought Design', 'Thought Code', 'Thought Ops'].map((interest) => (
              <div key={interest}>
                <Field
                  type="checkbox"
                  id="interests"
                  name="interests"
                  value={interest}
                />
                <label htmlFor={interest}>{interest}</label>
              </div>
              ))}
              <ErrorMessage name="interests" component="div" className="error" />
            </div>
            <div>
            <h3>Select Domain:</h3>
            {['HealthCare & Pharmacy', 'E-Commerce', 'Education', 'FinTech'].map((interest) => (
              <div key={interest}>
                <Field
                  type="checkbox"
                  id="domain"
                  name="domain"
                  value={interest}
                />
                <label htmlFor={interest}>{interest}</label>
              </div>
              ))}
              <ErrorMessage name="interests" component="div" className="error" />
            </div>
        <div class="text-align:center">
        <button type="submit">Schedule Event</button>
        </div>
      </Form>
    </Formik>
  );
}

export default bookingForm;
