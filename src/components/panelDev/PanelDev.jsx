import { useState, useRef, useEffect, cloneElement } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

const PanelDev = ({ preview, htmlRaw, cssRaw, jsonContent }) => {
  const [tab, setTab] = useState("html");
  const [leftWidth, setLeftWidth] = useState(50);
  const isDragging = useRef(false);
  const iframeRef = useRef(null);

  const startDrag = () => (isDragging.current = true);
  const stopDrag = () => (isDragging.current = false);

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const percent = (e.clientX / window.innerWidth) * 100;
    if (percent > 20 && percent < 80) setLeftWidth(percent);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [tab, htmlRaw, cssRaw, jsonContent]);

  const onHtmlClick = (e) => {
    const match = e.target.textContent.match(/data-dev="(.*?)"/);
    if (!match) return;

    iframeRef.current?.contentWindow?.postMessage(
      { type: "HIGHLIGHT", id: match[1] },
      "*"
    );
  };

  return (
    <div
      className="flex mt-10 h-[80vh]"
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <div
        className="border p-2 overflow-auto bg-white"
        style={{ width: `${leftWidth}%` }}
      >
        {cloneElement(preview, { iframeRef })}
      </div>

      <div
        onMouseDown={startDrag}
        className="w-1 cursor-col-resize bg-slate-600 hover:bg-slate-400"
      />
      <div
        className="border bg-slate-900 text-white flex flex-col"
        style={{ width: `${100 - leftWidth}%` }}
      >
        {/* HTML / CSS */}
        <div className="flex flex-col h-1/2 border-b border-slate-700">
          <div className="flex border-b border-slate-700">
            {["html", "css"].map((t) => (
              <button key={t} onClick={() => setTab(t)}className={`px-4 py-2 ${ tab === t ? "bg-slate-700" : ""}`}>
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-auto p-2 text-sm font-mono">
            {tab === "html" && (
              <pre onClick={onHtmlClick}>
                <code className="language-markup">{htmlRaw}</code>
              </pre>
            )}

            {tab === "css" && (
              <pre>
                <code className="language-css">{cssRaw}</code>
              </pre>
            )}
          </div>
        </div>

        {/* API / JSON */}
        <div className="flex-1 overflow-auto p-2">
          <div className="text-xs uppercase text-slate-400 mb-2">
            API / JSON
          </div>
          <pre className="text-sm font-mono">
            <code className="language-json">
              {JSON.stringify(jsonContent, null, 2)}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PanelDev;
