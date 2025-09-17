import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";

const App = () => {
  const colorRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    Object.assign(document.body.style, {
      height: "100vh",
      width: "100%",
      overflow: "hidden",
      margin: "0"
    });
    Object.assign(document.documentElement.style, {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "transparent transparent"
    });
  }, []);

  return (
    <section ref={sectionRef} className="is-relative" style={{width: "100%", height: "100%"}}>
      <input
        ref={colorRef}
        type="color"
        className="inputColor"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          mixBlendMode: "hue",
          width: "100%",
          height: "100%"
        }}
      />
      <img
        src="assets/imgAs.avif"
        alt="hola"
        style={{width: "100%", height: "100%", objectFit: "cover"}}
      />
    </section>
  );
};

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
const root = createRoot(rootEl);
root.render(<App />);

export default App;
