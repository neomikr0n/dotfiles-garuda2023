#!/usr/bin/bash

scriptsDir="$HOME"/.dotfiles/bin

"$scriptsDir"/videowallpaper-change music &
kitty --title spotify-cava --hold cava &
# kitty --title spotify-timer --hold timer -l 88 | lolcat -a -d 1 -s 999 -t &
kitty --title spotify-timer &
# kitty --title spotify-glava --hold -e $scriptsDir/misc --glava &
glava &
eog /home/n30/Pictures/Screenshots/screenshot_garuda_2023-02-08-18-58-26_11824.png &
spotify
pkill 'kitty|eog|spotify-timer|Glava|spotify-cava' &
"$scriptsDir"/videowallpaper-change test &

# settings for spotify-session.sh on hyprland.conf:



# Window 8250b000 -> GLava:
# at: 12,4
# size: 755,196
# workspace: 4 (4)
# floating: 1
# monitor: 0
# class: GLava
# title: GLava
# pid: 114494
# xwayland: 1
# pinned: 0
# fullscreen: 0
# fullscreenmode: 0
# fakefullscreen: 0
# grouped: 0
# swallowing: 0