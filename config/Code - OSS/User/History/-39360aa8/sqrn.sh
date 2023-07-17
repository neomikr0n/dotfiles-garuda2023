#!/bin/bash

# [Hyprland] Mauve
# https://www.reddit.com/r/unixporn/comments/10g2do6/hyprland_mauve/
# https://github.com/m4xshen/dotfiles/blob/main/waybar/waybar/config
# https://github.com/m4xshen/dotfiles/blob/main/bin/bin/custom-alsa.sh

amixer -M get Master | grep '%' | awk -F '[][]' '{print $2}';
function print {
    amixer -M get Master | grep '%' | awk -F '[][]' '{print $2}';
}

trap print RTMIN+1
while true; do
    sleep infinity & wait $!
done