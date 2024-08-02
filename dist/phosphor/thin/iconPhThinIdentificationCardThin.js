export const iconPhThinIdentificationCardThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,112a4,4,0,0,1-4,4H152a4,4,0,0,1,0-8h40A4,4,0,0,1,196,112Zm-4,28H152a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm36-84V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4ZM131.87,167a4,4,0,1,1-7.74,2C121.06,157,109,148,96,148s-25,9-28.13,21A4,4,0,0,1,64,172a3.87,3.87,0,0,1-1-.13A4,4,0,0,1,60.13,167a36.28,36.28,0,0,1,20.43-23.66,28,28,0,1,1,30.88,0A36.2,36.2,0,0,1,131.87,167ZM96,140a20,20,0,1,0-20-20A20,20,0,0,0,96,140Z"/></svg>`;
}
