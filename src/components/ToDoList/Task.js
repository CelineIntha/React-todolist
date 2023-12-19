import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskProps from "./TaskProps";
// import "../Bootstrap/Style.css";

function Task({ index, t, onDelete, onTaskChecked, onTaskUpdate }) {
  // État local qui permet de gérer l'édition de text et la mise à jour du texte. L'état est false de base.
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(t.name);

  const handleDelete = () => {
    // Affiche une alerte de confirmation avant la suppression
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer la tâche :" + t.name + "?"
    );

    // Si l'utilisateur clique sur OK, la tâche est supprimée
    if (confirmDelete) {
      onDelete(index);
      console.log('Suppression de la tâche : "' + t.name + '"');
    }
  };

  // Fonction qui gère la validation d'une tâche
  const handleCheck = () => {
    onTaskChecked(index);
    console.log('Validation de la tâche : "' + t.name + '"');
  };

  // Fonction qui gère la mise à jour/modification du texte d'une tâche
  const handleUpdateText = () => {
    // Appelle la fonction onTaskUpdate avec le texte mis à jour
    onTaskUpdate(updatedText);
    console.log('Modification de la tâche : "' + t.name + '"');
    // Désactive le mode édition
    setIsEditing(false);
  };

  return (
    <tr>
      {/* Affiche le numéro de la tâche */}
      {/* Si la tâche est complétée, le texte est barrée et le fond devient vert */}
      <td
        style={{
          textDecoration: t.completed ? "line-through" : "none",
          backgroundColor: t.completed ? "#dff5c9" : "initial",
        }}
      >
        {index + 1}
      </td>
      {/* Colonne qui affiche le texte de la tâche, avec possibilité de le modifier en mode édition */}
      <td
        style={{
          textDecoration: t.completed ? "line-through" : "none",
          backgroundColor: t.completed ? "#dff5c9" : "initial",
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <button className="edit-btn" onClick={handleUpdateText}>
              Modifier la tâche
            </button>
          </>
        ) : (
          <>{t.name}</>
        )}
      </td>

      {/* Colonne qui affiche la date de création de la tâche */}
      <td
        style={{
          textDecoration: t.completed ? "line-through" : "none",
          backgroundColor: t.completed ? "#dff5c9" : "initial",
        }}
      >
        {t.creationDate}
      </td>

      {/* Colonne qui contient les boutons d'actions (édition, validation, suppression) */}
      <td
        className="btn-actions"
        style={{ backgroundColor: t.completed ? "#dff5c9" : "initial" }}
      >
        <>
          {/* Bouton de validation de la tâche */}
          <button
            className="check-btn"
            onClick={handleCheck}
            style={{ backgroundColor: t.completed ? "green" : "var(--accent)" }}
          >
            <FontAwesomeIcon icon="check" />
          </button>
          {/* Bouton pour activer/désactiver le mode édition */}
          <button onClick={() => setIsEditing(!isEditing)}>
            <FontAwesomeIcon icon="pen" />
          </button>
          {/* Bouton de suppression de la tâche */}
          <button className="delete-btn" onClick={handleDelete}>
            <FontAwesomeIcon icon="xmark" />
          </button>
        </>
      </td>
    </tr>
  );
}

export default Task;
