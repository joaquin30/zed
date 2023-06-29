import { ColorScheme } from "../theme/color_scheme"
import { with_opacity } from "../theme/color"
import { text, border, background, foreground } from "./components"
import { interactive, toggleable } from "../element"

export default function tab_bar(theme: ColorScheme): any {
    const height = 32

    const active_layer = theme.highest
    const layer = theme.middle

    const tab = {
        height,
        text: text(layer, "sans", "variant", { size: "sm" }),
        background: background(layer),
        border: border(layer, {
            right: true,
            bottom: true,
            overlay: true,
        }),
        padding: {
            left: 8,
            right: 12,
        },
        spacing: 8,

        // Tab type icons (e.g. Project Search)
        type_icon_width: 14,

        // Close icons
        close_icon_width: 8,
        icon_close: foreground(layer, "variant"),
        icon_close_active: foreground(layer, "hovered"),

        // Indicators
        icon_conflict: foreground(layer, "warning"),
        icon_dirty: foreground(layer, "accent"),

        // When two tabs of the same name are open, a label appears next to them
        description: {
            margin: { left: 8 },
            ...text(layer, "sans", "disabled", { size: "2xs" }),
        },
    }

    const active_pane_active_tab = {
        ...tab,
        background: background(active_layer),
        text: text(active_layer, "sans", "active", { size: "sm" }),
        border: {
            ...tab.border,
            bottom: false,
        },
    }

    const inactive_pane_inactive_tab = {
        ...tab,
        background: background(layer),
        text: text(layer, "sans", "variant", { size: "sm" }),
    }

    const inactive_pane_active_tab = {
        ...tab,
        background: background(active_layer),
        text: text(layer, "sans", "variant", { size: "sm" }),
        border: {
            ...tab.border,
            bottom: false,
        },
    }

    const dragged_tab = {
        ...active_pane_active_tab,
        background: with_opacity(tab.background, 0.9),
        border: undefined as any,
        shadow: theme.popover_shadow,
    }

    return {
        height,
        background: background(layer),
        active_pane: {
            active_tab: active_pane_active_tab,
            inactive_tab: tab,
        },
        inactive_pane: {
            active_tab: inactive_pane_active_tab,
            inactive_tab: inactive_pane_inactive_tab,
        },
        dragged_tab,
        pane_button: toggleable({
            base: interactive({
                base: {
                    color: foreground(layer, "variant"),
                    icon_width: 12,
                    button_width: active_pane_active_tab.height,
                },
                state: {
                    hovered: {
                        color: foreground(layer, "hovered"),
                    },
                    clicked: {
                        color: foreground(layer, "pressed"),
                    },
                },
            }),
            state: {
                active: {
                    default: {
                        color: foreground(layer, "accent"),
                    },
                    hovered: {
                        color: foreground(layer, "hovered"),
                    },
                    clicked: {
                        color: foreground(layer, "pressed"),
                    },
                },
            },
        }),
        pane_button_container: {
            background: tab.background,
            border: {
                ...tab.border,
                right: false,
            },
        },
    }
}