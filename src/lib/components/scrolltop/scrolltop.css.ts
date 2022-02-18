import { vars } from "$lib/styles/variables/vars.css";
import { style } from "@vanilla-extract/css";

export const icon = style({
    height: '3rem',
    width: '3rem',
    fill: '#2b2d3b',
    "@media": {
        '(prefers-color-scheme: dark)':
        {
            fill: vars.color.white,
        }
    }
});

export const container = style({
    position: 'absolute',
    bottom: 0,
    right: '2rem',
    animation: ''
})