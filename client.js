const btn = document
  .getElementById('btn')
  .addEventListener('click', makeRequest);

async function makeRequest() {
  const memberName = document.getElementById('input').value;
  try {
    const res = await fetch(`http://localhost:8000/api/${memberName}`);

    const data = await res.json();

    console.log(data);

    document.getElementById('instrument').innerText = data.instrument;
  } catch (error) {
    console.log(error);
  }
  console.log('hello');
}
