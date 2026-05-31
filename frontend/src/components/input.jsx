// quando eta repetindo algo varias veses, como no caso as classes do tailwind, é interessante criar um componente separado para armazenar   isso

function Input(props) {

  return (
    <input
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      // type={props.type}
      // placeholder={props.placeholder}

      // value={props.value}
      // onChange={props.onChange}
      {...props}
    />
  );
}
export default Input;
