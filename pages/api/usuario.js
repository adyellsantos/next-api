
export default function handler(req, res) {
     console.log(req.method );
    if (req.method === "GET" ) {
      res.status(400).json({ name: "Tio Paulo" });
    }
  

    if (req.method === "POST" ) {
      res.status(200).json({ messenger: "Pode assinar" });
    }
  
    if (req.method === "PUT" ) {
      res.status(200).json({ messenger: "Você está bem?!" });
    }
  
    if (req.method === "DELETE" ) {
      res.status(200).json({ messenger: "Acho que ele esta morto!" });
    }
  }
  