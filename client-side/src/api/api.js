import request from "superagent";

const url = 'http://localhost:5000/chatgpt'

export const getFunction = async () => {
  try {
    const res = await request.post(url, "the text");
    if (res.ok) {
      return res.body;
    } else {
      throw new Error(`Error fetching data: ${res.text}`);
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

