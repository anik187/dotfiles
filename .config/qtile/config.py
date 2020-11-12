# Copyright (c) 2010 Aldo Cortesi
# Copyright (c) 2010, 2014 dequis
# Copyright (c) 2012 Randall Ma
# Copyright (c) 2012-2014 Tycho Andersen
# Copyright (c) 2012 Craig Barnes
# Copyright (c) 2013 horsik
# Copyright (c) 2013 Tao Sauvage
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERTrueCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from typing import List  # noqa: F401

from libqtile import bar, layout, widget
from libqtile.config import Click, Drag, Group, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
from keys import keys, groups
import os
mod = "mod4"

layout_theme = {"border_width": 2,
                "margin": 6,
                "border_focus": "e1acff",
                "border_normal": "1D2330"
                }

layouts = [
    # Try more layouts by unleashing below layouts.
    # layout.Bsp(),
    # layout.Columns(),
    # layout.Matrix(),
    layout.MonadTall(**layout_theme),
    layout.Max(),
    # layout.MonadWide(),
    # layout.RatioTile(),
    # layout.Tile(),
    # layout.TreeTab(),
    # layout.VerticalTile(),
    # layout.Zoomy(),
]
colors = [["#292d3e", "#292d3e"], # panel background
          ["#434758", "#434758"], # background for current screen tab
          ["#ffffff", "#ffffff"], # font color for group names
          ["#ff5555", "#ff5555"], # border line color for current tab
          ["#8d62a9", "#8d62a9"], # border line color for other tab and odd widgets
          ["#668bd7", "#668bd7"], # color for the even widgets
          ["#e1acff", "#e1acff"]] # window name

widget_defaults = dict(
    font='Source Code Pro',
    fontsize=14,
    padding=3,
    background=colors[0],
    foreground=colors[2],
)
extension_defaults = widget_defaults.copy()
widget_list = [
                widget.Sep(padding=4,linewidth=0),
                widget.Image(
                        filename="~/.config/qtile/python.png",
                        mouse_callbacks={'Button1': lambda qtile: qtile.cmd_spawn('dmenu_run')}
                            ),
                widget.Sep(padding=5,linewidth=0),
                widget.GroupBox(
                        borderwidth = 3,
                        padding_x = 3,
                        active = colors[2],
                        inactive = colors[2],
                        rounded = False,
                        highlight_color = colors[1],
                        highlight_method = "line",
                        this_current_screen_border = colors[3],
                        this_screen_border = colors [4],
                        foreground = colors[2],
                        background = colors[0]
                            ),
                widget.Spacer(bar.STRETCH),
                widget.CPU(background=colors[1],foreground=colors[2],format='💻 cpu: {load_percent}%'),
                widget.Sep(padding=7,linewidth=0),
                widget.Memory(background=colors[1],foreground=colors[2],format='💾 mem: {MemUsed}M'),
                widget.Sep(padding=7,linewidth=0),
                widget.DF(),
                widget.Sep(padding=7,linewidth=0),
                 widget.TextBox(
                      text = "🔈Vol:",
                       foreground = colors[2],
                       background = colors[1],
                       padding = 0
                               ),
                widget.Volume(foreground=colors[2],background=colors[1],padding=3),
                widget.Sep(padding=7,linewidth=0),
                widget.Systray(),
                widget.Sep(padding=7,linewidth=0),
                widget.Clock(background=colors[1],format='⏰ %a %I:%M %p'),
                widget.Sep(padding=7,linewidth=0),
                widget.Image(
                                background = colors[0],
                                filename="~/.config/qtile/poweroff.png" ,
                                mouse_callbacks={'Button1': lambda qtile: qtile.cmd_spawn('./.dmenu/powermenu.sh')}
                            ),
                widget.Sep(padding=7,linewidth=0),

        ]
screens = [ Screen(top=bar.Bar(widgets=widget_list, opacity=1.0, size=23,),),]

os.system('./.config/qtile/autostart.sh')
# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgroups_app_rules = []  # type: List
main = None  # WARNING: this is deprecated and will be removed soon
follow_mouse_focus = False
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(float_rules=[
    # Run the utility of `xprop` to see the wm class and name of an X client.
    {'wmclass': 'confirm'},
    {'wmclass': 'dialog'},
    {'wmclass': 'download'},
    {'wmclass': 'error'},
    {'wmclass': 'file_progress'},
    {'wmclass': 'notification'},
    {'wmclass': 'splash'},
    {'wmclass': 'toolbar'},
    {'wmclass': 'confirmreset'},  # gitk
    {'wmclass': 'makebranch'},  # gitk
    {'wmclass': 'maketag'},  # gitk
    {'wname': 'branchdialog'},  # gitk
    {'wname': 'pinentry'},  # GPG key password entry
    {'wmclass': 'ssh-askpass'},  # ssh-askpass
])
auto_fullscreen = True
focus_on_window_activation = "smart"

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "LG3D"
