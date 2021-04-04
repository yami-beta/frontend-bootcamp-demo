import path from "path";
import express from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.get("/assets/:name", async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const options = {
    root: path.join(__dirname, "..", "assets"),
    dotfiles: "deny",
  };

  const name = req.params.name;
  if (!name) {
    next(new Error("not found"));
    return;
  }

  res.sendFile(name, options, (error) => {
    if (error) {
      next(error);
    }
  });
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
