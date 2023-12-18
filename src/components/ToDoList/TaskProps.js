import React, { Component } from "react";
// import "../Bootstrap/Style.css";

class TaskProps {
  constructor(name) {
    this.name = name;
    this.completed = false; // La tâche par défaut n'est pas completée
  }
}

export default TaskProps;
