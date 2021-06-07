import React, { useEffect, useState } from "react";
import "./StyleMonitor.css";
import { Form, Card, InputGroup } from "react-bootstrap";

function Monitor() {
  const [sl, setSl] = useState("");
  const [asl, setAsl] = useState("");
  const [sbp, setSbp] = useState("");
  const [dbp, setDbp] = useState("");
  const [sbpCond, setsBpCond] = useState("");
  const [dbpCond, setDBpCond] = useState("");
  const [sugarCondchild, setsugarCondchild] = useState("");
  const [sbpCondChild, setSbpCondChild] = useState("");
  const [dbpCondChild, setDbpCondChild] = useState("");

  const [scondition, setSCondition] = useState("");

  useEffect(() => {
    // console.log(sl);
    analyseSugar();
    analyseSBp();
    analyDeSBp();
  });
  const analyseSugar = () => {
    if (sl <= 0) {
      setSCondition("");
    } else if (sl <= 50) {
      setSCondition("Dangerously low");
      setsugarCondchild(" Seek medical attention");
    } else if (sl <= 70 || sl <= 90) {
      setSCondition("Possibly too low ");
      setsugarCondchild(
        "Consume sugar upon experiencing symptoms of low blood sugar, or seek medical attention"
      );
    } else if (sl <= 160 || sl < 240) {
      setSCondition("Too high");
      setsugarCondchild("Work to bring down blood sugar levels");
    } else if (sl <= 240 || sl <= 300) {
      setSCondition("Much too high");
      setsugarCondchild(
        "This could be a sign of ineffective glucose management, so see a doctor"
      );
    } else if (sl >= 300) {
      setSCondition("Very high");
      setsugarCondchild("Seek immediate medical attention");
    }
  };

  const analyseSBp = () => {
    if (sbp <= 0) {
      setsBpCond("");
    } else if (sbp < 120) {
      setsBpCond("NORMAL");
    } else if (sbp === 120 || sbp <= 129) {
      setsBpCond("ELEVATED");
    } else if (sbp === 130 || sbp <= 139) {
      setsBpCond("HIGH  ");
      setSbpCondChild(" BLOOD PRESSURE(HYPERTENSION) STAGE 1");
    } else if (sbp === 140 || sbp <= 179) {
      setsBpCond("HIGH  ");
      setSbpCondChild(" BLOOD PRESSURE(HYPERTENSION) STAGE 2");
    } else if (sbp > 180) {
      setsBpCond("HYPERTENSIVE");
      setSbpCondChild("CRISIS(consult your doctor immediately");
    }
  };

  const analyDeSBp = () => {
    if (dbp <= 0) {
      setDBpCond("");
    } else if (dbp < 80) {
      setDBpCond("NORMAL");
    } else if (dbp < 80) {
      setDBpCond("ELEVATED");
    } else if (dbp === 80 || dbp <= 89) {
      setDBpCond("HIGH ");
      setDbpCondChild("BLOOD PRESSURE(HYPERTENSION) STAGE 1");
    } else if (dbp === 90 || dbp <= 119) {
      setDBpCond("HIGH");
      setDbpCondChild("BLOOD PRESSURE(HYPERTENSION) STAGE 2");
    } else if (dbp >= 120) {
      setDBpCond("HYPERTENSIVE");
      setDbpCondChild("CRISIS(consult your doctor immediately");
    }
  };
  return (
    <div>
      <div className="inputs" style={{ display: "flex" }}>
        <div className="inputGroup">
          <InputGroup className="mb-3 unitgrp sm">
            <Form.Control
              className="input"
              required
              value={sl}
              onChange={(e) => {
                setSl(e.target.value);
              }}
              size="lg"
              type="number"
              placeholder="Fasting blood sugar"
            />
            <InputGroup.Prepend className="units">
              <InputGroup.Text className="unit" id="basic-addon1">
                mg/dl
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>

        <div className="inputGroup">
          <InputGroup className="mb-3 unitgrp">
            <Form.Control
              className="input"
              required
              value={sbp}
              onChange={(e) => {
                setSbp(e.target.value);
              }}
              size="lg"
              type="number"
              placeholder="BP(systolic)"
            />
            <InputGroup.Prepend className="units">
              <InputGroup.Text className="unit" id="basic-addon1">
                mm/Hg
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>

        <div className="inputGroup">
          <InputGroup className="mb-3 unitgrp">
            <Form.Control
              className="input"
              required
              value={dbp}
              onChange={(e) => {
                setDbp(e.target.value);
              }}
              size="lg"
              type="number"
              placeholder="BP(diastotic)"
            />
            <InputGroup.Prepend className="units">
              <InputGroup.Text className="unit" id="basic-addon1">
                mm/Hg
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
      </div>
      <div className="cards" style={{ display: "flex" }}>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Body className="card-body">
            <Card.Title className="cardTitle">SUGAR</Card.Title>
            <Card.Title className="cardTitle">
              {scondition.toUpperCase()}
            </Card.Title>
            <Card.Text>{sugarCondchild.toUpperCase()}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body className="card-body">
            <Card.Title className="cardTitle">SYSTOLIC BP</Card.Title>
            <Card.Title className="cardTitle">
              {sbpCond.toUpperCase()}
            </Card.Title>
            <Card.Text>{sbpCondChild.toUpperCase()}</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body className="card-body">
            <Card.Title className="cardTitle">DIASTOLIC BP </Card.Title>
            <Card.Title className="cardTitle">
              {dbpCond.toUpperCase()}
            </Card.Title>

            <Card.Text>{dbpCondChild.toUpperCase()}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <h4>SUGAR {scondition.toUpperCase()}</h4>
      <h4>{sugarCondchild.toUpperCase()}</h4>
      <h4>SYSTOLIC BP {sbpCond.toUpperCase()}</h4>
      <h4>DIASTOLIC BP {dbpCond.toUpperCase()}</h4> */}
    </div>
  );
}

export default Monitor;
