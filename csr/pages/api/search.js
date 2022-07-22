import pokemon from "../../pokemon.json";

export default function pokeHandler(req, res) {
  //   res.status(200).json({ hello: "There" });

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      hello: "there ",
    })
  );
}
