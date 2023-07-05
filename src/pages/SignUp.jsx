import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Mobile Number' id='formControlLg' type='number' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Address' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Licence Number' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' id='formControlLg' type='password' size="lg"/>
              
            
              <button className="LoginRegisterButton text-white btn-lg mb-3">Sign Up</button>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already Registered? <a href="/login" style={{color: '#393f81'}}>Login here</a></p>



            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;