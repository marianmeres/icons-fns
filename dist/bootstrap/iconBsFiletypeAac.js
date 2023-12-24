export function iconBsFiletypeAac(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-5.808 8.554a1.732 1.732 0 0 0-.103.633v.495c0 .246.035.455.103.627a.834.834 0 0 0 .299.393.845.845 0 0 0 .477.131.872.872 0 0 0 .402-.088.699.699 0 0 0 .272-.248.8.8 0 0 0 .117-.364h.765v.076a1.268 1.268 0 0 1-.226.674c-.136.194-.32.345-.55.454a1.81 1.81 0 0 1-.785.164c-.36 0-.665-.072-.915-.216a1.424 1.424 0 0 1-.57-.627c-.13-.272-.194-.597-.194-.976v-.498c0-.379.065-.705.196-.978.13-.274.321-.485.571-.633.252-.149.556-.223.912-.223.218 0 .42.032.606.097.187.062.35.153.49.272a1.325 1.325 0 0 1 .465.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.272-.261.802.802 0 0 0-.399-.097.814.814 0 0 0-.474.138.868.868 0 0 0-.302.398ZM.8 15.925l.313-1.028H2.45l.314 1.028h.84l-1.335-3.999h-.926l-1.342 4h.8Zm1.002-3.234.489 1.617H1.277l.49-1.617h.035Zm2.63 3.234.313-1.028H6.08l.313 1.028h.841L5.9 11.926h-.926l-1.341 4h.8Zm1.001-3.234.49 1.617H4.909l.49-1.617h.034Z"/></svg>`;
}
