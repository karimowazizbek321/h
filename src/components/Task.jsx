import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleImportant, editTask } from '../pages/tasks/tasksSlice';
import './style.css'

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: input }));
    setIsEditing(false);
  };

  return (
    <div className="task-container">
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите текст задачи"
            className="task-input"
          />
          <div className="task-actions">
            <button
              className="task-save"
              onClick={handleSave}
            >
              Сохранить
            </button>
            <button
              className="task-cancel"
              onClick={() => setIsEditing(false)}
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div className="task-view">
          <span className="task-text">
            {task.text}
          </span>
          <div className="task-actions">
            <button
              className="task-edit-button"
              onClick={() => setIsEditing(true)}
            >
              Изменить
            </button>
            <button
              className="task-delete-button"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Удалить
            </button>
            <button
              className="task-important-button"
              onClick={() => dispatch(toggleImportant(task.id))}
            >
              {task.important ? 'Снять важность' : 'Сделать важным'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
  