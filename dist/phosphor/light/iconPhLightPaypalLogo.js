export const iconPhLightPaypalLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M218.54,94.77A53.84,53.84,0,0,0,198,78.66,54,54,0,0,0,144,26H84A14,14,0,0,0,70.42,36.6l-36,144A14,14,0,0,0,48,198H78.07l-3.65,14.6A14,14,0,0,0,88,230h31.5a14,14,0,0,0,13.58-10.6l9-35.88A2,2,0,0,1,144,182h32a54,54,0,0,0,42.56-87.23ZM79.51,186H48a2,2,0,0,1-1.94-2.49l36-144A2,2,0,0,1,84,38h60a42,42,0,0,1,41.69,36.87A54.57,54.57,0,0,0,176,74H120a14,14,0,0,0-13.59,10.6l-25,99.89A2,2,0,0,1,79.51,186ZM185.37,87.05c-.18,1-.39,2.09-.65,3.14A41.94,41.94,0,0,1,144,122H109.44l8.62-34.48A2,2,0,0,1,120,86h56A42.43,42.43,0,0,1,185.37,87.05Zm31.35,51.14A41.94,41.94,0,0,1,176,170H144a14,14,0,0,0-13.58,10.6l-9,35.89a2,2,0,0,1-1.94,1.51H88a2,2,0,0,1-1.94-2.49l20-80a2,2,0,0,1,2-1.52h36a53.92,53.92,0,0,0,52.38-40.9c.14-.55.25-1.1.36-1.64a42.06,42.06,0,0,1,20,46.73Z"/></svg>`;
}
