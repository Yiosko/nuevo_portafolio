import htmlDev from "./index.html?raw";
import styleDev from "./style.css?raw";
import 'font-awesome/css/font-awesome.min.css';

import './style.css'

const Preview = ({ iframeRef }) => {
        const srcDoc = `
        <!DOCTYPE html>
        <html>
        <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css"/> 
                <!-- jquery file upload Frame work -->
                <link href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/pages/jquery.filer/css/jquery.filer.css" type="text/css" rel="stylesheet" />
                <link href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/pages/jquery.filer/css/themes/jquery.filer-dragdropbox-theme.css" type="text/css" rel="stylesheet" />
                <!-- Menu-Search css -->
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/pages/menu-search/css/component.css">
                <!-- Select 2 css -->
                <link rel="stylesheet" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/bower_components/select2/css/select2.min.css" />
                <!-- Multi Select css -->
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/bower_components/bootstrap-multiselect/css/bootstrap-multiselect.css" />
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/bower_components/multiselect/css/multi-select.css" />                    
                <!-- Data Table Css -->
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/bower_components/datatables.net-bs4/css/dataTables.bootstrap4.min.css">
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/pages/data-table/css/buttons.dataTables.min.css">
                <link rel="stylesheet" type="text/css" href="https://facturacion.ticketsoftcolombia.com/assets/plantilla/bower_components/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ttskch/select2-bootstrap4-theme@1.5.2/dist/select2-bootstrap4.min.css">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"></script>

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
    return (<>
        <>
            <iframe
            ref={iframeRef}
            srcDoc={srcDoc}
            className="w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin"
            />
        </>
    </>);
}

export default Preview;