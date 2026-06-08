import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import api from "../services/api";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "PENDING",
  });

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    try {

      await api.post("/tasks", task);

      fetchTasks();

      setTask({
        title: "",
        description: "",
        status: "PENDING",
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">

      <div className="container">

        <div className="dashboard-header">

          <div>
            <h1>Task Manager</h1>

            <p className="subtitle">
              Track, organize and manage your tasks
            </p>
          </div>

          <button
            className="icon-btn"
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            <FiMoon />
          </button>

        </div>

        <div className="mini-stat">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="create-task-card">

          <h2>Create New Task</h2>

          <input
            placeholder="Task Title"
            value={task.title}
            onChange={(e) =>
              setTask({
                ...task,
                title: e.target.value,
              })
            }
          />

          <input
            placeholder="Task Description"
            value={task.description}
            onChange={(e) =>
              setTask({
                ...task,
                description: e.target.value,
              })
            }
          />

          <button onClick={createTask}>
            Create Task
          </button>

        </div>

        <div className="tasks-section">

          <h2>My Tasks</h2>

          {tasks.length === 0 ? (

            <div className="empty-state">
              No tasks available
            </div>

          ) : (

            tasks.map((t) => (

              <div
                className="task-card"
                key={t.id}
              >

                <h3>{t.title}</h3>

                <p>{t.description}</p>

                <div className="status-badge">
                  {t.status}
                </div>

              </div>

            ))

          )}

        </div>

        <div className="footer-actions">

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;