const btn = document
  .getElementById('btn')
  .addEventListener('click', makeRequest);

async function makeRequest() {
  const memberName = document.getElementById('input').value;
  try {
    const res = await fetch(
      `https://possm-api.herokuapp.com/api/${memberName}`
    );

    const data = await res.json();

    console.log(data);

    document.getElementById('instrument').innerText = data.instrument;
    document.getElementById('img').src = data.image;
  } catch (error) {
    console.log(error);
  }
}
console.log('hello');
