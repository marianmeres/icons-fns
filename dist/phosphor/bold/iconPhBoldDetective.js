export const iconPhBoldDetective = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,104H219.21L175.82,44.24a20,20,0,0,0-31.61-.94L131.39,58.16c-.1.11-.2.23-.29.35a4,4,0,0,1-6.2,0c-.09-.12-.19-.24-.29-.35L111.79,43.3a20,20,0,0,0-31.61.94L36.79,104H12a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM96.62,62.45l9.69,11.24a28,28,0,0,0,43.38,0l9.69-11.24L189.55,104H66.45ZM180,140a40.07,40.07,0,0,0-38.16,28H114.16a40,40,0,1,0,0,24h27.68A40,40,0,1,0,180,140ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm104,0a16,16,0,1,1,16-16A16,16,0,0,1,180,196Z"/></svg>`;
}
