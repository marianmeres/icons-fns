export const iconPhThinSynagogue = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,180,80v49.11l-48-27.43V72a4,4,0,0,0-8,0v29.68L76,129.11V80A20,20,0,0,0,60,60.4V32a4,4,0,0,0-8,0V60.4A20,20,0,0,0,36,80V216a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V176a12,12,0,0,1,24,0v40a4,4,0,0,0,4,4h72a4,4,0,0,0,4-4V80A20,20,0,0,0,204,60.4ZM200,68a12,12,0,0,1,12,12v28H188V80A12,12,0,0,1,200,68ZM56,68A12,12,0,0,1,68,80v28H44V80A12,12,0,0,1,56,68ZM44,116H68v96H44Zm84,40a20,20,0,0,0-20,20v36H76V138.32l52-29.71,52,29.71V212H148V176A20,20,0,0,0,128,156Zm60,56V116h24v96Z"/></svg>`;
}
