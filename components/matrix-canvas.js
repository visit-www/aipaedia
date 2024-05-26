const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join('1').split('');

const draw = () => {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = '#0F0';
	ctx.font = '16pt monospace';

	letters.map((y, index) => {
		const text = String.fromCharCode(65 + Math.random() * 33);
		const x = index * 20;
		ctx.fillText(text, x, y);

		letters[index] = y > canvas.height + Math.random() * 1e4 ? 0 : y + 20;
	});
};

setInterval(draw, 50);
