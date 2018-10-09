import axios from "axios";
export const reserve = async data => {
  try {
    await axios.post("http://localhost:3000/reservation", data);
  } catch (e) {
    console.log(e);
  }
};
