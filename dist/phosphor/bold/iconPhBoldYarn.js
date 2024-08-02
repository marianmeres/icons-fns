export const iconPhBoldYarn = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,212H195.83A107.94,107.94,0,1,0,128,236l104,0a12,12,0,1,0,0-24ZM128,44a83.3,83.3,0,0,1,34.9,7.63Q153.21,56.45,144,62.14a227.58,227.58,0,0,0-32.13-16.58A84.49,84.49,0,0,1,128,44ZM79.33,59.6A201.6,201.6,0,0,1,122.5,77.31q-6.73,5.35-13,11.2A185.48,185.48,0,0,0,65,72.49,85,85,0,0,1,79.33,59.6ZM51.11,94.23a161.5,161.5,0,0,1,40.75,12.43q-5.44,6.25-10.44,12.9a145.86,145.86,0,0,0-35.37-9.92A83,83,0,0,1,51.11,94.23Zm2.76,73.23a83.49,83.49,0,0,1-9.66-33.83A122.15,122.15,0,0,1,67.79,140,228.76,228.76,0,0,0,53.87,167.46ZM71,189.67A205.38,205.38,0,0,1,186.1,67.42a85.36,85.36,0,0,1,11,12.86A187.87,187.87,0,0,0,84.55,199.86,84.08,84.08,0,0,1,71,189.67Zm51.67,22.15a84.08,84.08,0,0,1-16-2.55,163.87,163.87,0,0,1,101.07-107.4,83.43,83.43,0,0,1,3.52,15.78A148.76,148.76,0,0,0,122.71,211.82Zm26.4-2.51a124.78,124.78,0,0,1,61.31-65.15A84.25,84.25,0,0,1,149.11,209.31Z"/></svg>`;
}
