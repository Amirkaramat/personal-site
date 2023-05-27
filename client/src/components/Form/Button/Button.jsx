import { NavLink } from "react-router-dom";
export default function Button(props) {
  if (props.to) {
    return (
      <NavLink to={props.to} className={props.className}>
        {props.children}
      </NavLink>
    );
  } else if (props.href) {
    return <a href={props.href} className={props.className}>{props.children}</a>;
  } else {
    return (
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}>
      </button>
    );
  }
}
