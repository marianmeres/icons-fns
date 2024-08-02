export const iconPhBoldNumberSquareTwo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-66.43-92.76a12,12,0,0,0-2.35-16.82,12,12,0,0,0-16.8,2.36,11.7,11.7,0,0,0-1.74,3.22,12,12,0,0,1-22.63-8,36.45,36.45,0,0,1,5.2-9.67,36,36,0,0,1,57.5,43.34L128,164h24a12,12,0,0,1,0,24H104a12,12,0,0,1-9.6-19.2Z"/></svg>`;
}
