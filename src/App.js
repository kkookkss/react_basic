import "./App.css";
import "./App.scss";

function App() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2 className="gray">Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        {/* {list.map(function (item) {
          return <li>{item}</li>;
        })} */}
      </ul>
      <img
        style={{ width: "300px", height: "200px" }}
        src="https://images.unsplash.com/photo-1666440816033-36430909a03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        alt="nature"
      />
    </>
  );
}

export default App;
