import app from "./server";

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
