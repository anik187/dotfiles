#!/usr/bin/zsh
declare people=("kitty
neovim
picom
quit
qtile
termite
vim
xmobar
xmonad
xresources
zsh")
choice=$(echo -e "${people[@]}" | dmenu -p 'Edit config files: ') 

case "$choice" in
    kitty)
        choice="$HOME/.config/kitty/kitty.conf"
    ;;
    neovim)
		choice="$HOME/.config/nvim/init.vim"
	;;
    picom)
		choice="$HOME/.config/picom/picom.conf"
	;;
    quit)
		echo "Program terminated." && exit 1
	;;
    qtile)
		choice="$HOME/.config/qtile/config.py"
	;;
    termite)
		choice="$HOME/.config/termite/config"
	;;
    vim)
		choice="$HOME/.vimrc"
	;;
    xmobar)
		choice="$HOME/.xmobarrc"
	;;
    xmonad)
		choice="$HOME/.xmonad/xmonad.hs"
	;;
	xresources)
		choice="$HOME/.Xresources"
	;;
	zsh)
		choice="$HOME/.zshrc"
	;;
	*)
        exit 1
	;;
esac
kitty -e vim "$choice"
