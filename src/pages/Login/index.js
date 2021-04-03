import React from "react";

function Login() {
  return (
    <div
      style={{
        marginTop: 100,
        textAlign: "center",
        background: "#FFF",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 50,
        paddingBottom: 200,
      }}
    >
      <h1 style={{ textAlign: "center", color: "#409BD6" }}>Entrar</h1>
      <div>
        <input style={{ padding: 10 }} placeholder={"E-mail"} />
      </div>
      <div style={{ marginTop: 5 }}>
        <input style={{ padding: 10 }} placeholder={"Senha"} />
      </div>
      <br />
      <div>
        <button>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
