import React from 'react';

import api from './api';


const backendUrl = 'http://localhost:8008'; 
api.get('/numbers')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
