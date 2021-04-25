import React, { useState } from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import { CustomLabel, CustomButton } from "./../../styles/General.style";

function Slots(props) {
  const [slots, setSlots] = useState(
    props.slots || [
      {
        name: "Voluntário",
        slots: 9999,
      },
    ]
  );

  const addSlot = () => {
    setSlots([...slots, ...[{ name: "Voluntário", slots: 9999 }]]);
    onDataChange();
  };

  const removeSlot = (index) => {
    slots.splice(index, 1);
    setSlots([...slots]);
    onDataChange();
  };

  const onDataChange = () => {
    props.onChange(slots);
  };

  return (
    <div>
      {slots.map((slot, index) => {
        return (
          <Row
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 30,
            }}
            key={index}
          >
            <Col sm="6">
              <FormGroup>
                <CustomLabel for="title">Título da vaga:</CustomLabel>
                <Input
                  type="text"
                  name="slotName"
                  id="slotName"
                  value={slot.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    slots[index].name = value;
                    setSlots([...slots]);
                    onDataChange();
                  }}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <CustomLabel for="title">Quantidade:</CustomLabel>
                <Input
                  type="number"
                  name="slotName"
                  id="slotName"
                  value={slot.slots}
                  min={0}
                  disabled={slot.slots === 9999}
                  onChange={(e) => {
                    const value = e.target.value;
                    slots[index].slots = value;
                    setSlots([...slots]);
                    onDataChange();
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <input
                    type="checkbox"
                    id="no_limit"
                    name="no_limit"
                    checked={slot.slots === 9999}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (checked) {
                        slots[index].slots = 9999;
                      } else {
                        slots[index].slots = 1;
                      }
                      setSlots([...slots]);
                      onDataChange();
                    }}
                  />
                  <label style={{ marginLeft: 5 }}> Sem limite de vagas</label>
                </div>
              </FormGroup>
            </Col>
            {index > 0 && (
              <Col sm={12} onClick={() => removeSlot(index)}>
                <span style={{ cursor: "pointer", color: "#409bd6" }}>
                  Remover
                </span>
              </Col>
            )}
          </Row>
        );
      })}
      <br />
      <CustomButton outline color="primary" onClick={addSlot}>
        Adicionar vaga
      </CustomButton>
    </div>
  );
}

export default Slots;
