import { with_opacity } from "../theme/color"
import { background, border, foreground, text } from "./components"
import { interactive, toggleable } from "../element"
import { useTheme } from "../theme"

export default function search(): any {
    const theme = useTheme()

    // Search input
    const editor = {
        background: background(theme.highest),
        corner_radius: 8,
        min_width: 200,
        max_width: 500,
        placeholder_text: text(theme.highest, "mono", "disabled"),
        selection: theme.players[0],
        text: text(theme.highest, "mono", "default"),
        border: border(theme.highest),
        margin: {
            right: 12,
        },
        padding: {
            top: 4,
            bottom: 4,
            left: 10,
            right: 4,
        },
    }

    const include_exclude_editor = {
        ...editor,
        min_width: 100,
        max_width: 250,
    }

    return {
        padding: { top: 16, bottom: 16, left: 16, right: 16 },
        // TODO: Add an activeMatchBackground on the rust side to differentiate between active and inactive
        match_background: with_opacity(
            foreground(theme.highest, "accent"),
            0.4
        ),
        option_button: toggleable({
            base: interactive({
                base: {
                    ...text(theme.highest, "mono", "on"),
                    background: background(theme.highest, "on"),
                    corner_radius: 2,
                    margin: { right: 2 },
                    border: {
                        width: 1., color: background(theme.highest, "on")
                    },
                    padding: {
                        bottom: 4,
                        left: 4,
                        right: 4,
                        top: 4,
                    },
                },
                state: {
                    hovered: {
                        ...text(theme.highest, "mono", "on", "hovered"),
                        background: background(theme.highest, "on", "hovered"),
                        border: {
                            width: 1., color: background(theme.highest, "on", "hovered")
                        },
                    },
                    clicked: {
                        ...text(theme.highest, "mono", "on", "pressed"),
                        background: background(theme.highest, "on", "pressed"),
                        border: {
                            width: 1., color: background(theme.highest, "on", "pressed")
                        },
                    },
                },
            }),
            state: {
                active: {
                    default: {
                        background: background(theme.highest, "accent"),
                        border: border(theme.highest, "accent"),
                    },
                    hovered: {
                        background: background(theme.highest, "accent", "hovered"),
                        border: border(theme.highest, "accent", "hovered"),
                    },
                    clicked: {
                        background: background(theme.highest, "accent", "pressed"),
                        border: border(theme.highest, "accent", "pressed"),
                    },
                },
            },
        }),
        action_button: interactive({
            base: {
                ...text(theme.highest, "mono", "on"),
                background: background(theme.highest, "on"),
                corner_radius: 6,
                border: border(theme.highest, "on"),
                margin: {
                    right: 4,
                },
                padding: {
                    bottom: 2,
                    left: 10,
                    right: 10,
                    top: 2,
                },
            },
            state: {
                hovered: {
                    ...text(theme.highest, "mono", "on", "hovered"),
                    background: background(theme.highest, "on", "hovered"),
                    border: border(theme.highest, "on", "hovered"),
                },
                clicked: {
                    ...text(theme.highest, "mono", "on", "pressed"),
                    background: background(theme.highest, "on", "pressed"),
                    border: border(theme.highest, "on", "pressed"),
                },
            },
        }),
        editor,
        invalid_editor: {
            ...editor,
            border: border(theme.highest, "negative"),
        },
        include_exclude_editor,
        invalid_include_exclude_editor: {
            ...include_exclude_editor,
            border: border(theme.highest, "negative"),
        },
        match_index: {
            ...text(theme.highest, "mono", "variant"),
            padding: {
                left: 6,
            },
        },
        option_button_group: {
            padding: {
                left: 12,
                right: 12,
                top: 3,
                bottom: 3,
            },
        },
        include_exclude_inputs: {
            ...text(theme.highest, "mono", "variant"),
            padding: {
                right: 6,
            },
        },
        major_results_status: {
            ...text(theme.highest, "mono", "on"),
            size: 15,
        },
        minor_results_status: {
            ...text(theme.highest, "mono", "variant"),
            size: 13,
        },
        dismiss_button: interactive({
            base: {
                color: foreground(theme.highest, "variant"),
                icon_width: 12,
                button_width: 14,
                padding: {
                    left: 10,
                    right: 10,
                },
            },
            state: {
                hovered: {
                    color: foreground(theme.highest, "hovered"),
                },
                clicked: {
                    color: foreground(theme.highest, "pressed"),
                },
            },
        }),
        editor_icon: {
            icon: {
                color: foreground(theme.highest, "variant"),
                asset: "icons/magnifying_glass_12.svg",
                dimensions: {
                    width: 12,
                    height: 12,
                }
            },
            container: {
                margin: { right: 6 },
                padding: { left: 4 }
            }
        },
        mode_button: toggleable({
            base: interactive({
                base: {
                    ...text(theme.highest, "mono", "variant"),
                    background: background(theme.highest, "variant"),

                    border: {
                        ...border(theme.highest, "on"),
                        left: false,
                        right: false
                    },

                    padding: {
                        bottom: 4,
                        left: 10,
                        right: 10,
                        top: 5,
                    },
                    corner_radius: 6,
                },
                state: {
                    hovered: {
                        ...text(theme.highest, "mono", "variant", "hovered"),
                        background: background(theme.highest, "variant", "hovered"),
                        border: border(theme.highest, "on", "hovered"),
                    },
                    clicked: {
                        ...text(theme.highest, "mono", "variant", "pressed"),
                        background: background(theme.highest, "variant", "pressed"),
                        border: border(theme.highest, "on", "pressed"),
                    },
                },
            }),
            state: {
                active: {
                    default: {
                        ...text(theme.highest, "mono", "on"),
                        background: background(theme.highest, "on")
                    },
                    hovered: {
                        ...text(theme.highest, "mono", "on", "hovered"),
                        background: background(theme.highest, "on", "hovered")
                    },
                    clicked: {
                        ...text(theme.highest, "mono", "on", "pressed"),
                        background: background(theme.highest, "on", "pressed")
                    },
                },
            },
        }),
        nav_button: interactive({
            base: {
                text: text(theme.highest, "mono", "on"),
                background: background(theme.highest, "on"),
                corner_radius: { top_left: 6, top_right: 6, bottom_right: 6, bottom_left: 6 },
                border: {
                    ...border(theme.highest, "on"),
                    left: false,
                    right: false,
                },

                padding: {
                    bottom: 6,
                    left: 6,
                    right: 6,
                    top: 6,
                },
            },
            state: {
                hovered: {
                    ...text(theme.highest, "mono", "on", "hovered"),
                    background: background(theme.highest, "on", "hovered"),
                    border: border(theme.highest, "on", "hovered"),
                },
                clicked: {
                    ...text(theme.highest, "mono", "on", "pressed"),
                    background: background(theme.highest, "on", "pressed"),
                    border: border(theme.highest, "on", "pressed"),
                },
            },
        }),
        search_bar_row_height: 32,

    }
}
