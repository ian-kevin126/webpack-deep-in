import icon from "../images/lnj.jpg";
import "../css/index.css";

function addImage() {
  let oImg = document.createElement("img");
  oImg.src = icon;
  oImg.setAttribute("class", "size");
  document.body.appendChild(oImg);
}

export { addImage };
