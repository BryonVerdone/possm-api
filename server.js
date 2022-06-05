const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());

const bandMembers = {
  earl: {
    age: 40,
    instrument: 'guiarr/vocals',
  },
  jeremy: {
    age: 29,
    instrument: 'guiarr/vocals',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:memberName', (req, res) => {
  const membersName = req.params.memberName.toLowerCase();
  if (bandMembers[membersName]) {
    res.json(bandMembers[membersName]);
  } else {
    console.log('not in band');
  }
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
