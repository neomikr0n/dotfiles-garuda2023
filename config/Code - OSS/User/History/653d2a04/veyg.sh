#!/bin/sh

# This script will be a wrapper for the color selector `hyprpicker`
# https://github.com/Kara-Zor-El/config-files/blob/d901ec388cfb9296dcc410705f5614ddc8ca8488/hypr/scripts/hyprpicker.sh#L5

color=$(hyprpicker -a)
tempColor=~/Pictures/color.png

# RGB value
rgb=$(printf "rgb(%d, %d, %d)" 0x"${color:1:2}" 0x"${color:3:2}" 0x"${color:5:2}")

# this file will remain on $dir as a temp file, can be removed
convert -size 100x100 xc:$color $tempColor

# Send a notification with the color, rgb value and a image of the color
notify-send -i $tempColor "Hex color $color copied to clipboard" "RGB: $rgb"
# rm $tempColor
