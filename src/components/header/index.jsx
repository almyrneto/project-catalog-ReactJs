import "./style.css";

import logo from "../../assets/images/arnia.svg";
import title from "../../assets/images/MOVIES.svg";

export default function Header() {
  return (
    <header className="header flex space-between mb-5">
      <img src={logo} alt="logo da arnia" />
      <img src={title} alt="imagem com texto MOVIES" />
    </header>
  );
}
