
import htmlDev from "./index.html?raw";
import styleDev from "./style.css?raw";
import './style.css'

const Preview = ({ iframeRef }) => {
    const srcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css">
            <style>
                ${styleDev}

                .__dev-highlight {
                    outline: 3px solid #3b82f6;
                    outline-offset: 2px;
                }
            
            </style>
        </head>
        <body>
            ${htmlDev}

              <script>
                    window.addEventListener('message', (e) => {
                    if (e.data?.type !== 'HIGHLIGHT') return;

                    const el = document.querySelector('[data-dev="' + e.data.id + '"]');
                    if (!el) return;

                    el.classList.add('__dev-highlight');
                    setTimeout(() => el.classList.remove('__dev-highlight'), 1000);
                    });
                </script>
        </body>
        </html>
    `;

    return(
        <>
            <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            className="w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin"
            />
        </>
    );
}

export default Preview;