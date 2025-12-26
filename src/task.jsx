function Task({ item, onToggle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input type="checkbox" checked={item.done} onChange={onToggle} />
      <div
        style={{
          textDecoration: item.done ? "line-through" : "none",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {item.text}
      </div>
    </div>
  );
}

export default Task;
