import { useEffect, useRef, useState } from "react";
import Markdown from "marked-react";

export default function App() {
  // States
  const [prevValue, setPrevValue] = useState("");

  //Variables
  const input = useRef();

  // Cycle
  useEffect(() => {
    updatePrevisualisation();
    input.current.focus();
  }, []);
  // Fonctions
  const updatePrevisualisation = () => {
    setPrevValue(input.current.value);
  };
  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          {/* textarea */}
          <textarea
            rows={30}
            defaultValue="# `Prévisualisateur - Believemy`&#13;### Oh ! De la magie !&#13;En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[Believemy](https://believemy.com)"
            onChange={updatePrevisualisation}
            ref={input}
          ></textarea>
        </div>
        <div className="element">
          {/* previsualisateur */}
          <Markdown>{prevValue}</Markdown>
        </div>
      </div>
    </div>
  );
}
