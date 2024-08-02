export const iconPhThinFilmSlate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,108H71.26L209,71.64a4,4,0,0,0,2.84-4.92l-8.16-30a11.92,11.92,0,0,0-14.54-8.31L36.83,68.61a11.78,11.78,0,0,0-7.26,5.53A11.59,11.59,0,0,0,28.41,83l7.67,28.19A3.87,3.87,0,0,0,36,112v88a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V112A4,4,0,0,0,216,108ZM126,53.33l38,21.92L116.08,87.9,78.12,66Zm65.16-17.2a4,4,0,0,1,1-.13A3.88,3.88,0,0,1,196,38.81l7.1,26.12L175,72.35,137,50.43Zm-154.7,42a3.86,3.86,0,0,1,2.37-1.8l28.27-7.46,38,21.91L43.25,107.12,36.13,80.94A3.66,3.66,0,0,1,36.5,78.14ZM212,200a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V116H212Z"/></svg>`;
}
