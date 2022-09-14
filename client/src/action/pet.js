import axios from "axios";
// import { useParams } from "react-router-dom";

// let params = useParams();

export const createPet = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/pets/create-pet`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const userPets = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/pets/pets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allPets = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/pets/allpets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deletePet = async (token, petId) =>
  await axios.delete(`${process.env.REACT_APP_API}/pets/delete-pet/${petId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const read = async (petId, token) =>
  await axios.get(`${process.env.REACT_APP_API}/pets/pet/${petId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const updatePet = async (token, data, petId) =>
  await axios.put(
    `${process.env.REACT_APP_API}/pets/update-pet/${petId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
