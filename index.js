const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('combined'));

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const user_id = 'shreyansh_gupta_30032004'; // Replace with dynamic values if needed
  const email = 'sa0258@srmist.edu.in'; // Replace with actual logic
  const roll_number = 'RA2111003011225'; // Replace with actual logic

  let numbers = [];
  let alphabets = [];
  let highest_alphabet = [];

  if (data) {
    data.forEach(item => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else {
        alphabets.push(item);
      }
    });

    if (alphabets.length > 0) {
      highest_alphabet = [alphabets.reduce((max, char) => max.toLowerCase() > char.toLowerCase() ? max : char)];
    }
  }

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.get('/', (req, res) => { res.send('Shrey here!'); });  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
