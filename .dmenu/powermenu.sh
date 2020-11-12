#! /bin/sh

declare power_menu=("shutdown
restart")

choices=$(echo -e "${power_menu[@]}" | dmenu -p 'Mood off? ')

case "$choices" in
    shutdown)
                systemctl poweroff
    ;;
    restart)
                systemctl reboot
    ;;
    *)
            exit 1
    ;;
esac    
