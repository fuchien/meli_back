const app = require('./src/server');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server running on port ---> ${PORT}`);
});
