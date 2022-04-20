const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Kirill Kaprizov is a legend!');
});

app.get('/contact', (req, res) => {
	res.send('Contact me at: adam@gmail.com');
});

app.get('/hobbies', (req, res) => {
	res.send('<ul><li>Hockey</li><li>Code</li><li>Working out</li></ul>');
});

app.get('/about', (req, res) => {
	res.send(
		'<p>This is a little bit about me and who I am. I love Hockey and Weightlifting. My role models include: Mateusz Kieliszkowski, Kirill Kaprizov, Connor McDavind, and Alexander Ovechkin.'
	);
});

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});
