
const FULL_NAME = "anuj_kumar_singh";
const DOB = "22122003";
const EMAIL = "anuj145.be22@chitkara.edu.in";
const ROLL_NO = "2210990145";


const isNumeric = (str) => /^[0-9]+$/.test(str);


const isAlphabet = (str) => /^[a-zA-Z]+$/.test(str);


const getEvenNumbers = (data) => {
  return data.filter((item) => isNumeric(item) && parseInt(item) % 2 === 0);
};


const getOddNumbers = (data) => {
  return data.filter((item) => isNumeric(item) && parseInt(item) % 2 !== 0);
};


const getAlphabets = (data) => {
  return data.filter((item) => isAlphabet(item)).map((char) => char.toUpperCase());
};


const getSpecialChars = (data) => {
  return data.filter((item) => !isNumeric(item) && !isAlphabet(item));
};


const calculateSum = (data) => {
  return data
    .filter((item) => isNumeric(item))
    .reduce((acc, curr) => acc + parseInt(curr), 0)
    .toString();
};


const getConcatString = (alphabets) => {
  const reversed = alphabets.join("").split("").reverse();
  return reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
};



const handleBfhl = (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: "Invalid input" });
    }

    const evenNumbers = getEvenNumbers(data);
    const oddNumbers = getOddNumbers(data);
    const alphabets = getAlphabets(data);
    const specialChars = getSpecialChars(data);
    const sum = calculateSum(data);
    const concatString = getConcatString(alphabets);

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NO,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum,
      concat_string: concatString,
    });
  } catch (error) {
    return res.status(500).json({ is_success: false, error: error.message });
  }
};



module.exports = {
  handleBfhl,
  getEvenNumbers,
  getOddNumbers,
  getAlphabets,
  getSpecialChars,
  calculateSum,
  getConcatString,
};
