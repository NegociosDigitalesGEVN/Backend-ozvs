import pool from "../config/connections";

class UsuarioModelo {
  public async list() {
    const result = await pool.then(async (connection) => {
      return await connection.query(
        " SELECT u.email, u.password, u.role " + " FROM tbl_usuario u "
      );
    });
    return result;
  }

  public async add(usuario: any) {
    const result = await pool.then(async (connection) => {
      return await connection.query("INSERT INTO tbl_usuario SET ?", [usuario]);
    });
    return result;
  }

  public async getByEmail(email) {
    const result = await pool.then(async (connection) => {
      return await connection.query(
        "SELECT * FROM tbl_usuario WHERE email = ?",
        [email]
      );
    });
    return result[0]; // Devuelve el primer usuario encontrado o undefined si no hay resultados
  }

  public async update(usuario: any) {
    const updateQuery = "UPDATE tbl_usuario SET password = ? WHERE email = ?";
    const result = await pool.then(async (connection) => {
      return await connection.query(updateQuery, [usuario.password, usuario.email]);
    });
    return result;
  }

  public async delete(email: string) {
    const result = await pool.then(async (connection) => {
      return await connection.query("DELETE FROM tbl_usuario WHERE email = ?", [email]);
    });
    return result;
  }
}
const model = new UsuarioModelo();
export default model;
