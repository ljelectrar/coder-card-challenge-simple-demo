import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar-img"
      src="img/ninho-do-arigo.png"
      alt="Ninho do Arigó"
    />
  );
}

function Intro() {
  return (
    <div>
      <h2>Leandro Junior Alves Dos Santos</h2>
      <p>
        Multi-skilled professional, has abilities with teaching, painting and
        programming....
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emogi}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill Skill="Java" emogi="\O/" color="orange" />
      <Skill Skill="Graffiti" emogi=":)" color="red" />
      <Skill Skill="React Js" emogi=":|" color="grey" />
      <Skill Skill="DotNet" emogi="|O" color="blue" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
