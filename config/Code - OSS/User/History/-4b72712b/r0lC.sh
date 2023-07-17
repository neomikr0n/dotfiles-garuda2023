#!/usr/bin/bash

scriptsDir="$HOME"/.dotfiles/bin

"$scriptsDir"/videowallpaper-change music &
kitty --title spotify-cava --hold cava &
kitty --title spotify-timer &
glava &
eog /home/n30/Pictures/Screenshots/screenshot_garuda_2023-02-08-18-58-26_11824.png &
spotify
pkill 'kitty|eog|spotify-timer|Glava|spotify-cava' &
"$scriptsDir"/videowallpaper-change test &

# settings for spotify-session.sh on hyprland.conf:

