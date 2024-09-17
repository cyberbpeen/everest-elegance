import app from "./server";

app.listen(process.env.PORT || 4000, () =>
  console.log(`listening from port ${process.env.PORT || 4000}`)
);
