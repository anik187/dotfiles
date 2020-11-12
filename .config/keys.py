from libqtile.config import Group
from libqtile.command import lazy
from libqtile.config import EzKey

left, down, up, right = 'hjkl'
mod = 'mod4'
layout = lazy.layout


"""
for available keysims check this dictionary:
from libqtile.xkeysyms import keysyms
and for modifiers:
    'M': 'mod4'
    'A': 'mod1'
    'S': 'shift'
    'C': 'control'
"""
myTerm = "termite"

keymap = {
    # '<F12>': drop_down_terminal.toggle_function,
    # Switch between windows in current stack pane
    f'M-{left}': layout.left(),
    f'M-{up}': layout.up(),
    f'M-{down}': layout.down(),
    f'M-{right}': layout.right(),
    # Move windows up or down in current layout
    f'M-S-{up}': layout.shuffle_up(),
    f'M-S-{down}': layout.shuffle_down(),
    f'M-S-{left}': layout.swap_left(),
    f'M-S-{right}': layout.swap_right(),
    # Window Manipulation
    'M-<period>': layout.grow(),
    'M-<comma>': layout.shrink(),
    'M-n': layout.normalize(),
    'M-m': layout.maximize(),
    'M-S-<space>': layout.flip(),
    'M-f': lazy.window.toggle_floating(),
    'M-S-<Return>': lazy.window.toggle_split(),
    'M-<Return>': lazy.spawn(myTerm),
    'M-<space>': lazy.spawn("dmenu_run"),
    
    'M-S-c': lazy.window.kill(),
    'M-S-m': lazy.window.toggle_fullscreen(),
    # System
    'M-<Tab>': lazy.next_layout(),
    'M-S-c': lazy.window.kill(),
    'M-S-r': lazy.restart(),
    'M-S-q': lazy.shutdown(),
    }
group_names = ["term","web","code","files"]

groups = [Group(i) for i in group_names]
for i in list(enumerate(group_names,1)):
    x = str(i[0])
    keymap[f'M-{x}'] = lazy.group[i[1]].toscreen()
    keymap[f'M-S-{x}'] = lazy.window.togroup(i[1])

keys = [EzKey(k, v) for k, v in keymap.items()]

