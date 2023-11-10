

import { post } from 'axios'; 

const url = 'your_api_url'; 

const userLogin = async (props) => {
  const { email, password } = props;
  try {
    const response = await post(`${url}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(`userLogin request failed: ${error}`);
  }
};

const userRegister = async (props) => {
  const { email, first_name, surname, password, password_confirmation } = props;
  try {
    const response = await post(`${url}/register`, {
      email,
      first_name,
      surname,
      password,
      password_confirmation,
    });
    return response.data;
  } catch (error) {
    throw new Error(`userRegister request failed: ${error}`);
  }
};


const loginProps = {
  email: 'user@example.com',
  password: 'password123',
};

const registerProps = {
  email: 'user@example.com',
  first_name: 'John',
  surname: 'Doe',
  password: 'password123',
  password_confirmation: 'password123',
};

userLogin(loginProps)
  .then((data) => {
    console.log('Login successful:', data);
  })
  .catch((error) => {
    console.error('Login failed:', error.message);
  });

userRegister(registerProps)
  .then((data) => {
    console.log('Registration successful:', data);
  })
  .catch((error) => {
    console.error('Registration failed:', error.message);
  });
