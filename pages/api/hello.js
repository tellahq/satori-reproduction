// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import satori from "satori";

function renderSvg() {
  return satori(
    <div
      style={{
        backgroundColor: "tomato",
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="https://picsum.photos/200/300" width={200} height={300} />
    </div>,
    {
      width: 600,
      height: 400,
      fonts: [],
    }
  );
}

export default async function handler(req, res) {
  const svgs = await Promise.all([renderSvg(), renderSvg(), renderSvg()]);

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg[0]);
}
