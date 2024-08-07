export const iconPhBoldDevToLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,52H24A20,20,0,0,0,4,72V184a20,20,0,0,0,20,20H232a20,20,0,0,0,20-20V72A20,20,0,0,0,232,52Zm-4,128H28V76H228ZM108,156V100a12,12,0,0,1,12-12h20a12,12,0,0,1,0,24h-8v4a12,12,0,0,1,0,24v4h8a12,12,0,0,1,0,24H120A12,12,0,0,1,108,156Zm52.46-52.7a12,12,0,1,1,23.08-6.6L188,112.32l4.46-15.62a12,12,0,0,1,23.08,6.6l-16,56a12,12,0,0,1-23.08,0ZM52,168H64a36,36,0,0,0,36-36v-8A36,36,0,0,0,64,88H52a12,12,0,0,0-12,12v56A12,12,0,0,0,52,168Zm12-56a12,12,0,0,1,12,12v8a12,12,0,0,1-12,12Z"/></svg>`;
}
