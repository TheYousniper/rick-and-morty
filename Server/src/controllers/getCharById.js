// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({ name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };
//       return res
//         .writeHead(200, { "Content-type": "aplication/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch(error => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };

// module.exports = {
//   getCharById,
// };

const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw Error(`Missing character data with ID: ${id}`);
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };
    return res.status(200).json(character);
  } catch (error) {
    error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }
};
module.exports = { getCharById };
