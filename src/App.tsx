import "./App.css";
import { useUserStore } from "./stores/user.store";

function App() {
  const user = useUserStore((state) => state);

  const patchUser = user.setCurrentUser;

  return (
    <>
      <div className="p-4 m-auto border-2 rounded-lg bg-slate-800 text-white">
        <h1 className="text-3xl font-bold">
          Hello world!{" "}
          {user.currentUser ? user.currentUser.name : "MBOLA TSY DEFINIE"}
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
          minima autem nobis animi perspiciatis deleniti quaerat, recusandae
          officiis ea totam quisquam repellat quidem perferendis ad! Vel officia
          voluptatibus ipsam.
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 mt-4 py-2 px-4 rounded"
          onClick={() => {
            patchUser({
              id: 1,
              name: "Ranto",
              token: "dzaldjlazkfhaoelkdjeklfhezkjlazjdkazhdlazhdzkajd",
            });
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
