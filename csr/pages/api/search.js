import pokemon from "../../pokemon.json";

export default function pokeHandler(req, res) {
  //   res.status(200).json({ hello: "There" });
  const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;
  // "i" means case insensitive
  //   res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res
    .status(200)
    .json(
      pokemon
        .filter(({ name: { english } }) => english.match(filter))
        .slice(0, 10)
    );
  //   res.end(
  //     JSON.stringify(
  //       pokemon
  //         .filter(({ name: { english } }) => english.match(filter))
  //         .slice(0, 10)
  //     )
  //   );
}
