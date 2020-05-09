
const button = document.getElementById('loadData');
button.addEventListener('click', function(e) {
  const getData = async url => {
				  try {
				    const response = await axios.get(url);
				    const data = response.data;
				    console.log(data);
				  } catch (error) {
				    console.log(error);
				  }
				};
				getData(url);
});