import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: "https://african-marketplace-ttwebpt-92.herokuapp.com/",
    headers: {
      Authorization: token,
    }

  })
}