import React from "react";
import TaskProps from "./TaskProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../Bootstrap/Style.css";

// Composant qui permet d'ajouter une nouvelle tâche
function NewTask({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name } = form.elements; // form.elements permet d'obtenir l'élément avec le nom "name"
    let task = new TaskProps(name.value);
    // Si le champ est vide, une alerte apparaît
    if (name.value.trim() !== "") {
      onSubmit(task);
    } else {
      alert("Veuillez remplir le champ");
    }
    form.reset();
  };

  return (
    <div className="container">
      {/* <h4>Ajouter une nouvelle tâche</h4> */}
      <form className="addTaskForm" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Ecrire une tâche..."/>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default NewTask;
