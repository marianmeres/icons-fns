export const iconFaSolidScaleUnbalancedFlip = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7 25.8-40.5 20.2L366.4 145.2c-4.5 3.2-9.3 5.9-14.4 8.2V480c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-21-9.2-37.2-27-44.2-49l-125.9-42zM200.4 288L128 163.8 55.6 288H200.4zM128 384C65.1 384 12.8 350 2 305.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C243.2 350 190.9 384 128 384zm382.8-92.2L438.4 416H583.3L510.8 291.8zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1z"/></svg>`;
}
