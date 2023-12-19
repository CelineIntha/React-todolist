import React, { useEffect, useState } from "react";
import Task from "./Task";
import TaskProps from "./TaskProps";
import NewTask from "./NewTask";
// import "../Bootstrap/Style.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Permet de restituer les tâches du localStorage lors du montage du composant
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Le tableau vide signifie que cela ne doit être exécuté qu'une seule fois au montage

  // Fonction qui permet de gérer l'ajout de nouvelles tâches
  const handleNewTask = (newTask) => {
    // Ajoute la date de création à la nouvelle tâche
    const currentDate = new Date();
    newTask.creationDate = currentDate.toLocaleDateString();
    setTasks([...tasks, newTask]);
    // Permet de sauvegarder la nouvelle tâche dans le localStorage
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  // Fonction qui permet de gérer la suppression des tâches
  const handleTaskDelete = (index) => {
    let newTasksList = [...tasks];
    newTasksList.splice(index, 1);
    setTasks(newTasksList);
    // Permet de sauvegarder la tâche supprimée dans le localStorage
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
  };

  // Fonction qui permet de gérer les tâches complétées ou non
  const handleTaskChecked = (index) => {
    let newTasksList = [...tasks];

    // Vérifie d'abord si l'élément à l'index spécifié existe dans le tableau newTasksList et s'il a une propriété completed définie.
    if (
      newTasksList[index] &&
      // completed = constructeur TaskProps
      typeof newTasksList[index].completed !== "undefined"
    ) {
      // Inverse l'état de la propriété completed (de true à false) de la tâche à l'index spécifié dans le tableau newTasksList.
      newTasksList[index].completed = !newTasksList[index].completed;
      // Met à jour le tableau
      setTasks(newTasksList);
      // Permet de sauvegarder la tâche validée dans le localStorage
      localStorage.setItem("tasks", JSON.stringify(newTasksList));
    }
  };

  // Fonction qui permet de mettre à jour/modifier une tâche
  const handleTaskUpdate = (index, updatedText) => {
    // Crée une copie du tableau des tâches
    let newTasksList = [...tasks];

    // Vérifie si la tâche à l'index spécifié existe dans le tableau
    if (newTasksList[index]) {
      // Met à jour le texte de la tâche avec le nouveau texte
      newTasksList[index].name = updatedText;

      // Met à jour l'état local avec le nouveau tableau des tâches
      setTasks(newTasksList);

      // Permet de sauvegarder la tâche modifiée dans le localStorage
      localStorage.setItem("tasks", JSON.stringify(newTasksList));
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Liste des tâches</h1>
      <div className="d-flex justify-content-center align-items-center">
        {/* J'importe le composant "NewTask" qui me permet d'ajouter une nouvelle tâche */}
        <NewTask onSubmit={handleNewTask} />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Numéro</th>
            <th scope="col">Tâche</th>
            <th scope="col">Date d'ajout</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Grâce à la fonction map, j'affiche la liste de mes différentes tâches, j'y ajoute un index et des fonctions */}
          {tasks.map((t, index) => (
            <Task
              key={index}
              index={index} // ajout de index comme propriété
              t={t}
              onTaskChecked={(index) => handleTaskChecked(index)}
              onDelete={(index) => handleTaskDelete(index)}
              onTaskUpdate={(updatedText) =>
                handleTaskUpdate(index, updatedText)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TaskList;
