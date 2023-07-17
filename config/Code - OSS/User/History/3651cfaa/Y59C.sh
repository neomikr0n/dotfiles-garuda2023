#!/usr/bin/bash

scriptsDir="$HOME"/.config/hypr/scripts

"$scriptsDir"/videowallpaper-change music &
kitty --title spotify-cava --hold cava &
# kitty --title spotify-timer --hold timer -l 88 | lolcat -a -d 1 -s 999 -t &
foot --title spotify-timer --hold -e bash $scriptsDir/misc --count 88 &
kitty --title spotify-glava --hold -e glava & disown &
eog /home/n30/Pictures/Screenshots/screenshot_garuda_2023-02-08-18-58-26_11824.png &
sleep 1 &
pkill spotify-glava &
spotify
pkill 'kitty|eog|spotify-timer|Glava|spotify-cava' &
"$scriptsDir"/videowallpaper-change test &

# settings for spotify-session.sh on hyprland.conf:
# windowrulev2 = float, title:^(spotify-kitty)$
# windowrule=move 11 1156,title:^(spotify-kitty)$
# windowrule=size 2487 276,title:^(spotify-kitty)$
# windowrule=move 367 -64,title:^(Timer Settings — KTimer)$
# windowrule=size 472 254,title:^(Timer Settings — KTimer)$
# windowrulev2 =pin, title:^(Timer Settings — KTimer)$
# windowrule=move -25 -68,title:^(screenshot_garuda_2023-02-08-18-58-26_11824.png)$
# windowrule=size 22% 33%,title:^(screenshot_garuda_2023-02-08-18-58-26_11824.png)$
# windowrulev2 = float, title:^(Spotify)$
# windowrule=move 1320 420,title:^(Spotify)$
# windowrule=size 800 600,title:^(Spotify)$
# # windowrule=move 16 70,title:^(Image Viewer)$