import { createContext, useState, useEffect, useCallback, useMemo } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTodo, setNewTodo] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  // Ajouter un todo
  const addTodo = useCallback(() => {
    if (newTodo.trim() === "") return;
    setTodos(prev => [...prev, { text: newTodo, completed: false }]);
    setNewTodo("");
  }, [newTodo]);

  // Changer l'état d'un todo
  const toggleTodo = useCallback(index => {
    setTodos(prev =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Todos visibles (filtrés selon les tâches complétées)
  const visibleTodos = useMemo(() => {
    return !showCompleted ? todos : todos.filter(todo => todo.completed);
  }, [showCompleted, todos]);

  // Nombre total de todos
  const todosCount = useMemo(() => {
    return todos.length > 0 ? `${todos.length} todos` : "";
  }, [todos]);

  // Sauvegarde dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        newTodo,
        setNewTodo,
        addTodo,
        toggleTodo,
        showCompleted,
        setShowCompleted,
        visibleTodos,
        todosCount,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext };
export default TodosProvider;
