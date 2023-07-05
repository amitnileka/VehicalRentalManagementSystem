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
  MDBCheckbox,
  MDBTabsLink,
  MDBCardLink,
  MDBNavbarLink,
  MDBTabs,
  MDBTabsItem,
  MDBCardImage
}
from 'mdb-react-ui-kit';
import { Button } from 'reactstrap';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const navigate= useNavigate();

  return (
    <MDBContainer fluid>
        


      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>

              
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

            


              <button className="LoginRegisterButton text-white btn-lg mb-3">Login</button>
              
              <a className="small text-muted mb-3" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register" style={{color: '#393f81'}}>Register here</a></p>

              <Link to={'/register'}>My Link</Link>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>


  );
}

export default Login;