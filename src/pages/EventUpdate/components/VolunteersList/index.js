import React from "react";
import { Table } from "reactstrap";

function VolunteersTable(props) {
  return (
    <>
      <div
        style={{
          margin: "0px 10px",
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            height: 350,
          }}
        >
          {props.enrollments && props.enrollments.length === 0 ? (
            <span>Nenhum voluntário até o momento.</span>
          ) : (
            <Table bordered>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {props.enrollments.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        {e.firstName} {e.lastName}
                      </td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
}

export default VolunteersTable;
