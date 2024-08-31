// noinspection JSUnusedGlobalSymbols
export default defineEventHandler(async (event) => {
    if (!getQuery(event).username) return [];

    const colors = await event.context.db.color.findFirst({
        where: {
            account: {
                setting: {
                    url: getQuery(event).username as string
                }
            }
        }
    });


    return {
        box: `background-color: ${hexToRgb(colors?.box || '#000000',0.4)}`,
        box_outline: `border: 1px solid ${colors?.box_outline || '#000000'}`,
        profile_outline: `border: 2px solid ${hexToRgb(colors?.profile_outline || '#000000',0.5)}`,
        icon_color: {value: colors?.icon_color || '#000000', type: 'color'},
        display_name: {value: colors?.display_name || '#000000', type: 'color'},
        quotes: {value: colors?.quotes || '#000000', type: 'color'},
        description: {value: colors?.description || '#000000', type: 'color'},
        box_glows: {value: colors?.box_glows || '#000000', type: 'box-shadow'}
    };
});

function hexToRgb(hex: string, opac:number=1): string {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return `rgba(${(bigint >> 16) & 255},${(bigint >> 8) & 255},${bigint & 255},${opac})`;
}