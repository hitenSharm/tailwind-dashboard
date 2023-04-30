import axios from "axios";

const link =
  "http://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=100&max=1000&count=5";

export const getNumbers = async () => {
  try {
    let res = await axios.get(link);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
