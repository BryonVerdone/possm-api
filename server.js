const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const bandMembers = {
  earl: {
    age: 40,
    instrument: 'guitar/vocals',
  },
  jeremy: {
    age: 29,
    instrument: 'guitar/vocals',
  },
  dave: {
    age: 32,
    instrument: 'Sync/Perc',
  },
  ben: {
    age: 32,
    instrument: 'Drums',
  },
  craig: {
    age: 40,
    instrument: 'Guitar',
  },
  bryon: {
    age: 28,
    instrument: 'Bass',
  },
  unknown: {
    age: 'unknown',
    instrument: 'unknown',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:memberName', (req, res) => {
  const membersName = req.params.memberName.toLowerCase();
  console.log(membersName);

  if (bandMembers[membersName]) {
    res.json(bandMembers[membersName]);
  } else {
    res.json(bandMembers['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`);
});
