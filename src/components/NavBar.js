import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let keyCounter = 0;
  const linkElements = links.map(link => {
    return <a key={keyCounter++} href={"#" + link}>{link}</a>
  })

  return (
    <nav>
      {linkElements}
    </nav>
  )
}

export default NavBar;
