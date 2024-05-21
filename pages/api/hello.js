import openDB from "../../database/dbConfig";

export default async function handler(req, res) {
  const db = await openDB();

  if (req.method === "GET") {
    try {
      const id = req.query.id;
      if (id === undefined) {
        const usuarios = await db.query("SELECT * FROM Usuarios");
        res.status(200).json(usuarios);
      } else {
        const usuario = await db.query("SELECT * FROM Usuarios WHERE id = ?", [id]);
        res.status(200).json(usuario);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "POST") {
    try {
      const { nome, email } = req.body;

      if (!nome || nome === "") {
        res.status(400).json({ error: "Nome é obrigatório!" });
        return;
      }

      if (!email || email === "") {
        res.status(400).json({ error: "Email é obrigatório!" });
        return;
      }

      // Insert the new user into the database
      await db.query("INSERT INTO Usuarios (nome, email) VALUES (?, ?)", [nome, email]);

      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PUT") {
    res.status(405).json({ error: "Method Not Allowed" });
  }

  if (req.method === "DELETE") {
    try {
      const id = req.query.id;
      if (id === undefined) {
        res.status(400).json({ error: "ID do usuário não fornecido" });
        return;
      }

      // Check if the user exists
      const user = await db.query("SELECT * FROM Usuarios WHERE id = ?", [id]);
      if (user.length === 0) {
        res.status(404).json({ error: "Usuário não encontrado" });
        return;
      }

      // Delete the user from the database
      await db.query("DELETE FROM Usuarios WHERE id = ?", [id]);

      res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}