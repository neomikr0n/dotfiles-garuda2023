# [**GARUDA Post Install Guide**](https://gitlab.com/garuda-linux)

**JUS A RANDOM, RIDICULOUS AND MESSY ATTEMPT OF A PERSONAL WIKI**

```
sudo pacman -S yay
```

You can clean the cached packages by running 
`sudo pacman -Sc`

<!-- TODO: -->

> - garuda
> - garuda-boot-options
> - garuda-common-settings
> - garuda-fastfetch-git
> - garuda-hotfixes
> - garuda-live-portable-efi
> - garuda-network-assistant-git

- 1-general must 2-easyeffects + effects
- wev : xev for wayland, shows keyboard keys name, pointer info and more
- gammastep: replacment for redshift (clight, wlsunset-git, or wl-gammarelay are alternatives)
- wl-gammarelay: developed from gammastep, a fork of redshift. It allows using keybindings to dynamically change the color temperature and software brightness, is a daemon which listens to DBus requests.
- qpwgraph - A PipeWire Graph Qt GUI Interface

```
yay -S ocs-url solaar megasync copyq ventoy whatsapp-nativefier qcopy hyprpicker wev wl-gammarelay hyprland-scratchpad-git \
mangohud joystickwake-git corectrl goverlay-git winetricks-git \
caffeine-ng sddm kate sysstat swaync \
spotify-adblock spicetify-git sox calf lsp-plugins mda.lv2 zam-plugins-lv2 pavucontrol qpwgraph-qt5 \
oreo-cursors-git bibata-rainbow-cursor-theme layan-cursor-theme-git ttf-jetbrains-mono-nerd \
thunar libwebp tumbler \
cli-visualizer cava glava foot kitty the_silver_searcher
```


# **[Environment Variables](https://wiki.hyprland.org/Configuring/Environment-variables/)**
You can use the env keyword to set environment variables prior to the initialization of the Display Server, e.g.:
`env = GTK_THEME,Nord`

Can be checked with:
```
env | grep -iE '(desk|kde|gnome|xfce|lxde|gtk|QT_|cursor)'
```
3 ways of setting those up:

1. `hyprland.conf`: ️TODO: (not working atm)
    ```
    # Toolkit Backend Variables
    env = GDK_BACKEND=wayland,x11
    env = SDL_VIDEODRIVER=wayland
    env = CLUTTER_BACKEND=wayland

    # XDG Specifications
    # XDG specific environment variables are often detected through portals and applications that may set those for you, however it is not a bad idea to set them explicitly.
    env = XDG_CURRENT_DESKTOP,Hyprland
    env = XDG_SESSION_TYPE,wayland
    env = XDG_SESSION_DESKTOP,Hyprland

    # QT Variables
    env = QT_AUTO_SCREEN_SCALE_FACTOR,1
    env = QT_QPA_PLATFORM,"wayland;xcb"
    env = QT_WAYLAND_DISABLE_WINDOWDECORATION,1
    env = QT_QPA_PLATFORMTHEME,qt5ct

    # Theming Related Variables
    env = XCURSOR_SIZE,32

    # for flameshot:
    # export SDL_VIDEODRIVER=wayland
    env = _JAVA_AWT_WM_NONREPARENTING,1

    # https://github.com/nosvagor/dotfiles/blob/main/bin/hyprwrap   #adendum, clean dots tho
    env = SDL_VIDEODRIVER,wayland
    env = GDK_BACKEND,"wayland,x11"
    env=CLUTTER_BACKEND,wayland

    ```
2. /etc/environment
      
    Hyprlnd wiki says:
    ```
    Please avoid putting those environment variables in `/etc/environment`. That will cause all sessions (including Xorg ones) to pick up your wayland-specific environment on traditional Linux distros. 
    ```
    It works for hyprland exclusive installations tho, just like mine:

    `sudo nano /etc/environment`: ️✔️

    ```
    # Toolkit Backend Variables
    GDK_BACKEND=wayland,x11
    SDL_VIDEODRIVER=wayland
    CLUTTER_BACKEND=wayland

    # XDG Specifications
    # XDG specific environment variables are often detected through portals and applications that may set those for you, however it is not a bad idea to set them explicitly.
    XDG_CURRENT_DESKTOP=Hyprland
    XDG_SESSION_TYPE=wayland
    XDG_SESSION_DESKTOP=Hyprland

    # QT Variables
    QT_AUTO_SCREEN_SCALE_FACTOR=1
    QT_QPA_PLATFORM="wayland;xcb"
    QT_WAYLAND_DISABLE_WINDOWDECORATION=1
    QT_QPA_PLATFORMTHEME=qt5ct

    # Theming Related Variables
    XCURSOR_SIZE=32

    # for flameshot:
    # export SDL_VIDEODRIVER=wayland
    _JAVA_AWT_WM_NONREPARENTING=1

    # https://github.com/nosvagor/dotfiles/blob/main/bin/hyprwrap   #adendum, clean dots tho
    SDL_VIDEODRIVER=wayland
    GDK_BACKEND="wayland,x11"
    CLUTTER_BACKEND=wayland
    ```
3. startup script:

    ```
    # Toolkit Backend Variables
        export GDK_BACKEND=wayland,x11 #- GTK: Use wayland if available, fall back to x11 if not.
        # export QT_QPA_PLATFORM="wayland;xcb" #- QT: Use wayland if available, fall back to x11 if not.
        export SDL_VIDEODRIVER=wayland #- Run SDL2 applications on Wayland. Remove or set to x11 if games that provide older versions of SDL cause compatibility issues
        export CLUTTER_BACKEND=wayland #- Clutter package already has wayland enabled, this variable will force Clutter applications to try and use the Wayland backend

    # XDG Specifications
    # XDG specific environment variables are often detected through portals and applications that may set those for you, however it is not a bad idea to set them explicitly.
        export XDG_CURRENT_DESKTOP=Hyprland
        export XDG_SESSION_TYPE=wayland
        export XDG_SESSION_DESKTOP=Hyprland
        
    # QT Variables
        export QT_AUTO_SCREEN_SCALE_FACTOR=1 #- (From the QT documentation) enables automatic scaling, based on the monitor’s pixel density
        export QT_QPA_PLATFORM="wayland;xcb" #- Tell QT applications to use the Wayland backend, and fall back to x11 if Wayland is unavailable
        export QT_WAYLAND_DISABLE_WINDOWDECORATION=1 #- Disables window decorations on QT applications
        export QT_QPA_PLATFORMTHEME=qt5ct #- Tells QT based applications to pick your theme from qt5ct, use with Kvantum.

    # Theming Related Variables
        export XCURSOR_SIZE=32

    # for flameshot:
        # export SDL_VIDEODRIVER=wayland
        export _JAVA_AWT_WM_NONREPARENTING=1

    # https://github.com/nosvagor/dotfiles/blob/main/bin/hyprwrap   #adendum, clean dots tho
        export SDL_VIDEODRIVER=wayland
        export GDK_BACKEND="wayland,x11"
        export CLUTTER_BACKEND=wayland
    ```
Kde applications can be personalized with these argumments, not 
- qdirstat -style kvantum-dark
- dolphin -style kvantum-dark

community/qgnomeplatform-qt5 0.9.0-10 (151.2 KiB 514.3 KiB) (Installed)
QPlatformTheme for a better Qt5 application inclusion in GNOME
community/qgnomeplatform-qt6 0.9.0-10 (128.4 KiB 453.3 KiB) (Installed)
QPlatformTheme for a better Qt6 application inclusion in GNOME


> # **[msigd](https://github.com/couriersud/msigd)**

MPG341QR

[🔴] × g++ --version
g++ (GCC) 13.1.1 20230429

 ╰─λ sudo pacman -S libusb hidapi
warning: libusb-1.0.26-2 is up to date -- reinstalling
warning: hidapi-0.13.1-2 is up to date -- reinstalling

[🔴] × libusb-config --version
0.1.12

1. ## Requeried packages:
```
sudo pacman -S libusb hidapi
```
You just want libusb and hidapi.  Arch linux does not split its packages into foo and foo-dev. This means:
```
yay -S libusb-dev libhidapi-dev libusb-devel hidapi-devel
 -> No AUR package found for libusb-dev
 -> No AUR package found for libhidapi-dev
 -> No AUR package found for libusb-devel
 -> No AUR package found for hidapi-devel
```

2. ## This program needs root privilidges. Use with care.
sudo pacman -S libusb hidapi
sudo nano /etc/udev/rules.d/51-msi-gaming-device.rules

####### Allow access to members of plugdev - both for usb and hidraw access
SUBSYSTEM=="usb", ATTR{idVendor}=="1462", ATTR{idProduct}=="3fa4", GROUP="plugdev", TAG+="uaccess"
KERNEL=="hidraw*", ATTRS{idVendor}=="1462", ATTRS{idProduct}=="3fa4", GROUP="plugdev", TAG+="uaccess"

sudo udevadm control --reload-rules

3. ## Compile
```
cd ~/Documents/forks/
sudo rm -r msigd/
git clone https://github.com/couriersud/msigd.git
cd msigd/
make TARGETOS=arch
```
libtool --finish /usr/lib

4. ## Errors?

- save them to a external file
  
make TARGETOS=arch &> out

- clone a specific branch:
  ```
  git branch -a
  git clone -b 51-compile-errors-msi-mpg341qr-on-garuda-linux-arch-btw https://github.com/couriersud/msigd.git
  ```

- [Compile errors, MSI MPG341QR on Garuda Linux (arch btw)](https://github.com/couriersud/msigd/issues/51)


- ditching makefile 

changing "-lhidapi" to "lhidapi-hidraw" or "lhidapi-libusb" 

5. LOGS:

        MPG341QR
      ---
        [🔴] × g++ --version
        g++ (GCC) 13.1.1 20230429

        ╰─λ sudo pacman -S libusb hidapi
        warning: libusb-1.0.26-2 is up to date -- reinstalling
        warning: hidapi-0.13.1-2 is up to date -- reinstalling

        [🔴] × libusb-config --version
        0.1.12
      ---


      ---


      ---


> # **[foot](https://codeberg.org/dnkl/foot)**

> # **[kate]()**
If you want to back up your Kate theme, you can follow these steps:
    1. Open Kate and go to the "Settings">"Configure Kate">"Fonts & Colors" 
    2. Select the theme you want to back up from the list of installed themes.
    3. Click the "Export" button at the bottom of the window..

---

> # **[gammarelay wl](https://github.com/jeremija/wl-gammarelay)**

---

This utility was developed from gammastep, a fork of redshift as well as examples from wlroots.
It allows using keybindings to dynamically change the color temperature and software brightness.
This used to be possible using redshift using the -P -O <temp> flags, but since wayland requires the client to keep running, I developed this tool that spins up a daemon and can be controlled via unix domain socket.
The wl-gammarelay is a daemon which listens to DBus requests:

`busctl --user -- call rs.wl-gammarelay / rs.wl.gammarelay UpdateTemperature n -500 busctl --user -- call rs.wl-gammarelay / rs.wl.gammarelay UpdateTemperature n +500 busctl --user -- set-property rs.wl-gammarelay / rs.wl.gammarelay Temperature q 4000 busctl --user -- set-property rs.wl-gammarelay / rs.wl.gammarelay Temperature q 6500`

The service can be introspected:
`busctl --user introspect rs.wl-gammarelay / rs.wl.gammarelay`

---

> # *[Geolocation](https://rumpelsepp.org/blog/geolocation-for-gammastep/)* for **[gammastep](https://gitlab.com/chinstrap/gammastep)**

---

https://ipapi.co/

gammastep -l 19.6:-101.1 -m wayland     # TODO: not working?

I used the following on hyprconf for a long time:
```
# exec = busctl --user -- set-property rs.wl-gammarelay / rs.wl.gammarelay Temperature q 2500     # similar to "f.lux", prefered "temperature", 6500 is neutral, 2500 is for night time.
# exec = set temperature (cat ~/.config/gammarelay.temperature)
# exec = busctl --user -- set-property rs.wl-gammarelay / rs.wl.gammarelay Temperature q $temperature
```
---

> # [plymouth](https://www.freedesktop.org/wiki/Software/Plymouth/)

---

🔴 JUST FOR SYSTEMD-BOOT **NOT GRUB!**

##### [ARCH:](https://wiki.archlinux.org/title/Plymouth) Plymouth is a project from Fedora and now listed among the freedesktop.org's official resources providing a flicker-free graphical boot process. It relies on kernel mode setting (KMS) to set the native resolution of the display as early as possible, then provides an eye-candy splash screen leading all the way up to the login manager.

- > 📽️ --> <a href="https://www.youtube.com/watch?v=GhXFYq-LYYc
  > " target="_blank"><img src="http://img.youtube.com/vi/GhXFYq-LYYc/0.jpg" 
  > alt= "installing plymouth and themes on a system with systemd-boot" width="240" height="180" border="10" /></a>
  >
- > **YT:** [ArcoLinux : 3307 Ariser - installing plymouth and themes on a system with systemd-boot](https://www.youtube.com/watch?v=GhXFYq-LYYc)
  >

```
yay plymouth | grep sweet
plymouth-set-default-theme -l
sudo plymouth-set-default-theme -R garuda-purple

```

---

> # [nwg-look](https://github.com/nwg-piotr/nwg-look)

---

Fira Sans Regular 11.5 -> JetBrainsMono

Nerd Font Regular 13

>>> qt5 configuration tool
>>>
>>

Sans Serif 11 -> JetBrainsMono Nerd Font Regular 11

>>> dconf
>>>
>>

Sans Serif 10

cursor size 32

Layan-white-cursors

hyprctl setcursor Layan-white-cursors 32

set XCURSOR_SIZE 32
env | grep -F "CURSOR"

>>> `nano ~/.Xresources`
>>>
>>

Xcursor.size: 32

XCURSOR_SIZE=32 konsole

---

> # [swaync](https://github.com/ErikReider/SwayNotificationCenter)

---

https://manpages.ubuntu.com/manpages/lunar/man5/swaync.5.html

- [Config flex muscle](https://github.com/ErikReider/SwayNotificationCenter/discussions/183) This is meant as a place to flex with your swaync dotfiles.
- Sway Usage:

>>> Notification Daemon
>>>
>>

`exec swaync`

>>> Toggle control center
>>>
>>

`bindsym $mod+Shift+n exec swaync-client -t -sw`

>>> To start the daemon (remember to kill any other notification daemon before running)
>>>
>>

`./build/src/swaync`

>>> To toggle the panel
>>>
>>

`swaync-client -t`

>>> To reload the config
>>>
>>

`swaync-client -R`

>>> To reload css after changes
>>>
>>

`swaync-client -rs`

>>> Notification Inhibition
>>>
>>

Notifications can be inhibited through the provided swaync-client executable or through the DBus interface org.erikreider.swaync.cc.

Here's an example of notification inhibition while screen sharing through xdg-desktop-portal-wlr

>>> xdg-desktop-portal-wlr config
>>>
>>

```
[screencast]
exec_before=swaync-client --inhibitor-add "xdg-desktop-portal-wlr"
exec_after=swaync-client --inhibitor-remove "xdg-desktop-portal-wlr"
```

---


> # [****](https://ext.ulauncher.io/-/github-ulauncher-ulauncher-emoji)


---
> # **[ulauncher**](https://ext.ulauncher.io/-/github-ulauncher-ulauncher-emoji)**

---

## 1. Installation

```yay -s ulauncher && \
sudo mkdir ~/.config/ulauncher/user-themes/
```

## 2. [Oficial Extensions](https://ext.ulauncher.io/)

- [Emoji](https://ext.ulauncher.io/-/github-ulauncher-ulauncher-emoji)
- etc.

## 3. [Oficial Themes](https://gist.github.com/gornostal/02a232e6e560da7946c053555ced6cce)

- > https://draculatheme.com/ulauncher
  >

```
sudo mkdir ~/.config/ulauncher/user-themes/dracula-ulauncher && \ 
sudo git clone https://github.com/dracula/ulauncher.git ~/.config/ulauncher/user-themes/dracula-ulauncher
```

- > https://github.com/TechHutTV/endeavour-ulauncher-theme
  >

```
cd ~/.config/ulauncher/user-themes/ && \
sudo git clone https://github.com/TechHutTV/endeavour-ulauncher-theme.git
```

- > https://github.com/SirHades696/TokyoNight-Ulauncher-Theme
  >

```
sudo git clone https://github.com/SirHades696/TokyoNight-Ulauncher-Theme \
~/.config/ulauncher/user-themes/
```

---
# [thunar]()
yayu thunar-media-tags-plugin thunar-dropbox thunar-shares-plugin-git thunar-archive-plugin-git
## 1. Installation

```
yay -S gvfs thunar-volman tumbler ffmpegthumbnailer thunar-archive-plugin thunar-media-tags-plugin
```

##### ***Gnome Virtual File System*** — For trash support, mounting removable media, and remote filesystems

##### ***Thunar Archive Plugin*** — Plugin which allows you to create and extract archive files using contextual menu items. It does not create or extract archives directly, but instead acts as a frontend for other programs

##### ***Thunar Volume Manager*** — Automatic management of removeable devices

##### ***Tumbler*** — External program to generate thumbnails.

##### ***ffmpegthumbnailer*** - to enable video thumbnailing

>>>> - failed to launc preferred application for category "terminalemulator"
>>>>
>>>
>>

By default, Thunar uses the exo-open command, which is configured in the XFCE settings. If you do not have the XFCE settings app installed, you can instead configure it in `~/.config/xfce4/helpers.rc:`

```
TerminalEmulator=konsole
TerminalEmulatorDismissed=true
```

## 2. Themes

- [Utterly Sweet Global Theme Global](https://store.kde.org/p/1906500/) (takes a couple minutes...)
- [Utterly Sweet Kvantum](https://store.kde.org/p/1906474/)
- kvantum-qt5-git
- [Utterly Sweet Konsole Color Schemes](https://store.kde.org/p/1906466/)
  To install, open Konsole, go to "Settings > Edit Current Profile... > Appearance > Get New..." and search for "Sweetifiedt" and install it.
  Dont  forget to put the profile on Defaul
  https://store.kde.org/p/1906500/

https://store.kde.org/p/1906579/
cd && sudo ./.local/share/plasma/plasmoids/org.kde.windowbuttons/lib-install.sh

https://store.kde.org/p/1909598/
To install this theme, open System Settings in Plasma and go to "Startup and Shutdown > Login Screen (SDDM)" and click the "Get New SDDM Themes..." button in the lower right corner. In the new window that appeared, search for "Utterly Sweet" and install it.

```cd ~/Downloads```

transmission4-gtk qbitorrent

yay -S sweet-theme-full-git
sweet-gtk-theme sweet-gtk-theme-dark sweet-theme-git sweet-gtk-theme-mars-git # TODO: add kvantum theme  sweet

#keyboard Logitech k860, xbox controller tools, benchmark, amd undervolting, system staon

>>> date and time
>>>
>>

`sudo date -s "01 JAN 2023 20:23:00"`

## 3. Plug-ins

- Meld

>>> meld requires pycairo 1.15
>>> pip install pycairo==1.15.0
>>>
>>

>>> [How to customize files context menu in Xubuntu XFCE Thunar file manager?](https://askubuntu.com/questions/18367/how-to-customize-files-context-menu-in-xubuntu-xfce-thunar-file-manager/193769#193769)
>>>
>>

Didn't see this mentioned anywhere and this was one of the top search results related to adding Xfce custom actions, so...

If anyone wants to add entries to Thunar's right-click/context menu BUT wants to avoid the GUI for some reason, here is what worked for me. In my case, I wanted to do this as part of a post-install setup script that could be run on multiple computers.

It appears that adding things via the GUI mentioned in the other answers saves to the file `~/.config/Thunar/uca.xml`. Under Fedora 35 Xfce / Thunar 4.16.10, this had a sample entry for "Open Terminal Here" by default.

For me, this file contained (before modifying):

```
<?xml version="1.0" encoding="UTF-8"?>
<actions>
<action>
    <icon>utilities-terminal</icon>
    <name>Open Terminal Here</name>
    <unique-id>1644974544355345-1</unique-id>
    <command>exo-open --working-directory %f --launch TerminalEmulator</command>
    <description>Example for a custom action</description>
    <patterns>*</patterns>
    <startup-notify/>
    <directories/>
</action>
</actions>
```

Adding another <action>...</action> section with the appropriate details before the closing </actions> tag seemed to work as expected for me.

For example, I added:

```
<action>
    <icon>org.gnome.Meld</icon>
    <name>Compare selected</name>
    <unique-id>1654579259785630-2</unique-id>
    <command>meld %F</command>
    <description>Compares selected files or folders in Meld</description>
    <patterns>*</patterns>
    <directories/>
    <text-files/>
</action>
```

And was then able to see an option for doing Meld comparisons when I selected multiple files/folders. You might need to have the target app already installed for it to work (I already had meld installed).

Thunar picked the changes up right away for me after I closed open instances but if not, then you may need to kill/restart thunar (e.g. pkill -if thunar) or restart the pc for the changes to take effect.

I will likely just copy the file after I have it set up but if I decide to make a function wrapping xmlstarlet etc commands for this, then I'll try to remember to post a copy here as well.

>>> [Meld custom action in Thunar](https://forum.xfce.org/viewtopic.php?id=9660)
>>>
>>

you can create the two custom action in Thunar: for the first I choose the Name "Meld: select first", you can type what you prefer. The command is:

`echo -n %f | xclip`

For the second custom action I set the name "Meld: select second and compare" and the command:

`xclip -o | xargs -r -I '{}' meld '{}' %f`

For both, on the "Appearance Conditions" tab I set

File pattern: *

Appears if selection contains: Directories, Text files, Other files
-------------------------------------------------------------------

> # **[tmatrix](https://github.com/M4444/TMatrix)**

---

```yay -S tmatrix-git```

## - Colors

```
tmatrix -s 33 -f 0.6,0.9 -t THE-MATRIX -C magenta -c default

tmatrix -s 60 -f 0.3,0.6
tmatrix -s 33 -f 0.3,0.6 -t THE-MATRIX -C magenta
whereis tmatrix
```

---

> # **[swaylock](https://www.mankier.com/1/swaylock)**

---

```yay -S swaylock-effects-git```

>>> [betterlockscreen VS swaylock-effects](https://www.libhunt.com/compare-pavanjadhaw--betterlockscreen-vs-swaylock-effects)
>>>
>>

> # **Video Wallpaper Scripts**

>>> https://github.com/zeroruka/video-wallpaper-scripts
>>>
>>

`yay -S xwinwrap-git mplayer mpv ffmpeg gifsicle xclip`

>>> Wallpaper Engine (optional but recommended)
>>>
>>

```
cd ~/Downloads && git clone https://github.com/zeroruka/video-wallpaper-scripts.git
cd video-wallpaper-scripts/ && DBG=1 sh install.sh
sh setwall -a /home/n30/.config/video-wallpapers/wallpapers/1.mp4
sh wallhelper -a /home/n30/.config/video-wallpapers/wallpapers/1.mp4
sh setwall -a 884899737     # lol
```
> # **[swww](https://github.com/Horus645/swww)**
## yay -s swww-git

## or compiled by:
```
git clone https://github.com/Horus645/swww
cd swww
cargo-msrv
cargo build --release
### I uninstalled rustc and replace it with rust
```
## use it with:
swww img ~/Pictures/wallpapers-old/ili12smozv3a1.jpg --transition-type wipe --transition-angle 30 --transition-step 90 --transition-duration 5 --transition-fps 144
swww img ~/Pictures/wallpapers-old/5mc86ztlsx6a1.png --transition-type wipe --transition-angle 30 --transition-step 90 --transition-duration 5 --transition-fps 144

> # **[navi](https://github.com/denisidoro/navi)**

An interactive cheatsheet tool for the command-line.


> # **[`HYPRLAND Sweet Dreams / aurorasaurus *_*`](https://github.com/flick0/dotfiles/tree/aurora)**

---

https://www.reddit.com/r/unixporn/comments/z6s20y/hyprland_aurora_modified_my_previous_rice_to_fit/

>>> dependecies for hyprland
>>>
>>

```
yay -S xdg-desktop-portal-hyprland-git gdb ninja gcc cmake libxcb xcb-proto xcb-util xcb-util-keysyms libxfixes libx11 libxcomposite xorg-xinput libxrender pixman wayland-protocols cairo pango seatd libxkbcommon xcb-util-wm xorg-xwayland python python-pip
```

>>> for the climate temperature on waybar:
>>>
>>

`pip install requests`

> # **[konsole]()**

>for pokemon, add to config.fish for a custom cool konsole


`/home/n30/.config/fish/config.fish`

```
if status is-interactive
    # Commands to run in interactive sessions can go here
	pokemon-colorscripts -r1 --no-title &
	starship init fish | source &
	thefuck --alias | source &
 	~/.config/fish/tty.sh &  #idk what this does
end
```

> Run fastfetch if session is interactive (drawing w/ G+some info)

if status --is-interactive && type -q fastfetch
fastfetch --load-config neofetch
end

alias yayi="yay -S"
alias yayu="yay -R"


> Examining a core dump
sudo coredumpctl list
coredumpctl info 123546

```
kf.kio.core: Url QUrl konsole  already represents a local file, cancelling job.
```

# installing Hyprland

yay -S cava wlogout btop mako sox pamixer python rustup kitty fish wofi swaylockd grim slurp xdg-desktop-portal-wlr starship jq dunst wl-clipboard pokemon-colorscripts-git hyprland-git waybar-hyprland-git tty-clock-git swaylock-effects-git  waybar-mpris-git

dependecies for nawfalmrouyan's theme: mako wlogout btop

dependencies for the catppuccin theme stuff

Configuration file extras

screenshot manager, color picker, logout manager, gtk3 manager, konsole compliment

yay -S grimblast-git hyprpicker-git wlogout nwg-look thefuck

yay -S catppuccin-gtk-theme-mocha catppuccin-gtk-theme-macchiato catppuccin-gtk-theme-frappe catppuccin-gtk-theme-latte

# # or clonning manually catppuccin for hyprland

# cd ~/Downloads && git clone -b https://github.com/catppuccin/hyprland/

# cp hyprland/themes/* ~/.config/hypr/themes

# source=~/.config/hypr/mocha.conf

#laptop only? idk

# yay -S  xbacklight-auto-git xbacklight-notify

# "https://wiki.archlinux.org/title/Hyprland"" wiki says 2022-12-31:

# Note: Both xdg-desktop-portal-wlr and xdg-desktop-portal-hyprland are known to conflict with other portal implementations under Hyprland. It is recommended to remove xdg-desktop-portal-kde, xdg-desktop-portal-gnome, or xdg-desktop-portal-lxqt, if installed.

# # so:     # also because slow apps????

pacman -Q | grep xdg-desktop-portal-
pacman -Rnsdd xdg-desktop-portal-gnome    # to forcefully remove it without checking for deps.
yay -R xdg-desktop-portal-kde xdg-desktop-portal-gtk

# uninstall all but:

xdg-desktop-portal-hyprland-git (currently on 2023-01-01 is r249.e47f4ce-1)

# because:

# https://github.com/hyprwm/xdg-desktop-portal-hyprland

# "Due to reasons explained in hyprland-protocols, we have a separate desktop portal impl for Hyprland.

# Although -wlr does work with Hyprland, -hyprland offers more features.""

# time to uninstall them if any:

sudo pacman -R xdg-desktop-portal-wlr  xdg-desktop-portal-kde xdg-desktop-portal-gtk

#one command to rule them all (old):

# dbus-update-activation-environment --systemd DBUS_SESSION_BUS_ADDRESS DISPLAY XAUTHORITY SWAYSOCK & /

# dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=Hyprland & /

# systemctl --user import-environment WAYLAND_DISPLAY XDG_CURRENT_DESKTOP DBUS_SESSION_BUS_ADDRESS DISPLAY XAUTHORITY SWAYSOCK && /

# sh /home/n30/.config/hypr/scripts/portal &

# xdg-desktop-portal-hyprland WORKING! (1/2!!!)

dbus-update-activation-environment --systemd DBUS_SESSION_BUS_ADDRESS DISPLAY SWAYSOCK WAYLAND_DISPLAY XDG_CURRENT_DESKTOP && /
systemctl --user import-environment SWAYSOCK WAYLAND_DISPLAY XDG_CURRENT_DESKTOP DBUS_SESSION_BUS_ADDRESS DISPLAY && /
sh /home/n30/.config/hypr/scripts/portal & /
sleep 8 && /
systemctl --user status xdg-desktop-portal-hyprland xdg-desktop-portal && /

killall xdg-desktop-portal-hyprland xdg-desktop-portal && /
dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=Hyprland && /
systemctl --user import-environment WAYLAND_DISPLAY XDG_CURRENT_DESKTOP && /
sh /home/n30/.config/hypr/scripts/portal & /
sleep 8 && /
systemctl --user status xdg-desktop-portal-hyprland xdg-desktop-portal && /

╭─n30@n30 in /🔒 took 2ms
╰─λ systemctl --user stop xdg-desktop-portal

╭─n30@n30 in /🔒 took 4ms
╰─λ systemctl --user start xdg-desktop-portal

╭─n30@n30 in /🔒 took 24ms
systemctl --user restart xdg-desktop-portal.service
systemctl --user restart xdg-desktop-portal-hyprland.service

# TEST if they are active

systemctl --user status xdg-desktop-portal-hyprland xdg-desktop-portal
systemctl --user status xdg-desktop-portal-hyprland
systemctl --user status xdg-desktop-portal-wlr
systemctl --user status xdg-desktop-portal
ps x | grep xdg-desktop

# TEST close them and reopen them verbose

killall xdg-desktop-portal & /
killall xdg-desktop-portal-hyprland && /
/usr/libexec/xdg-desktop-portal-hyprland -l DEBUG 2>&1 | tee xdpw.log & /usr/lib/xdg-desktop-portal -vr

/usr/lib/xdg-desktop-portal-wlr -l DEBUG 2>&1 | tee xdpw.log & /usr/lib/xdg-desktop-portal -vr &

# restarting xdg-desktop-portal ONLY

killall xdg-desktop-portal && /usr/lib/xdg-desktop-portal -vr &

# TEST without DBUS_SESSION_BUS_ADDRESS

# systemctl --user import-environment WAYLAND_DISPLAY DISPLAY SWAYSOCK && /

dbus-update-activation-environment --systemd  DISPLAY SWAYSOCK WAYLAND_DISPLAY XDG_CURRENT_DESKTOP && /
systemctl --user import-environment SWAYSOCK WAYLAND_DISPLAY XDG_CURRENT_DESKTOP DISPLAY && /
systemctl --user restart xdg-desktop-portal.service && /
systemctl --user status xdg-desktop-portal-hyprland xdg-desktop-portal && /

# SWAYSOCK must be imported into the systemd user session before libinput-gestures is started. Fixed by starting libinput-gestures via the following script:

systemctl --user import-environment SWAYSOCK && systemctl --user start libinput-gestures

systemctl --user import-environment WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=Hyprland && /
systemctl --user restart xdg-desktop-portal.service && /

# GOOOOOOOOOOOOOOOOOOOOOOOOOOLD

Note that the systemctl commands must be run synchronously and cant be split into two exec statements, since otherwise the session target may be started before systemctl import-environment is complete, and services that require certain variables will fail to run.

sway --get-socketpath       # just returns SWAYSOCK if set, and nothing otherwise. Thus it does nothing more than the simple env var check right above

# https://github.com/swaywm/sway/issues/2639

// We want to use socket name set by user, not existing socket from another sway instance.
if (getenv("SWAYSOCK") != NULL && access(getenv("SWAYSOCK"), F_OK) == -1) {
        strncpy(ipc_sockaddr->sun_path, getenv("SWAYSOCK"), sizeof(ipc_sockaddr->sun_path) - 1);
        ipc_sockaddr->sun_path[sizeof(ipc_sockaddr->sun_path) - 1] = 0;
}
dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP=$compositor_name

notify-send -u "critical" -t 1000 -a "test" -h string:syncronous:volume -h int:value:20  "test"

# error on:

# xdg-desktop-portal-wlr

# warning: database file for 'DEB_Arch_Extra' does not exist (use '-Sy' to download)

# so:

# sudo pacman -Sy xdg-desktop-portal-wlr

# cloning aurora's dotfiles

# cd ~/Downloads && git clone -b aurora https://github.com/flick0/dotfiles

# cd dotfiles

# cp -r ./config/* ~/.config

---

# SWEET THEME (EliverLara)

# https://github.com/EliverLara/Sweet

# https://store.kde.org/u/eliverlara

# https://store.kde.org/p/1294011/            # Plasma Color Schemes

# https://store.kde.org/p/1294013/            # kvantum (5 files)

# https://www.opendesktop.org/p/1286856/      # Plasma Window Decorations

# https://store.kde.org/p/1294174/            # Plasma Themes

# https://store.kde.org/p/1297008/            # Konsole Color Schemes

# https://www.pling.com/p/1305251/            # Full Icon Themes #161621 #161621 e06c75

gsettings set org.gnome.desktop.interface gtk-theme "Sweet-Dark"
gsettings set org.gnome.desktop.wm.preferences theme "Sweet-Dark"

# clonning catppuccin for hyprland

cd ~/Downloads && git clone -b https://github.com/catppuccin/hyprland/
cp hyprland/themes/* ~/.config/hypr/themes

# and include the file at the top of your hyprland.conf

source=~/.config/hypr/themes/mocha.conf

# When using the colors, use $COLOR e.g. $base

# catppuccin cursors

# https://github.com/catppuccin/cursors

cd ~/Downloads && git clone https://github.com/catppuccin/cursors.git
zip xvf ~/Downloads/cursors/cursors/Catppuccin-Latte-Pink-Cursors.zip -C /usr/share/icons/

sudo cp -r -v /home/n30/Downloads/Catppuccin-Mocha-Mauve-Cursors/ /usr/share/icons/

# # or compile them:

# #     Install dependencies:        git        make        inkscape        xcursorgen

# yay -S git make inkscape xorg-xcursorgen

# #     Run the following commands as normal user:

# git clone https://github.com/varlesh/volantes-cursors.git

# cd volantes-cursors

# make build

# sudo make install

#

# Choose a theme in the Settings or in the Tweaks tool.

# get active/open window class

# since many tweaks need the window class, how can i properly get it under wayland/hyprland ?

# Optionally add -j for json output and use jq to grab the class.

hyprctl activewindow
hyprctl clients | jq -r 'fire'
hyprctl clients | grep -F "firedragon"

# +---------------------------+

# | HYPRLAND Configuration file |

# +---------------------------+

# CUSTOM binds

bind=CTRL,Delete,pkill Hyprland

# CUSTOM FIX-PERSONALIZATION

# -----------------------------------------------------------------

# neovim and other requeriments for rice

# https://github.com/iamverysimp1e/dots

yay -S nvim-nightly wl-clipboard

# not found

sudo pacman -S wlcopy

# Colot themes

# https://github.com/catppuccin/hyprland

source=~/.config/hypr/themes/mocha.conf

# Sway Color Daemon (OUTDATED)

# https://github.com/Th3Whit3Wolf/sway-colord

# curl -Lj https://github.com/Th3Whit3Wolf/sway-colord/releases/download/v0.1.2/sway-colord-0.1.2-x86_64.pkg.tar.zst -o sway-colord-0.1.2-x86_64.pkg.tar.zst

# sudo pacman -U sway-colord-0.1.2-x86_64.pkg.tar.zst

# Apps loading slow

exec-once=dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP

---

> # `waybar`

---

>>> Is there anty way I can target icons only with CSS? Often it's simply a matter of increasing their font size, but if I can't target only icons then text becomes massive in comparison.
>>> https://github.com/Alexays/Waybar/issues/350
>>>
>>

https://www.chordpro.org/chordpro/pango_markup/

```
"format": "<span font='12'>{icon}</span> {capacity}%"
"<span font='22' rise='-1000'></span> ~ {}"
```
>>> waybar aurora restart
>>>
>>

```
killall -q waybar & sleep 3 && waybar -c $HOME/.config/hypr/component/waybar/config -s $HOME/.config/hypr/component/waybar/style.css &
```
>>> [multiple instances of a module](https://github.com/Alexays/Waybar/wiki/Configuration#multiple-instances-of-a-module)
>>>
>>

---

> # `megasync`

---

```
cd ~/Downloads && \
wget https://mega.nz/linux/repo/Arch_Extra/x86_64/megasync-4.8.1-1-x86_64.pkg.tar.zst && \
wget https://mega.nz/linux/repo/Arch_Extra/x86_64/thunar-megasync-4.3.0-1-x86_64.pkg.tar.xz
```
>>> TODO: investigate wildcards with these or curl
>>>
>>

`/usr/local/bin/wget -r -l1 -np "https://mega.nz/linux/repo/Arch_Extra/x86_64" -P ~/Downloads -A "megasync-*x86_64.pkg.tar.zst"`

>>> manuall install (maybe outdated packages):
>>>
>>

```
sudo pacman -U megasync-4.8.1-1-x86_64.pkg.tar.zst thunar-megasync-4.3.0-1-x86_64.pkg.tar.xz
```
---

> # `shutdown`

---

```
yay -S pm-utils
```
###### **systemctl suspend** – Use systemd to suspend/hibernate from command line on Linux. Most modern Linux distro only needs to use the systemctl command.

###### **pm-suspend** – During suspend most devices are shutdown, and system state is saved in RAM. The system still requires power in this state. Most modern systems require 3 to 5 seconds to enter and leave suspend, and most laptops can stay in suspend mode for 1 to 3 days before exhausting their battery.

###### **pm-hibernate** – During hibernate the system is fully powered off, and system state is saved to disk. The system does not require power, and can stay in hibernate mode indefinitely. Most modern systems require 15 to 45 seconds to enter and leave hibernate, and entering and leaving hibernate takes longer when you have more memory.

###### **pm-suspend-hybrid** – Hybrid-suspend is the process where the system does everything it needs to hibernate, but suspends instead of shutting down. This means that your computer can wake up quicker than for normal hibernation if you do not run out of power, and you can resume even if you run out of power.

>>> [How to shutdown Linux at specific datetime from terminal?](https://unix.stackexchange.com/questions/120506/how-to-shutdown-linux-at-specific-datetime-from-terminal)
>>>
>>

`shutdown -h 21:45`

# apfs ?
- configurig default terminal

sudo nano ~/.config/xfce4/helpers.rc
TerminalEmulator=terminal

- mounting apgs

apfs-fuse -o allow_other /dev/sda2 /media/<your userame>/macos

# MOUNTING NVME SSD BLACKY
---

## 1. list down all the file systems by using this command

`lsblk -l`

## 2. let's do this then: sudo mount NameOfFileSystem MountPoint

sudo mount /dev/nvme1n1p1 /run/media/n30/BLACKY01
sudo umount /dev/nvme0n1p1

## 3. mount it at the startup

### Or use these:
cat -n /etc/fstab

sudo fdisk -l

sudo /sbin/tune2fs -l /dev/nvme0n1p4
sudo /sbin/tune2fs -l /dev/nvme1n1p1

### quick check for UUID:
`ls -l /dev/disk/by-uuid/`

lrwxrwxrwx 15 root  3 Jul 15:11  2cb20563-653d-4639-bf5e-5e29265701b6 -> ../../nvme1n1p2
lrwxrwxrwx 10 root  3 Jul 15:11  3C8244DC82449BF0 -> ../../sdd1
lrwxrwxrwx 15 root  3 Jul 15:11  6C74-DE17 -> ../../nvme0n1p5
lrwxrwxrwx 10 root  3 Jul 15:11  22F0633DF0631677 -> ../../sdc1
lrwxrwxrwx 10 root  3 Jul 15:11  67E3-17ED -> ../../sda1
lrwxrwxrwx 10 root  3 Jul 15:11  280c85d9-c8c8-432a-b459-2f169c416f95 -> ../../sdc2
lrwxrwxrwx 10 root  3 Jul 15:11  906E7C4B6E7C2BDA -> ../../sdd2
*lrwxrwxrwx 10 root  3 Jul 09:18  6483-8269 -> ../../sda2*
lrwxrwxrwx 10 root  3 Jul 15:11  78446E0B446DCC86 -> ../../sdc3
lrwxrwxrwx 10 root  3 Jul 15:11  54737788-bb74-406c-88dc-e11b91cba5e3 -> ../../dm-0
lrwxrwxrwx 15 root  3 Jul 15:11  aa27fbc1-e070-462d-8fee-db605f5b64c8 -> ../../nvme2n1p2
lrwxrwxrwx 10 root  3 Jul 15:11  c2d95b30-e64e-45b6-9c68-5047eac1cff1 -> ../../dm-1
lrwxrwxrwx 15 root  3 Jul 15:11  ca984f99-d5d8-4c8c-bf53-9408b0a19eb0 -> ../../nvme0n1p3
lrwxrwxrwx 10 root  3 Jul 15:11  cda85eef-453b-4257-ae76-c76d6ffc5daa -> ../../sdd4
lrwxrwxrwx 15 root  3 Jul 15:11  cf42ea71-973a-47cd-ab6e-7e0e167fa934 -> ../../nvme0n1p4
lrwxrwxrwx 15 root  3 Jul 15:11  d42eba7e-8331-4f0c-8dcf-c6059b345be1 -> ../../nvme1n1p3
lrwxrwxrwx 15 root  3 Jul 15:11  fb9178f5-508e-45ae-a900-61c2f9bbd6cf -> ../../nvme0n1p1
lrwxrwxrwx 10 root  3 Jul 15:11  FE6CE0756CE029DB -> ../../sdd3
lrwxrwxrwx 15 root  3 Jul 15:11  FE541A335419EEE1 -> ../../nvme0n1p2

### very visual way:
`lsblk -f`

NAME FSTYPE FSVER LABEL                     UUID                                   FSAVAIL FSUSE% MOUNTPOINTS
sda                                                                                               
├─sda1
│    vfat   FAT32 EFI                       67E3-17ED                                             
└─sda2
     exfat  1.0   chivos_4t                 6483-8269                                 3.4T     7% /run/media/n30/chivos_4t


### another option, messy tho:
`blkid`:

/dev/sda2: *LABEL="chivos_4t" UUID="6483-8269"* BLOCK_SIZE="512" TYPE="exfat" PARTUUID="ce0226f9-8128-42b0-b40c-40f416ee03f8"
/dev/sda1: LABEL_FATBOOT="EFI" LABEL="EFI" UUID="67E3-17ED" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="3c9e98ab-6bfd-4967-9d7b-aaef8edd0398"
/dev/zram0: LABEL="zram0" UUID="39231984-0c1a-4865-b7f3-db863ab15fb2" TYPE="swap"

### concise way when you know the device:
`blkid /dev/sda2`
/dev/sda2: LABEL="chivos_4t" UUID="6483-8269" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="ce0226f9-8128-42b0-b40c-40f416ee03f8"

## 4. let's edit fstab:
`sudo nano /etc/fstab`

UUID=98265bf8-8c98-4a94-b708-c150a40606b3 /run/media/n30/BLACKY01 ext4 defaults 0 0
UUID=cf42ea71-973a-47cd-ab6e-7e0e167fa934 /run/media/n30/nvme_chivos ext4 defaults 0 0
UUID=6483-8269       /run/media/n30/chivos_4t ext4 defaults 0 0

## 5. We always want to test the fstab before rebooting (an incorrect fstab can render a disk unbootable).  To test do:

findmnt --verify
systemctl daemon-reload


## yapoa

GPT PMBR size mismatch (4294967294 != 7814037167) will be corrected by write.
Disk /dev/sda: 3.64 TiB, 4000787030016 bytes, 7814037168 sectors
Disk model: WDC WD42PURZ-85B
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: gpt
Disk identifier: DEBCEBE1-9485-4DC0-8CDE-CE87F968D1F6


# AMD
---

Dealing with display
check if the kernel headers are compiled.

modinfo -F version amdgpu

# which session? wayland or xorg11?

echo $XDG_SESSION_TYPE

#check wich is running:
lspci -nnk | grep -iA2 vga

#Checking if is already on (should'nt be)-->
lsmod | grep amdgpu

# for a far more complete info:

inxi -Fxxxrz

# nvidia-smi

xrandr
xrandr --listmonitors

# INSTALLING AMD RADEON 6650

# https://wiki.archlinux.org/title/AMDGPU#Selecting_the_right_driver

# opensource

#sudo pacman -S mesa lib32-mesa xf86-video-amdgpu vulkan-radeon

# INSTALLING AMD RADEON 6650 automatically

# sudo mhwd -a [pci or usb connection] [free or nonfree drivers] 0300

sudo mhwd -a pci free 0300

# removing useless directories *maybe* generating warnings:

sudo rm -r /var/lib/mhwd/local/pci/video-nvidia-dkms/
cd /var/lib/mhwd/db/pci/graphic_drivers/
sudo rm -r nvidia*
sudo rm-r optimus*

# it's nvidia crap around? check w/:

ls /etc/modprobe.d
lsmod | grep nvidia

# install AMDGPU_PRO (propietary) (WORSE than open source?)

# https://wiki.archlinux.org/title/AMDGPU_PRO

# sudo pacman -S amdgpu-pro-libgl lib32-amdgpu-pro-libgl vulkan-amdgpu-pro lib32-vulkan-amdgpu-pro amf-amdgpu-pro obs-studio-amf

# installing nouveau instead of amd (for generic support). INCOMPLETE

# sudo pacman -S xf86-video-nouveau and nouveau-dri if you want, libgl.

#nuke /etc/X11/xorg.conf
sudo cp /etc/X11/xorg.conf /etc/X11/xorg.conf.backup && sudo rm /etc/X11/xorg.conf
reboot

# How to ensure you are using AMDGPU driver

glxinfo | grep "OpenGL vendor string" | cut -f2 -d":" | xargs

# If it returns AMD, then you are running open source driver. If it returns Advanced Micro Devices, Inc., then you are running proprietary driver.

# more info

sudo lspci -v -k | sed -n "/VGA compatible controller/,/Kernel modules/p"
#this shouln't output anything:
lsmod | grep -i nvidia

# here it is the drivers folder:

cd /usr/lib/xorg/modules/drivers/ && ls

# if there are any nvidia related packages still installed, this will find those dependencies:

sudo pacman -Qs nvidia
#or
pacman -Q | grep nvidia

# If there are no nvidia packages installed you can remove /etc/modprobe.d/nouveau.conf it would have been overriding /usr/lib/modprobe.d/nvidia.conf owned by the nvidia package.

cd /usr/lib/modprobe.d/ && ls

# moar info

inxi -Faz

# checking the grub

grep CMDLINE /etc/default/grub
#checking dmesg
sudo dmesg | grep -E 'amdgpu|gpu|amd|ati|radeon|pcie|PCIe'
sudo dmesg | grep radeon
sudo dmesg | grep gpu
sudo dmesg | grep amdgpu
sudo dmesg | grep nvidia

# it's nvidia crap around? check w/:

ls /etc/modprobe.d
lsmod | grep nvidia

# to enable FreeSync, please run the following  command:

DISPLAY=:0 xrandr --output DisplayPort-0 --set "freesync" 1
#disabling it:
DISPLAY=:0 xrandr --output DisplayPort-# --set "freesync" 0
******** where # is your display's number (e.g., DisplayPort-0).

# TEST

https://www.vsynctester.com/
https://www.displayhz.com/

mpv Config for crop the video
-----------------------------

# cropping:

# https://www.reddit.com/r/mpv/comments/napl9e/hotkey_to_change_crop_the_video_to_full_screen/

# On default config alt + (alt shift =) zooms in the video and alt - zooms out.

# or:

~/.config/mpv/input.conf

# on your numpad keys, 7 zooms the video and 1 unzooms it, 9 and 3 changes the aspect ratio, 4, 8, 6 and 2 moves the video left, up, right and down, 5 resets everything

# put these lines in it and save:

KP7 add video-zoom .02
KP1 add video-zoom -.02
KP8 add video-pan-y -.02
KP6 add video-pan-x .02
KP2 add video-pan-y .02
KP4 add video-pan-x -.02
KP9 add video-aspect +0.04
KP3 add video-aspect -0.04
KP5 set video-pan-x 0; set video-pan-y 0; set video-zoom 0; set video-aspect 0

# or use a script like this:

https://github.com/mpv-player/mpv/blob/master/TOOLS/lua/autocrop.lua

# which automatically removes black bars for any video at runtime, put it in the scripts folder (make it if its not already there) located in

~/.config/mpv/scripts/

# mpv hardware aceleration

sudo nano ~/.config/mpv/mpv.conf

# WARNING inside it put those values FOR NVIDIA ONLY

vo=gpu
hwdec=nvdec
profile=gpu-hq
gpu-context=x11

#Launch CoreCtrl on session startup for undervolting

# Execute this command on a terminal:

cp /usr/share/applications/org.corectrl.corectrl.desktop ~/.config/autostart/org.corectrl.corectrl.desktop

# Don't ask for user password

#

# CoreCtrl uses a helper with root privileges to control your system. In order to start the helper, the system will ask you to enter your user password. If you want to avoid being asked every time for your password, you can grant root access to the helper permanently.

#

# First, check your polkit version using the command:

pkaction --version

# Polkit version >= 0.106

# Create the file /etc/polkit-1/rules.d/90-corectrl.rules with the following contents:

sudo nano /etc/polkit-1/rules.d/90-corectrl.rules

polkit.addRule(function(action, subject) {
if ((action.id == "org.corectrl.helper.init" ||
action.id == "org.corectrl.helperkiller.init") &&
subject.local == true &&
subject.active == true &&
subject.isInGroup("your-user-group")) {
return polkit.Result.YES;
}
});

# Full AMD GPU controls

#

# Currently, to have full control of your AMD GPU while using the amdgpu driver, you need to append the boot parameter amdgpu.ppfeaturemask=0xffffffff to your bootloader configuration and reboot.

#

# NOTE: The following instructions are for guidance only. Check your distribution documentation on how to add a boot parameter before proceed.

#

# If your system uses Grub, edit the file (as root) /etc/default/grub and append the parameter to GRUB_CMDLINE_LINUX_DEFAULT:

sudo nano /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT="<other_params>... amdgpu.ppfeaturemask=0xffffffff"
GRUB_GFXMODE=1024x768x32,auto

# Then regenerate (as root) the bootloader configuration file with the command:

sudo grub-mkconfig -o /boot/grub/grub.cfg

shutdown -r now

# Reboot your system. You should have more controls when you select Advanced as Performance mode.

# FPS HUD OVERLAY

sudo pacman -S mangohud lib32-mangohud goverlay-git
#for use it:
mangohud /path/to/app

#for steam launch options
mangohud %command%

╭─n30@n30 in ~
╰─λ cp /usr/share/applications/org.corectrl.corectrl.desktop ~/.config/autostart/org.corectrl.corectrl.desktop

╭─n30@n30 in ~
╰─λ cp /usr/share/applications/copyq.desktop ~/.config/autostart/copyq.desktop
cp: cannot stat '/usr/share/applications/copyq.desktop': No such file or directory

╭─n30@n30 in ~
[🔴] × cp /usr/share/applications/com.github.hluk.copyq.desktop ~/.config/autostart/copyq.desktop

# HYPRLAND cyber *_*

---

## 1. Install an AUR Helper (if necessary):

sudo pacman -S base-devel git
git clone https://aur.archlinux.org/yay
cd yay
makepkg -si

## 2. Install all required dependencies

yay -S hyprland-git eww dunst trayer mpvpaper macchina nitch nerd-fonts-inter socat

rofi-lbonn-wayland-git
#error
rofi-lbonn-wayland geticons

## 3. Clone the repository

cd ~/Downloads && git clone https://github.com/taylor85345/garden-hyprland-dotfiles.git

mkdir ~/.config/hypr/themes && cd ~/.config/hypr/themes && git clone https://github.com/taylor85345/cyber-hyprland-theme cyber

## 4. Copy dotfiles into your config directory (assumptions made).

cp -ri garden-hyprland-dotfiles/* $HOME/.config/


> # **[swayidle]()**
exec-once= swayidle -w \
timeout 120 'hyprctl dispatch dpms off' \
resume 'hyprctl dispatch dpms on' \
# before-sleep '$lock' \
# after-resume '$test'

swayidle -w timeout 1 'hyprctl dispatch dpms off' resume '
hyprctl dispatch dpms on'

[Splitting a long line in hyprland.conf config file](https://www.reddit.com/r/hyprland/comments/141nbr6/comment/jqk2ep2/?context=3)
https://www.bing.com/search?q=backslash&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=backslash&sc=10-9&sk=&cvid=ABE58AA3398B48519C8DEEB75A8F1402&ghsh=0&ghacc=0&ghpl=
https://www.thesaurus.com/e/grammar/slash/


## config directories:
$XDG_CONFIG_HOME/swayidle/config
$HOME/swayidle/config

## test example:
swayidle -dw timeout 1 'hyprctl dispatch dpms off' resume 'hyprctl dispatch dpms on'

## troubleshot:
`swayidle-git`gives error:
hyprland [Line 1074] Compositor doesn't support idle protocol



# SWAY (meh)
---
```
sudo pacman -S sway sway-git-debug sway-launcher-desktop swaybg swayidle swaylock-effects garuda-sway-settings autotiling grimshot i3status-rust-git nwg-bar nwg-dock nwg-drawer nwg-launchers nwg-menu wf-recorder swayidle swaybg
```

## error: target not found:

`nwg-panel redshift-wayland-git`

## [grubvox spanish](https://github.com/lolplayer69420/Mis-dots)


## [grubvox first](https://github.com/zoro11031/dotfiles-public)
- [reddit](https://www.reddit.com/r/unixporn/comments/y02asy/sway_gruvbox/)

- dependecies for theme

  ```
  sudo pacman -S sqlite  bat exa ripgrep  skim sxiv mpv imagemagick
  sudo pacman -S wezterm waybar zsh neovim
  ```

## not found

fd-find = fd?

## Desktop environment setup

```
sudo pacman -S sway rofi waybar luajit slurp grim light playerctl pulseaudio-utils wl-clipboard papirus-icon-theme
```

# +---------------------------+

# | SwayWM Configuration file |

# +---------------------------+
```
# KP_Begin	84	65437	The center key (same key as 5) on the keypad
# KP_Decimal	91	65439	Decimal (.) on the keypad
# KP_Delete	91	65439	delete on the keypad
# KP_Divide	112	65455	/ on the keypad
# KP_Down	88	65433	↓ on the keypad
# KP_End	87	65436	end on the keypad
# KP_Enter	108	65421	enter on the keypad
# KP_Home	79	65429	home on the keypad
# KP_Insert	90	65438	insert on the keypad
# KP_Left	83	65430	← on the keypad
# KP_Multiply	63	65450	× on the keypad
# KP_Next	89	65435	PageDown on the keypad
# KP_Prior	81	65434	PageUp on the keypad
# KP_Right	85	65432	→ on the keypad
# KP_Subtract	82	65453	- on the keypad
# KP_Up	80	65431	↑ on the keypad
# XF86Calculator
### Key bindings (REMEMBER)
# $mod+Shift+c reload
# Alt+space exec $menu
# $mod+tab workspace back_and_forth
# CUSTOM:
#
exec swayidle -w
timeout 2 'swaymsg "output * dpms off"'
resume 'swaymsg "output * dpms on"'
bindsym {
# Konsole:
Ctrl+$mod+Alt+t exec konsole
}
```

# **[watershot](https://github.com/Kirottu/watershot)**
watershot -c path ~/Pictures/Screenshots/ss_$Y-$M-$D_$h-$m_$s_garuda.png directory ~/Pictures/Screenshots/ss_$Y-$M-$D_$h-$m_$s_garuda.png



# **[ksnip](https://github.com/ksnip/ksnip)**
ss_$Y-$M-$D_$h-$m_$s_garuda.png

## Imgur API
### Register an Application (IMPORTANT)
Each client must register their application and receive the client_id and client_secret.

For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests. This also works if you'd like to upload images anonymously (without the image being tied to an account), or if you'd like to create an anonymous album. This lets us know which application is accessing the API.
Plain Text

Authorization: Client-ID

Registration Quickstart
If you are just getting started, an easy way to explore the endpoints is by creating an application using following instructions below.

    1. Download/Register/Sign-up on [Postman](https://www.postman.com/) and click the **Run in Postman** button at the [top of this page](https://apidocs.imgur.com/). This will load our collection of endpoints into Postman for easy debugging.
    2. Import the data to "[My workspace](https://gold-equinox-599447.postman.co/workspace/My-Workspace~384271e5-ee01-4eb7-89aa-5fe39e7fe597/collection/27179996-d64957ce-9b8b-4d89-9944-2998884e12b2)"
    3. [Register your application](https://api.imgur.com/oauth2/addclient) (named ksnip)using the "Authorization callback URL" postman callback URL: https://www.getpostman.com/oauth2/callback
    4. In Postman, under the main request builder panel, click the Authorization tab. Click the Get New Access Token button. Set Auth URL to https://api.imgur.com/oauth2/authorize and Access Token URL to https://api.imgur.com/oauth2/token. Add the Client ID and Client Secret you received from registering your application above, then click Request Token
    5. After logging in and granting access to your application, you should receive a refresh token.
    6. Copy this refresh token, then click the gear icon in the top right of Postman. Click Manage Environments then Add, and add the refreshToken, clientId, and clientSecret fields as shown below
    7. 
    8. Inside the Account folder, run the Generate Access Token endpoint. The response you receive will give you an access token which will be valid for about a month. This token is automatically saved to your Postman environment via the JavaScript test for that endpoint as seen below. Whenever your token expires, just re-run this endpoint and a new token will be saved to your environment.
    Run any endpoint within the collection. You have authorized your app and logged in with your username, so you are now making authenticated requests against the Imgur API. Happy hacking!


# **[flameshot]()**
Screenshot


## compile from source:
```
mkdir --parents ~/tmp/flameshot_source/ && \
cd ~/tmp/flameshot_source/  && \
git clone https://github.com/flameshot-org/flameshot.git

mkdir build  && \
cd build  && \
cmake -S ./ \
-DCMAKE_INSTALL_PREFIX=/usr/local ../ \
-DUSE_WAYLAND_CLIPBOARD=1 \
-DUSE_WAYLAND_GRIM=true

make
```

```
env XDG_CURRENT_DESKTOP=sway \
XDG_SESSION_DESKTOP=sway \
QT_QPA_PLATFORM=wayland \
flameshot gui
```
```
╰─λ flameshot -v
Flameshot v12.1.0 (3ededae5)
Compiled with Qt 5.15.8
flameshot: warning: If the USE_WAYLAND_GRIM option is not activated, the dbus protocol will be used. It should be noted that using the dbus protocol under wayland is not recommended. It is recommended to recompile with the USE_WAYLAND_GRIM flag to activate the grim-based general wayland screenshot adapter
QLayout: Attempting to add QLayout "" to SidePanelWidget "", which already has a layout
qt.qpa.wayland: Wayland does not support QWindow::requestActivate()
qt.qpa.wayland: Wayland does not support QWindow::requestActivate()
qt.qpa.wayland: Wayland does not support QWindow::requestActivate()
flameshot: info: Capture saved as /home/n30/Pictures/Screenshots/ss-2023-02-19_11-5004_garuda.png

________________________________________________________
Executed in    8.19 secs    fish           external
usr time    2.97 secs  242.00 micros    2.97 secs
sys time    0.07 secs   35.00 micros    0.07 secs
```
>>> Capture a region using the GUI, and have it automatically saved to your pictures folder when clicking the save button in GUI
>>>
>>

```
flameshot gui --path /home/user/Pictures
```
>>> Capture the active monitor and save it automatically to your pictures folder
>>>
>>

```
flameshot screen --path /home/user/Pictures
```
>>> Capture the full desktop (all monitors) and save it automatically to your pictures folder
>>>
>>

```
flameshot full --path /home/user/Pictures
```
>>> Capture the region, copy to clipboard and at the same time write to file and pin the image
>>>
>>

```
flameshot gui --clipboard --pin --path ~/Pictures
```
env XDG_CURRENT_DESKTOP=sway XDG_SESSION_DESKTOP=sway QT_QPA_PLATFORM=wayland flameshot gui

## alternatives:

* [swappy](https://github.com/jtheoof/swappy)
  A Wayland native snapshot and editor tool, inspired by Snappy on macOS. Works great with grim, slurp and sway

```
grim -g "$(slurp)" - | swappy -f -
```

* [shotman](https://git.sr.ht/~whynothugo/shotman)


```
cd ~/Documents/forks
git clone https://git.sr.ht/~whynothugo/shotman
cargo build --release
```
The resulting binary will be located in ./target/release/shotman. Copy this into your $PATH.

'/home/n30/Documents/forks/shotman/target/release/shotman' --capture region



* [Hyprshotgun](https://github.com/Zeioth/hyprshotgun/blob/main/hyprshotgun)


* [Hyprshot](https://github.com/Gustash/Hyprshot)

set HYPRSHOT_DIR /home/n30/Pictures/Screenshots/
set XDG_PICTURES_DIR /home/n30/Pictures/
  - Screenshot a window
  bind = $mainMod, PRINT, exec, hyprshot -m window
  - Screenshot a monitor
  bind = , PRINT, exec, hyprshot -m output
  - Screenshot a region
  bind = $shiftMod, PRINT, exec, hyprshot -m region

Usage: hyprshot [options ..] -m [mode] -- [command]
Options:
-h, --help            show help message
-m, --mode            one of: output, window, region
-o, --output-folder   directory in which to save screenshot
-f, --filename        the file name of the resulting screenshot
-d, --debug           print debug information
-s, --silent          don't send notification when screenshot is saved
--clipboard-only      copy screenshot to clipboard and don't save image in disk
-- [command]          open screenshot with a command of your choosing. e.g. hyprshot -m window -- mirage
Modes:
output                take screenshot of an entire monitor
window                take screenshot of an open window
region                take screenshot of selected region

* [haruhishot](https://github.com/Decodetalkers/haruhishot)
* [sway-interactive-screenshot](https://github.com/moverest/sway-interactive-screenshot)
* [wayland-screenshot](https://github.com/onokatio/wayland-screenshot)
  looks lame
* [Watershot](https://github.com/Kirottu/watershot)

# rice bspwm polybar

---

1. First of all we need yay and git
   pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
2. Install Dependencies:

# A one time command to install most of these dependencies with your favorite AUR Helper.

yay -S bspwm polybar sxhkd eww dunst rofi lsd jq checkupdates-aur
playerctl mpd ncmpcpp mpc picom-arian8j2-git xtitle termite betterlockscreen
ttf-jetbrains-mono nerd-fonts-jetbrains-mono ttf-terminus-nerd ttf-inconsolata
ttf-joypixels nerd-fonts-cozette-ttf scientifica-font
feh pamixer libwebp webp-pixbuf-loader xorg-xkill papirus-icon-theme

# for xwinfo dependecies

yay -S libxcb xcb-util-wm

3. Cloning Dotfiles & Installing:
   git clone --depth=1 https://github.com/gh0stzk/dotfiles.git

# ⚠️ Backuupp!! your filess!!!

[ -e ~/.config/bspwm ] && mv ~/.config/bspwm ~/.config/bspwm-backup-"$(date +%Y.%m.%d-%H.%M.%S)"
[ -e ~/.config/termite ] && mv ~/.config/termite ~/.config/termite-backup-"$(date +%Y.%m.%d-%H.%M.%S)"

# Moving new files to .config

cd dotfiles
cp -r config/bspwm ~/.config/bspwm
cp -r config/termite ~/.config/termite

# Those were the important ones. You still need to move the remaining directories in config to your ~/.config directory.

# Move Fonts and the other stuff

cp -r misc/fonts/* ~/.local/share/fonts/
cp -r misc/bin ~/.local/
cp -r misc/applications ~/.local/share/
cp -r misc/asciiart ~/.local/share/
fc-cache -rv

# You probably MUST use your own .zsh config, but if you want to use mine, do;

cp -r home/.zshrc ~/.zshrc
cp -r config/zsh ~/.config/zsh

# If you will not use my zsh config, just add to your .zshrc file, this;

if [ -d "$HOME/.local/bin" ] ;
then PATH="$HOME/.local/bin:$PATH"
fi

4. Enabling Services

# For automatically launching mpd on login

systemctl --user enable mpd.service
systemctl --user start mpd.service

5. You can tell the getty which user it should login as. https://wiki.archlinux.org/index.php/Getty#Automatic_login_to_virtual_console

   systemctl edit getty@tty1

[Service]
ExecStart=
ExecStart=-/usr/bin/agetty --autologin username --noclear %I $TERM

6. Combine this with xinit to login to bspwm from boot.
   https://wiki.archlinux.org/index.php/Xinit#Autostart_X_at_login

# [vscode VISUAL STUDIO CODE]()

---
- ## Configure Visual Studio code to use fish shell

    Open User Settings or shortcut key `[Control + ,]`
    Copy following User Settings to configure Visual studio code to use fish shell as default:

  `"terminal.integrated.shell.linux": "/usr/bin/fish" `
  Terminal > External

- ## Changing the default path of Visual Studio Code's integrated terminal
  go to: `Menu File → Preferences → Settings`
  using the "Search Settings" bar across the top of the window paste or type this:  `terminal.integrated.cwd` and set whatever path you need.


- ## Set `Jetbrain Mono Font` in Visual Studio Code

  - In VS Code, use the command palette (ctrl + shift + p) to open the JSON version of the editor’s settings.

  - Then set the editor.fontFamily setting to JetBrains Mono and if you want the awesome ligatures as well, set editor.fontLigatures to true:
    ```
    "editor.fontFamily": "JetBrains Mono",
    "editor.fontLigatures": true,
    ```
  - Save the file

- ## still not showing the propper unicode?

  - Try moving the files to (create the directory if it doesn't exist) on:

  ~/.local/share/fonts/
  /usr/share/fonts/

  - then run  to refresh the fonts

  fc-cache -fv

  - restart vscode

  - if not working, restart linux

- change default browser to firedragon

  - install extension "Live Server"

  - open configurations, press Ctrl + ,

  - search for "browser" on the extension configurations

  - Live Server › Settings: Custom Browser = NULL

  - Live Server › Settings: Advance Custom Browser = "Edit in settings.json" then edit these line:

    `"liveServer.settings.AdvanceCustomBrowserCmdLine": "firedragon",`

- ############### Run selected text ####################

  To use the runSelectedText command, select text in an editor and run the command Terminal: Run Selected Text in Active Terminal via the Command Palette (Ctrl+Shift+P), the terminal will attempt to run the selected text. If no text is selected in the active editor, the entire line that the cursor is on will run in the terminal.

- word/line wrap

  `alt + Z`

- transparent

  to your `/etc/pacman.conf`:

```
[archlinuxcn]
Server = https://repo.archlinuxcn.org/$arch

garuda-update && sudo pacman -S archlinuxcn-keyring

yay -S archlinuxcn/code-transparent
```

## Troubleshooting


https://aur.archlinux.org/cgit/aur.git/tree/code-transparent.install?h=code-transparent

If Code is not shown transparent:
1. Ensure color setting of Code is configured with transparent colors. (See "Config" section below)

~/.config/Code - OSS/User/settings.json

2. Ensure your compositor has transparency enabled.

3. Open a second Code window. (Sometimes works)

## Configs

Although Code is transparency-enabled, Code needs to be configured with transparent colors to see the transparency effect. You can configure each color by yourself, or start with an already transparent color config. Consider copying below color config to your Code `settings.json`:

```
{
"window.zoomLevel": 1,

"workbench.colorCustomizations": {
// non-standard, transparency patched version only
"workbench.background": "#00000080",

// VSC colors
// ref: https://code.visualstudio.com/api/references/theme-color
"activityBar.background": "#46575e5e",
"button.background": "#00000040",
"button.hoverBackground": "#00000080",

"editor.background": "#00000029",
"editor.lineHighlightBackground": "#FFFFFF15",
"editorGroupHeader.tabsBackground": "#00000050",
"tab.activeBackground": "#00000080",
"tab.inactiveBackground": "#00000020",
"tab.border": "#00000000",

"list.activeSelectionBackground": "#00000040",
"list.hoverBackground": "#00000040",
"list.inactiveSelectionBackground": "#00000040",

"panel.background": "#00000080",
"panel.border": "#00000000",

"sideBar.background": "#00000080",
"sideBarSectionHeader.background": "#00000000",

"statusBar.background": "#00000080",
"statusBar.noFolderBackground": "#00000080",
"terminal.background": "#0000",
"titleBar.activeBackground": "#00000030"
},

"workbench.colorTheme": "Sweet Dracula Monokai",
"editor.wordWrap": "on",
"files.autoSave": "afterDelay",

"debug.javascript.defaultRuntimeExecutable": {

"pwa-node": "node",
},
"liveServer.settings.AdvanceCustomBrowserCmdLine": "firedragon",

"terminal.integrated.fontFamily": "JetBrainsMono Nerd Font",
"terminal.integrated.fontSize": 16,
"editor.fontFamily": "JetBrainsMono Nerd Font",
"editor.fontSize": 15,
"editor.fontLigatures": true, // TODO, maybe true? idk
}
```
## base-devel package group fully installed, also git

sudo pacman -S --needed base-devel
sudo pacman -S git

## let's clone AUR repository

```
cd ~/Downloads && git clone https://AUR.archlinux.org/visual-studio-code-bin.git

cd visual-studio-code-bin/ && makepkg -s

#Now run the following command to install the generated pacman package:
sudo pacman -U visual-studio-code-bin-*.pkg.tar.zst

#cleaning up the mess
cd ../ && sudo rm -rfv visual-studio-code-bin/
```

## Selecting the Color Theme

In VS Code, open the Color Theme picker with File > Preferences > Color Theme. Or Ctrl+K Ctrl+T to display the picker.
Use the cursor keys to preview the colors of the theme.
Select the theme you want and press Enter.

## Color Themes from the Marketplace
You can search for themes in the Extensions view (Ctrl+Shift+X) search box using the @category:"themes" filter.

# [GRUB]()

---

## Tips

- To extract the tar file use `tar -xvf pentract.tar.xz` Or else use the unzip filename command to extract the zip file.

- To customize the font colors edit the color property in the theme.txt file

- In case of permission denied right click and change the property of install.sh file to enable and run as program option.

Then re-run the install.sh script

- Press C in the grub bootloader screen and type vbeinfo to know the supported resolutions of the system.

- Modify grub bootloader screen resolution:

- First type sudo nano /etc/default/grub in the terminal

- Find the line #GRUB_GFXMODE=640x480 which is the default resolution

- Then remove the # and change the 640x480 with your preferred mode

Example GRUB_GFXMODE=1280x960

- Save it by pressing Ctrl+o and exit Ctrl+x

- Then type sudo update-grub


## Themes:

1. Choose one:
   - [Pentract](https://github.com/sarancodes/pentract-grub-theme)

   cd ~/Downloads && wget https://github.com/sarancodes/pentract-grub-theme/archive/refs/heads/main.zip && unzip main.zip

   To uninstall use sudo ./uninstall.sh command

   - [MINECRAFT](https://github.com/Lxtharia/minegrub-theme)

   cd /boot/grub/themes/ && sudo git clone https://github.com/Lxtharia/minegrub-theme.git

   change/add this line in your /etc/default/grub:
   GRUB_THEME=/boot/grub2/themes/minegrub-theme/theme.txt

   sudo grub-mkconfig -o /boot/grub2/grub.cfg

   - [CyberRe 1.0.0](https://store.kde.org/p/1420727)
   mv /home/n30/Downloads/CyberRe /boot/grub/themes/

2. Edit grub txt and add:

    ```
    sudo nano /etc/default/grub
    GRUB_THEME=/boot/grub/themes/CyberRe/theme.txt
    GRUB_GFXMODE="1920x1080x32"
    ```
3. "Garuda Boot" to remove splash screen (ugh!) and then apply, this should update the grub.

4. Maybe force it to update is neccesary?

    sudo update-grub

5. Maybe rebuild grub?

    sudo grub2-mkconfig -o /etc/grub2-efi.cfg --> reconfigure

# [VIDEO PLAYER KEYS](https://mpv.io/manual/master/)


Shift + W	Increase the picture cropping for the currently playing media.
W	Decrease the picture cropping for the currently playing media.
V	Either display or hide subtitles for the currently playing media.
J	Select the next subtitle file available.

# [Brave]() (from Microsoft)
brave://flags/#enable-system-notifications
brave://flags/#enable-force-dark *simple HSL*


# [EDGE]() (from Microsoft)
- JetBrainsMono Nerd Font

edge://flags/#enable-system-notifications
edge://flags/#enable-force-dark

# [FIREDRAGON]() (or firefox)

## Cleaning

~/.firedragon
~/.mozilla/firefox

## General
- JetBrainsMono Nerd Font
  1. yay -S ttf-jetbrains-mono-nerd

  2. about:preferences

  3. search "font"

  4. use JetBrainsMono Nerd Font

- Loading ALL TABS at the beginning
    ```
    about:preferences
    General > Startup
    Open previous windows and tabs  # check this option
    ``` 


- Disable custom fonts: 

  Go to the Firefox menu and select "Options" or "Preferences". Then, click on the "Language and Appearance" tab and scroll down to the "Fonts and Colors" section. Click on the "Advanced" button next to "Fonts" and uncheck the box next to `"Allow pages to choose their own fonts, instead of my selections above"`. This works for todoist spaced font for example.

- To check whether [Firefox is reading your system time properly](https://support.mozilla.org/en-US/questions/1253204), Open Firefox's Web Console using either:

      - "3-bar" menu button > Web Developer > Web Console
      - (menu bar) Tools > Web Developer > Web Console
      - (Windows) Ctrl+Shift+k 

    Then type or paste the following script next to the caret (») and press Enter to execute it:

    `new Date().toString();`

    The first time you use the console, Firefox may ask you to take action to confirm. Mine was:
    `"Tue Apr 25 2023 05:42:03 GMT+0000 (Coordinated Universal Time)"`
    If isn't correct, set to false resist fingerprinting (check down here): 👇

- settings need to be set to ***TRUE*** in `about:config`
  ```
  # create the entry if it doesnt exists, set it to true:
  xdg.use-xdg-desktop-portal 
  ```


- settings need to be set to ***FALSE*** in `about:config`

  ```
  # self explanatory
  browser.sessionstore.restore_on_demand
  browser.sessionstore.restore_pinned_tabs_on_demand
  services.sync.prefs.sync.browser.sessionstore.restore_on_demand

  # set to 0:
  widget.use-xdg-desktop-portal.file-picker 
  
  🏆
  # When [resist fingerprinting](https://support.mozilla.org/en-US/questions/1253204) (RFP) is enabled then some items are spoofed (TimeZone: UTC, etc), so let's disable it:
  privacy.resistFingerprinting = false 
  ```

 ## [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish/)
 Stylish lets you customize any website with custom user styles
- [Youtube RetroWave](https://userstyles.org/styles/191573/youtube-retrowave)
- [Amazon - Dark slate](https://userstyles.org/styles/133725/amazon-dark-slate)
- [Chatgpt](https://userstyles.org/styles/245057/openai-chatgpt-and-playground-redesign-razorglass)
- [Responsive Whatsapp Windows 11 Style](https://userstyles.org/styles/228154/responsive-whatsapp-windows-11-style)

---
## [WAVEFOX](https://github.com/QNetITQ/WaveFox)

  [[Reddit/Hyprland] Frosted Glass Everywhere](https://www.reddit.com/r/unixporn/comments/105mdur/hyprland_frosted_glass_everywhere/)


  ```
  about:profiles
  /home/n30/.firedragon/sso3o2fy.default-release
  /home/n30/.mozilla/firefox/808n0zra.default-release
  ```

  1. search for "themes" and enable "System theme - auto"
   
    about:addons

  2. Go to `about:config` and set to ***true*** the keys below:

  ```
  about:config
  toolkit.legacyUserProfileCustomizations.stylesheets
  layout.css.color-mix.enabled
  userChrome.ChromeTabs-Enabled
  layout.css.has-selector.enabled # (Firefox 113+ && v1.5.113 Beta)
  ```

  3. Specify the desired shape of the tabs.

  
  ```
  userChrome.TransparentToolbar-Enabled
  ```
    userChrome.WaveFoxTabs-Enabled
![Wavefoxtabs](https://user-images.githubusercontent.com/85301851/180248857-fee4dd92-6d6c-4c34-8615-bf69e740f2bd.PNG)

  ```
  userChrome.AustralisTabs-Enabled  # not this, looks meh
  userChrome.ProtonTabs-Enabled     # not this, looks meh
  ```
  4. Toolbar Transparency
  !! WARNING Works only with the system theme, but works
  ```
  userChrome.SemiTransparentToolbar-Enabled
  userChrome.TransparentToolbar-Enabled
  ```
  ```
  idk if those are working:
  userChrome.Toolbar.Transparency.Low.Enabled
  userChrome.Toolbar.Transparency.Medium.Enabled
  userChrome.Toolbar.Transparency.High.Enabled
  userChrome.Toolbar.Transparency.VeryHigh.Enabled (Proton Tabs Only)
  ```
  (Allegedly "Proton Tabs" Only but works with WaveFox for e.g)

  5. Linux Transparency

  Transparency is active for all modes, but does not work everywhere. This may change with future browser updates. Works only with the system theme.
  ```
  userChrome.LinuxTransparency-Enabled
  gfx.webrender.all
  ```
~~6. Tab Frame
  The tab frame consists of type, color and saturation. Not compatible with themes that use a translucent toolbar.~~
  
~~7. Selected Tab Highlight
  `userChrome.SelectedTabHighlight-Enabled`~~
  
  8. Tab Separators
  
  ```
  userChrome.TabSeparatorsLowSaturation-Enabled
  userChrome.TabSeparatorsMediumSaturation-Enabled
  ```
  9.  Restart your browser for the changes to take effect.

## EliverLara /[firefox-sweet-theme](https://github.com/EliverLara/firefox-sweet-theme)
```
cd ~/Downloads && git clone https://github.com/EliverLara/firefox-sweet-theme && cd firefox-sweet-theme
./scripts/install.sh
```

## firedragon only

- To sync w/ Firefox account, override settings opening a terminal w/:

  - /usr/lib/firedragon/firedragon.cfg

  - go to:
  identity.sync.tokenserver.uri

  - modify the url for these:
  lockPref("identity.sync.tokenserver.uri", "https://token.services.mozilla.com/1.0/sync/1.5")

  - sign in

- set fonts to cantarell

- set new tab in home to about:newtab

- install 1080p netflix and ublock orgin addons

- Profile directory
/home/n30/.firedragon/saho7tbv.default-release/

## about:support <!-- TODO:  -->

- **WebGL 1 Driver Renderer**	WebGL is currently disabled.
  
      - about:config
      - webgl.disabled # set to "false
      - webgl.force-enabled # set to "true"

- **Desktop Environment**	hyprland
- **Target Frame Rate**	60    #144?
- 
## [sweet complete theme](https://github.com/EliverLara/firefox-sweet-theme)       
 TODO: not sure it worked, maybe the path is wrong?

- -f <firedragon's folder>

cd ~/Downloads/ && git clone https://github.com/EliverLara/firefox-sweet-theme && sh firefox-sweet-theme/scripts/install.sh -f ~/.firedragon/

or only the colors on theme [sweet dark](https://addons.mozilla.org/es/firefox/addon/sweet-dark/) (same author):

- How to [Manually Install Extensions](https://avoidthehack.com/manually-install-extensions-ungoogled-chromium) (Ungoogled Chromium, Chrome)


1. Open any browser of your choice (doesnt have to be Chromium based)
2. Click here https://github.com/NeverDecaf/chromium-web-store/releases
3. Download the file Chromium.Web.Store.crx
4. Save Chromium.Web.Store.crx
5. Open your Chromium browser. Again, Im using Ungoogled Chromium here, but any Chromium-based browser should do the trick.
6. In the address bar, type chrome://flags/#extension-mime-request-handling
7. Change Handling of extension MIME type requests to Always prompt for ins. (This makes it more user friendly to install .crx files, which are the packed version of chromium extensions)
8. Now, in the address bar, type chrome://extensions like so:
9. ￼In the top right, enable Developer mode (hint: its enabled when you can see buttons for "Load unpacked" and "Pack extension.")
10. Open an explorer window on your PC. Navigate to the folder where you saved Chromium.Web.Store.crx
11. Drag Chromium.Web.Store.crx to your Chromium browser

- [Can't open links with firedragon (Librewolf) when using Wayland](https://librewolf.net/docs/faq/)...

  - translated to firedragon will result in the following:
  cp /usr/share/applications/firedragon.desktop  ~/.local/share/applications/firedragon.desktop

  -comment old and copy the following Exec lines on:

  sudo nano ~/.local/share/applications/firedragon.desktop

  -firedragon.desktop

  ```
  Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/firedragon/firedragon %u

  Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/firedragon/firedragon --new-window %u

  Exec=env GDK_BACKEND=wayland MOZ_ENABLE_WAYLAND=1 /usr/lib/firedragon/firedragon --private-window %u
  ```

- Allow Firefox to load multiple tabs in the background

  Your version of Firefox may be using the multiprocess feature already. Follow these instructions to make sure:

   about:support
  1. In Multiprocess Windows, if the number is higher than zero (0), you already have the multiprocess feature activated.
  2. 
  3. If the number is zero (0), follow these instructions to turn it on:
        1. about:config
        2. A warning page may appear. Click Accept the Risk and Continue to go to the about:config page.
        3. Search for browser.tabs.remote.autostart and double-click on the preference to set its value to true.
        4. Restart Firefox to enable multiprocess.


- firefox The download cannot be saved because an unknown error occurred.Please try again.

      about:config
      browser.download

      ### showing only the modifies:
      ```
      browser.download.dir	/home/n30/Downloads
      browser.download.manager.addToRecentDocs	true
      browser.download.panel.shown	true
      browser.download.useDownloadDir	true
      browser.download.viewableInternally.typeWasRegistered.avif	true
      browser.download.viewableInternally.typeWasRegistered.webp	true
      services.sync.prefs.sync-seen.browser.download.useDownloadDir	true
      services.sync.prefs.sync-seen.services.sync.prefs.sync.browser.download.useDownloadDir	false
      ```

      ## all settings:
      ```
      browser.download.alwaysOpenInSystemViewerContextMenuItem	true
      browser.download.alwaysOpenPanel	false
      browser.download.always_ask_before_handling_new_types	false
      browser.download.animateNotifications	true
      browser.download.autohideButton	false
      browser.download.clearHistoryOnDelete	0
      browser.download.dir	/home/n30/Downloads
      browser.download.enable_spam_prevention	false
      browser.download.folderList	1
      browser.download.forbid_open_with	false
      browser.download.improvements_to_download_panel	true
      browser.download.loglevel	Error
      browser.download.manager.addToRecentDocs	true
      browser.download.manager.resumeOnWakeDelay	10000
      browser.download.openInSystemViewerContextMenuItem	true
      browser.download.open_pdf_attachments_inline	false
      browser.download.panel.shown	true
      browser.download.sanitize_non_media_extensions	true
      browser.download.saveLinkAsFilenameTimeout	4000
      browser.download.start_downloads_in_tmp_dir	false
      browser.download.useDownloadDir	true
      browser.download.viewableInternally.enabledTypes	xml,svg,webp,avif,jxl
      browser.download.viewableInternally.typeWasRegistered.avif	true
      browser.download.viewableInternally.typeWasRegistered.webp	true
      services.sync.prefs.sync-seen.browser.download.useDownloadDir	true
      services.sync.prefs.sync-seen.services.sync.prefs.sync.browser.download.useDownloadDir	false
      services.sync.prefs.sync.browser.download.useDownloadDir	true
      ```

- [File dialogs do not open when downloading files](https://wiki.archlinux.org/title/firefox)

6.33 If no file chooser is shown when downloading files, even with the option "Always ask where to save files" enabled in Firefox's preferences, then you might not have both xdg-desktop-portal and a suitable implementation. Desktop environments usually provide an implementation, but if you are using a standalone window manager such as i3, then you may need to manually install one. Install xdg-desktop-portal and for example `xdg-desktop-portal-gtk`. (Worked on Hyprland!)

- [Dark Reader overwrites Firefox Themes](https://github.com/darkreader/darkreader/issues/1430)

    - Open Darkreader preferences in the extensions toolbar
    - Click More
    - Toggle Change the browser theme to Default


# [WAYDROID](https://wiki.archlinux.org/title/Waydroid)

## [Waydroid Extras Script](https://github.com/casualsnek/waydroid_script)
### requeriments:
yay -s python-requests python-tqdm python-inquirerpy
```
git clone https://github.com/casualsnek/waydroid_script
cd waydroid_script
sudo python3 -m pip install -r requirements.txt
# install something
sudo python3 main.py install {gapps, magisk, libndk, libhoudini, nodataperm, smartdock, microg}
# uninstall something
sudo python3 main.py uninstall {gapps, magisk, libndk, libhoudini, nodataperm, smartdock, microg}
# get Android device ID
sudo python main.py certified
# some hacks
sudo python3 hack {nodataperm, hidestatusbar}
```
cd ~/Downloads/waydroid_script-main/
sudo python3 main.py install libhoudini

sudo python3 ~/Downloads/waydroid_script-main/main.py install libhoudini

---
it's linux zen running?
`uname -r`


`yay -S waydroid`
`yay -S waydroid-image-gapps`

or install the images manually:

`sudo mkdir -p /usr/share/waydroid-extra/images && cd ~/Downloads/`
`sudo cp system.img vendor.img /usr/share/waydroid-extra/images`

Setting up a shared folder will allow the user to copy/paste files from the host and they appear inside waydroid/android.

```
sudo mount --bind ~/Downloads ~/.local/share/waydroid/data/media/0/Download
sudo mount --bind ~/Documents ~/.local/share/waydroid/data/media/0/Documents
sudo mount --bind ~/Music ~/.local/share/waydroid/data/media/0/Music
sudo mount --bind ~/Pictures ~/.local/share/waydroid/data/media/0/Pictures
sudo mount --bind ~/Videos ~/.local/share/waydroid/data/media/0/Movies
```

# sudo mount --bind <source> ~/.local/share/waydroid/data/media/0/<target>

cd /var/lib/waydroid/images/
sudo cp *.* /usr/share/waydroid-extra/images/

# To init with GApps support:

sudo waydroid init -s GAPPS -f
sudo waydroid init -f
sudo waydroid show-full-ui

# Grab waydroid IP address from Android Settings-> About

adb connect 192.168.240.112
adb root
adb shell 'sqlite3 /data/data/com.google.android.gsf/databases/gservices.db
"select * from main where name = \"android_id\";"'

# android_id|4148863870658807416

# paste id and register, took some minutes

https://www.google.com/android/uncertified/

adb devices
adb install file.apk

# Next start/enable the waydroid-container.service.

systemctl restart waydroid-container.service
sudo waydroid upgrade

sudo waydroid app install /home/n30/Downloads/jurassic-world-alive-2.21.32-mod-menu-5play.apk
waydroid app list

# Waydroid Extras Script

# https://themagisk.com/waydroid-extras-script/

sudo pacman -S lzip sqlite
git clone https://github.com/casualsnek/waydroid_script
cd waydroid_script
sudo python3 -m pip install -r requirements.txt
sudo mv main.py waydroid_extras.py

# sudo python3 waydroid_extras.py [-i/-g/-n/-h]

# Arm Translation

# Install Libhoudini arm Translation:

sudo python3 waydroid_extras.py -l

# You may need to umount /dev/loop12`` and waydroid session stop``` for Libhoudini to install.

# Restart Waydroid Container:

sudo systemctl start waydroid-container.service

# Launch Waydroid:

waydroid show-full-ui

waydroid session start

# Android with user 0 is ready

sudo python3 waydroid_extras.py -l

# IOS iphone x

---

# https://wiki.archlinux.org/title/IOS

# https://jaketrent.com/post/connect-iphone-arch-linux/

yay -S gvfs-gphoto2 libimobiledevice ifuse
systemctl status usbmuxd.service

# systemctl start usbmuxd.service   # if it's not running

# unlock phone and enter password, say it's trusted

idevicepair pair
idevicepair validate
879c9f69a0e8151beb06152e967511efbb097d90

sudo mkdir -p /run/media/n30/iphone
sudo ifuse -o allow_other /run/media/n30/iphone

idevicepair unpair
sudo umount /run/media/n30/iphone

---------------------------------------------------------------
# **[GENYMOTION]()**


>## install genymotion:
- automatically:
```
sudo pacman -S genymotion
```
- or manually
```
cd ~/Downloads/ && chmod -x genymotion-*.bin && sudo sh genymotion-*.bin
```

>## configure

- install opengapps:

  1. click on "Open GAPS" button at the side of emulator
  2. login in on google
  3. download chrome & keep

- Download custom?
https://www.osboxes.org/android-x86/
[ova+github](https://gist.github.com/runo280/e4be3e04c24b463b55ddf012c5cfbdc4)
[softwareAndroid x86/x64 9.0 r2 (Pie)](https://archive.org/details/sjarb_android_9.0r2)

- Genymotion [ARM translation](https://github.com/m9rco/Genymotion_ARM_Translation) for 4.3 to 9.0:
    If failure:
  1. adb shell
  2. cd /sdcard/Download/
  3. sh /system/bin/flash-archive.sh /sdcard/Download/Genymotion-ARM-Translation.zip
  4. adb reboot

- killing the annoying emoji keyboard:

settings > keyboard >keyboard & input > Virtual keyboard > android keyboard setting > Advanced > Emoji for physical keyboard

- [beta testing](https://www.genymotion.com/download-beta/)

>## old pre-requisites: install virtualbox
- manually:

  ```
  sudo pacman -U https://archive.archlinux.org/packages/v/virtualbox/virtualbox-6.1.10-1-x86_64.pkg.tar.zst
  ```
- or download [here](https://download.virtualbox.org/virtualbox/6.1.36)


  ```
  cd ~/Downloads/ && \
  wget https://download.virtualbox.org/virtualbox/6.1.36 \
  chmod -x VirtualBox-*.run && \
  sudo sh VirtualBox-*.run
  ```
- Machine base folder for VirtualBox
  ```
  nope /run/media/n30/xxx/linuxsaurio/VirtualBox
  ```


  Installing to folder `/opt/genymobile/genymotion`. Are you sure `[y/n]` ? yepity yep

needs apkmirror from appstore, works tho:
599mb [apkmirror](https://www.apkmirror.com/apk/jam-city-inc/jurassic-world-alive/jurassic-world-alive-2-23-32-release/jurassic-world-alive-2-23-32-android-apk-download/#safeDownload)

99mb [apkmirror](https://www.apkmirror.com/apk/jam-city-inc/jurassic-world-alive/jurassic-world-alive-2-23-32-release/jurassic-world-alive-2-23-32-android-apk-download/download/?key=453a5f1bd71cac8674ba1d2b1ff528dc95129c1c&forcebaseapk=true)

>## v11 arm compatibility:
How to install:

    1. Open the Android 11 emulator
    2. edit build.prop in step 3 but you need adb installed:
```
adb shell
su
mount -o rw,remount /

echo 'ro.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.product.cpu.abilist64=x86_64,arm64-v8a
ro.vendor.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.vendor.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.vendor.product.cpu.abilist64=x86_64,arm64-v8a
ro.odm.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.odm.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.odm.product.cpu.abilist64=x86_64,arm64-v8a
ro.dalvik.vm.native.bridge=libhoudini.so
ro.enable.native.bridge.exec=1
ro.enable.native.bridge.exec64=1
ro.dalvik.vm.isa.arm=x86
ro.dalvik.vm.isa.arm64=x86_64
ro.zygote=zygote64_32' | tee -a /system/build.prop >> /system/vendor/build.prop
```
 The Vi editor has two modes: **Command** and **Insert**. When you first open a file with Vi, you are in Command mode. Command mode means you can use keyboard keys to navigate, delete, copy, paste, and do a number of other tasks—except entering text. ***To enter Insert mode, press i*** .

    3. OR Copy and paste CS-v(Control+Shift+v) this to /system/build.prop and /system/vendor/build.prop
```
vi /system/build.prop
vi /system/vendor/build.prop

ro.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.product.cpu.abilist64=x86_64,arm64-v8a
ro.vendor.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.vendor.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.vendor.product.cpu.abilist64=x86_64,arm64-v8a
ro.odm.product.cpu.abilist=x86_64,x86,arm64-v8a,armeabi-v7a,armeabi
ro.odm.product.cpu.abilist32=x86,armeabi-v7a,armeabi
ro.odm.product.cpu.abilist64=x86_64,arm64-v8a
ro.dalvik.vm.native.bridge=libhoudini.so
ro.enable.native.bridge.exec=1
ro.enable.native.bridge.exec64=1
ro.dalvik.vm.isa.arm=x86
ro.dalvik.vm.isa.arm64=x86_64
ro.zygote=zygote64_32
```

To save a file in Vim / vi, press Esc key, type :wq and hit Enter key. 

    Download [libhoudini](https://github.com/niizam/Genymotion_A11_libhoudini/releases/download/1.0/system.zip) from releases page.
    Drag and drop system.zip to emulator
    Restart the emulator

>## TROUBLESHOT !

houdini --version
[4774] Houdini version: 11.0.1b_y.38765.m

getprop | grep -i abi
[init.svc.genymotion-abi-setup]: [stopped]
[init.svc_debug_pid.genymotion-abi-setup]: []
[ro.boottime.genymotion-abi-setup]: [2278406019]
[ro.odm.product.cpu.abilist]: [x86_64,x86]
[ro.odm.product.cpu.abilist32]: [x86]
[ro.odm.product.cpu.abilist64]: [x86_64]
[ro.product.cpu.abi]: [x86_64]
[ro.product.cpu.abi2]: [armeabi-v7a]
[ro.product.cpu.abilist]: [x86_64,x86,arm64-v8a,armeabi-v7a,armeabi]
[ro.product.cpu.abilist32]: [x86,armeabi-v7a,armeabi]
[ro.product.cpu.abilist64]: [x86_64,arm64-v8a]
[ro.vendor.product.cpu.abilist]: [x86_64,x86,arm64-v8a,armeabi-v7a,armeabi]
[ro.vendor.product.cpu.abilist32]: [x86,armeabi-v7a,armeabi]
[ro.vendor.product.cpu.abilist64]: [x86_64,arm64-v8a]


>## RUN !
```
genymotion-shell -c "devices select 1"
genymotion-shell -c "gps setstatus enabled"
```

```
genymotion-shell
devices select 1
devices select 0

gps setstatus enabled
gps setlatitude 19.68196
gps setlongitude -101.16097
```


1. ### Get list of vms with:
```
genymotion-shell -c "devices list"

Available devices:

 Id | Select |    Status     |   Type   |   IP Address    |      Name
----+--------+---------------+----------+-----------------+---------------
  0 |        |            On |  virtual |       127.0.0.1 | mini-MI
  1 |        |            On |  virtual |       127.0.0.1 | n30
  2 |        |           Off |  virtual |       127.0.0.1 | test
```
alternative:
```
adb devices

List of devices attached
127.0.0.1:5562         device product:vbox86p model:Phone device:genymotion transport_id:32
127.0.0.1:5569         device product:vbox86p model:Phone device:genymotion transport_id:33
```
177.240.130.113 
adb -s 127.0.0.1:5562 shell

2. select device n30:
genymotion-shell -c "devices select 1"

3. #add gps to mini-Mi (oxxo campestre)
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setstatus enabled"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlatitude 19.68196"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlongitude -101.16097"

>## uninstall (by script)

- these:
```
sudo sh ~/Downloads/genymotion*.bin -d /opt/genymotion --uninstall
sudo sh ~/Downloads/genymotion*.bin --uninstall
```

- or hese:
```
rm -r $HOME/genymotion
sudo rm -rf /opt/genymobile
rm -rf $HOME/.Genymobile $HOME/.config/Genymobile/Genymotion.conf
sudo rm -f /usr/share/applications/genymobile-genymotion.desktop
```
>## RUN (VIRTUAL BOX edition!
1. ### Get list of vms with:
```
adb devices
VBoxManage list vms
```
2. ### Start of Virtual Machines Headless
```
VBoxManage startvm n30 --type headless
VBoxManage startvm mini-Mi --type headless
sleep 3
```
3. ### Open Genymotion, from that GUI open the VM's
```
/opt/genymotion/genymotion
```
4. ### Time to close Genymotion UI, this comes next:
```
#add gps to n30 (tulipas)
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setstatus enabled"
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlatitude 19.71230"
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlongitude -101.20353"

#add gps to mini-Mi (oxxo campestre)
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setstatus enabled"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlatitude 19.68196"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlongitude -101.16097"
```

5. ### set rotation angle
```
/opt/genymotion/genymotion-shell -r 192.168.56.101 -c "rotation setangle 270"
/opt/genymotion/genymotion-shell -r 192.168.56.102 -c "rotation setangle 270"
```

### TEST FOR SCENTS!!!
```
#lokation 1
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlatitude 19.71220"
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlongitude -101.20462"

#add gps to mini-Mi (oxxo campestre)
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlatitude 19.68196"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlongitude -101.16097"
#----------------------------------------------
#lokation 2
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlatitude 19.71227"
/opt/genymotion/genymotion-shell -r 192.168.56.104 -c "gps setlongitude -101.20314"

#add gps to mini-Mi (oxxo campestre)
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlatitude 19.68201"
/opt/genymotion/genymotion-shell -r 192.168.56.103 -c "gps setlongitude -101.15982"
```

### TEST TEST

```VBoxManage startvm gui mini-Mi
#quickly open them
/opt/genymotion/player --vm-name n30
/opt/genymotion/player --vm-name mini-Mi
```

>## help

/opt/genymotion/genymotion-shell -c "devices list"
Lists available virtual devices and provides details such as current status, IP address and name.
0 |   | On | virtual|  192.168.56.103 | mini-Mi
1 |   | On | virtual|  192.168.56.104 | n30

/opt/genymotion/genymotion-shell -c "devices select"
Selects a virtual device. Add the ID of the virtual device you wish to select (as displayed in the device list).

gps setlatitude: Sets the latitude value (and forces the activation of the GPS if deactivated). The value must range from -90° to 90°.
gps setlongitude: Sets the longitude value (and forces the activation of the GPS if deactivated). The value must range from -180° to 180°.

#You can kill it with a normal process kill:
##ps | grep "Genymotion\.app/Contents/MacOS/player" | awk '{print $1}' | xargs kill

#linux error genymotion vboxnet#, replace # w/ a number
VBoxManage hostonlyif remove vboxnet7
VBoxManage hostonlyif remove vboxnet6

>## [uninstall manually](https://support.genymotion.com/hc/en-us/articles/360002815177-How-to-uninstall-Genymotion-Desktop-completely-purge-) genymotion

```
rm -r $HOME/genymotion
```

- If you installed Genymotion Desktop for all users, with sudo, you need to delete the /opt/genymobile folder with command
  ```
  sudo rm -rf /opt/genymobile
  ```
- Delete Genymotion Desktop local data directories by running:
  ```
  rm -rf $HOME/.Genymobile $HOME/.config/Genymobile/Genymotion.conf
  ```
- Delete Genymotion Desktop launcher:
  ```
  sudo rm -f /usr/share/applications/genymobile-genymotion.desktop
  ```

---------------------------------------------------------------
# [SPOTIFY]()

- install:

    ```
    yay -S spotify-adblock-git spicetify-themes-git spicetify-cli-git
    ```
- oneliner:

    ```
    curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-cli/master/install.sh | sh
    ```
- change permissions

    ```
    sudo chmod a+wr /opt/spotify && sudo chmod a+wr /opt/spotify/Apps -R
    ```
- one command to install marketplace:

    ```
    curl -fsSL https://raw.githubusercontent.com/spicetify/spicetify-marketplace/main/resources/install.sh | sh
    ```
- backup should work now...
    ```
  spicetify backup apply
- add lyrics plugin
  ```
    spicetify config custom_apps lyrics-plus && spicetify apply

## [Hyprland tweak/hack](https://wiki.hyprland.org/Useful-Utilities/App-Clients/#spotify)

Spotify **does not follow window rules**. This is because the client sets its class after the window has opened, thus making it “immune” to windowrules. An alternative to Spotify’s GUI client is `spotify-tui` which can be launched in a terminal with a custom class. While limited in functionality, it is quite powerful and could be preferred over the GUI client. Another alternative is ncspot, a powerful cross-platform ncurses Spotify client written in Rust.

Some users have also reported installing [spotifywm](https://github.com/amurzeau/spotifywm) has resolved the issue. The original repository by dasJ is no longer working because of some changes made in the newer Spotify version, and until the pull request gets merged, amurzeau's fork does the job.

After following the installation paragraph on the README, start Spotify with:

`LD_PRELOAD=/path/to/spotifywm.so spotify`

The path MUST be the absolute one. If it’s not, the hack will not work.Now you can freely manage your Spotify client. Always use class to manage the window. For example:

```
windowrulev2 = tile, class:^(Spotify)$
windowrulev2 = workspace 9, class:^(Spotify)$
```

## Themes:

### [purple_Lines](https://github.com/JamesIsWack/purple_Lines)
Modified version of Retroblur Spicetify theme.

### [Retroblur](https://github.com/Motschen/Retroblur)
```
cd ~/Downloads && \
wget https://github.com/Motschen/Retroblur/archive/refs/heads/main.zip \
cp /Retroblur ~/.dotfiles/spicetify/Themes/ \
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1 current_theme Retroblur color_scheme purple && \
spicetify apply
```
To change the color of the background, edit the link on the first line of **user.css**
`/home/n30/.dotfiles/spicetify/Themes/Retroblur/user.css`, [like this one](https://i.pinimg.com/originals/09/64/b6/0964b64d7c0a214da7efb4e4ee7959c7.jpg):

Its sadly not possible to change the background together with the color scheme automatically due to the limitations of CSS.

- ### [DefaultDynamic](https://github.com/JulienMaille/spicetify-dynamic-theme) for Spicetify
```
curl -fsSL https://raw.githubusercontent.com/JulienMaille/spicetify-dynamic-theme/master/install.sh | sh
spicetify apply
```

- ### [Frostify](https://github.com/Ramlord/Frostify): (not worked!)
```
cd ~/Downloads && wget http://github.com/Ramlord/Frostify/releases/download/0.1/Frostify.zip
cp /Frostify ~/.config/spicetify/Themes/
spicetify config inject_css 1 replace_colors 0 overwrite_assets 1 replace_colors 0 current_theme Frostify && spicetify apply
```

spicetify backup apply

nano ~/.config/spicetify/config-xpui.ini

Restart Spotify

- ### he4rt theme (not worked!)

```
cd ~/.config/spicetify/Themes/ && git clone https://github.com/aleDsz/he4rt-spicetifyy-theme.git he4rt
cd he4rt
cp he4rt.js ~/.config/spicetify/Extensions
spicetify config extensions he4rt.js inject_css 1 replace_colors 1 overwrite_assets 1 current_theme he4rt color_scheme base && spicetify apply

spicetify config extensions catppuccin-macchiato.js inject_css 1 replace_colors 1 overwrite_assets 1 current_theme catppuccin-macchiato && spicetify apply
```


- ### [BLoom theme](https://github.com/nimsandu/spicetify-bloom)

```
cd ~/.config/spicetify/Themes
curl -fsSL https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/install.sh | bash
```

or installing it manually:
```
spicetify config current_theme bloom color_scheme purple && \
spicetify apply
```

- ### "accented" theme:
```
cd "$(spicetify -c | Split-Path)\Themes"

cd ~/.config/spicetify/Themes && git clone https://github.com/luximus-hunter/accented
spicetify config current_theme accented color_scheme purple && spicetify apply
```

- ### [moar tHEMES](https://github.com/spicetify/spicetify-themes) (optional)
 
```
cd ~/Downloads && git clone https://github.com/spicetify/spicetify-themes.git && cd spicetify-themes
```

Copy the files into the Spicetify Themes folder. Run:
```
cp -r * ~/.config/spicetify/Themes
spicetify config inject_css 1 replace_colors 1 overwrite_assets 1
```
Choose which theme to apply just by running:
```
spicetify config current_theme THEME_NAME
```
Some themes have 2 or more different color schemes. After selecting the theme you can switch between them with:
```
spicetify config color_scheme SCHEME_NAME

spicetify config current_theme Ziro color_scheme purple-dark  && spicetify apply
spicetify config current_theme Ziro color_scheme rose-pine-moon  && spicetify apply

spicetify config current_theme Flow color_scheme Violet && spicetify apply

spicetify config current_theme Sleek color_scheme Elementary  && spicetify apply

spicetify config inject_css 1 replace_colors 1 overwrite_assets 1
spicetify config extensions dribbblish.js
spicetify config current_theme Dribbblish color_scheme purple && spicetify apply
```

--------------------------------------------------------------
# DISCORD

## Alternatives:

- ### [DiscoCss](https://github.com/mlvzk/discocss)

  - [Download](https://raw.githubusercontent.com/leeprky/BetterDefaultGlasscord/main/support/betterdiscord/BetterDefaultGlasscord.theme.css)
- ### [~~WebCord~~](https://github.com/SpacingBat3/WebCord):

  #### The current release in master is currently deprecated, I'm working on WebCord rewrite in next. Until then, most likely there won't any changes done to `master`, PRs might not be merged at all and there might not be any releases made.
- ### [~~gtkcord4~~](https://github.com/diamondburned/gtkcord4):

  is a Discord client written in GTK4. While it does infringe on Discord’s ToS, it’s relatively safe and doesn’t rely on any webview technologies.
-
- ### [betterdiscord](https://github.com/BetterDiscord/BetterDiscord)

  - betterdiscordctl install
  - [Download](https://betterdiscord.app/themes?sort=Likes&direction=descending) themes.
  - and install them here:

    ```
    mv ~/Downloads/*.css ~/.config/BetterDiscord/themes/
    ```
  - Best themes: 
    - [BetterDefaultGlasscord](https://github.com/leeprky/BetterDefaultGlasscord) (v2.0.0)
    ```
    cd ~/Downloads && \
    wget https://raw.githubusercontent.com/leeprky/BetterDefaultGlasscord/main/support/betterdiscord/BetterDefaultGlasscord.theme.css && \
    mv ~/Downloads/*.css ~/.config/BetterDiscord/themes/
    ```
    
    - [Vibrant Glass](https://betterdiscord.app/theme/Vibrant%20Glass)
    - [Frosted Glass](https://betterdiscord.app/theme/Frosted%20Glass)

---------------------------------------------------------------
# [Fractal](https://wiki.gnome.org/Apps/Fractal) (Matrix/Element)

Fractal is a Matrix client written in GTK4. Much like Discord, Element is known to have a lot of problems as a result of being based on Electron. Fractal currently doesn’t support VoIP calling, but all other features are supported, including E2EE and cross-device verification.

---------------------------------------------------------------
# EVERNOTE

## Install a extension called [TamperMonkey](https://addons.mozilla.org/es/firefox/addon/tampermonkey/)

## Open up the TamperMonkey settings (Left click on the new icon shown top right in firefox) and Create a new script and past in the code shown below (copy paste everything):

```
 // ==UserScript==
// @name         Evernote Outbound Clicker
// @namespace   http://harristribe.co.uk/
// @version      1.0
// @description  Avoids the evernote outbound page
// @author       Rob Harris
// @include     https://www.evernote.com/OutboundRedirect.action*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var urlParams = new URLSearchParams(window.location.search);
    window.location.href = urlParams.get('dest');
})();
```
> # `STEAM`

---

## Lutris

[InstallingDrivers](https://github.com/lutris/docs/blob/master/InstallingDrivers.md)

```
sudo pacman -S --needed lib32-mesa vulkan-radeon lib32-vulkan-radeon vulkan-icd-loader lib32-vulkan-icd-loader steam-native-runtime
```
---

> # `wine`

---

>>> WARNING TAKES AN HOUR TO COMPILE
>>> `yay -S wine-staging-git`
>>>
>>

# GameMode

# https://github.com/FeralInteractive/gamemode

pacman -S meson systemd git dbus libinih
yay -S gamemode

# test it

gamemoded -t

# [jc141](https://github.com/jc141x/jc141-bash/tree/master/setup) scripts for gaming games

## [gamemode](https://github.com/FeralInteractive/gamemode)

## [optional user inteface launchers](https://github.com/jc141x/jc141-bash/blob/master/setup/launchers.md)

- ### [rum](https://github.com/jc141x/rum)

single purpose launcher which focuses on interface and leaving the configuration to the bash script.
![.](https://camo.githubusercontent.com/9a2d1f37f782095f310175f87f9daa7b650d9d9d4ce4ddb212b2ade551dcd69a/68747470733a2f2f692e706f7374696d672e63632f6e4c394d4a3444662f797472797274792e706e67)

```
cd ~/Downloads && \
git clone https://github.com/jc141x/rum.git && \
cd rum/
```
```
pnpm install
pnpm build
pnpm tauri build
```

- ### [heroic](https://heroicgameslauncher.com/)
Heroic is an Open Source GOG and Epic games launcher 
![.](https://heroicgameslauncher.com/_next/static/images/heroic_01-4864abe462a3555732f717d23f3fbfde.png.webp)

## [Setup Guide - Arch](https://github.com/jc141x/jc141-bash/blob/314ecb06df3edac7acbe01be07372a6be18a0eca/setup/arch.md)

###  1. add rumpowered repo and multilib

- run all 7 lines at once:
```
echo '

[rumpowered]
Server = https://jc141x.github.io/rumpowered-packages/$arch
Server = https://repo.rumpowered.org/$arch ' | sudo tee -a /etc/pacman.conf

sudo sed -i "/\[multilib\]/,/Include/"'s/^#//' /etc/pacman.conf
```
- then do one by one:
```
sudo pacman-key --recv-keys cc7a2968b28a04b3
sudo pacman-key --lsign-key cc7a2968b28a04b3
```
- instead of: sudo pacman -Syyu
```
garuda-update
```

- Make sure you do not have amdvlk (having it installed will cause a lot of issues):
```
sudo pacman -R amdvlk
```

## 2. Add required core packages

- These packages are all required for our releases to work, if you dont have them the games will not run.
```
sudo pacman -S --needed rumpowered/dwarfs fuse-overlayfs wine-staging wine-mono openssl-1.1
```

## 3. Add graphics packages for your set up.

- GPU/APU Drivers required for AMD GPUs
```
sudo pacman -S --needed lib32-vulkan-radeon vulkan-radeon
```

## 4. Install additional libraries

- Some games require additional libaries to run successfully. We strongly recommend the following libraries are installed.

sudo pacman -S --needed lib32-alsa-lib lib32-alsa-plugins lib32-libpulse lib32-openal giflib libgphoto2 libxcrypt-compat zlib gst-plugins-base gst-plugins-good gst-plugins-ugly gst-plugins-bad gstreamer-vaapi gst-libav

## 5. OPTIONAL 
- Prevent non-LAN activity by default. It is recommended that you prevent access to the WAN for our releases.
```
sudo pacman -S --needed rumpowered/bindtointerface rumpowered/lib32-bindtointerface
```
- wine-staging-tkg can be used instead of wine-staging, to the user's choice

```
sudo pacman -S --needed wine-staging wine-mono \
lib32-giflib lib32-gnutls lib32-libxcomposite lib32-libxinerama lib32-libxslt lib32-mpg123 lib32-v4l-utils lib32-alsa-lib lib32-alsa-plugins lib32-libpulse lib32-openal lib32-zlib giflib libgphoto2 libxcrypt-compat zlib gst-plugins-base gst-plugins-good gst-plugins-ugly gst-plugins-bad gstreamer-vaapi gst-libav \
vulkan-radeon lib32-vulkan-icd-loader vulkan-icd-loader lib32-vulkan-radeon \
fuse-overlayfs
```
sudo pacman -S --needed rumpowered/dwarfs # or dwarfs-bin instead?
steal-git    # removed because dwarfs-bin causing problems
:: wine-staging and wine-staging-git are in conflict (wine). Remove wine-staging-git? [y/N]

# https://github.com/jc141x/rumpowered-packages/tree/24d3d214a7679c9eab474781516fb11e3a3daa83/pkgbuilds

dwarfs dxvk-bin jc141-bash jc141-vulkan vkd3d-proton-bin windep wine-staging-tkg

# Ember Knights

# https://forum.winehq.org/viewtopic.php?t=33029

winetricks atmlib corefonts gdiplus msxml3 msxml6 vcrun2008 vcrun2010 vcrun2012 fontsmooth-rgb gecko

# https://forum.winehq.org/viewtopic.php?t=30270

winetricks d3dcompiler_43

[2023-02-27 19:12:43.608] [MANGOHUD] [error] [file_utils.cpp:43] Error opening directory '/sys/class/drm/card0-HDMI-A-1/device/hwmon/': No such file or directory
[2023-02-27 19:12:43.608] [MANGOHUD] [error] [file_utils.cpp:43] Error opening directory '/sys/class/drm/card0-DP-2/device/hwmon/': No such file or directory
[2023-02-27 19:12:43.627] [MANGOHUD] [info] [overlay.cpp:768] Uploading is disabled (permit_upload = 0)
0114:fixme:wbemprox:client_security_SetBlanket 00000001ED4A0E80, 0000000000FA8E50, 10, 0, (null), 3, 3, 0000000000000000, 0
0114:fixme:wbemprox:client_security_Release 00000001ED4A0E80
0220:fixme:kernelbase:AppPolicyGetThreadInitializationType FFFFFFFFFFFFFFFA, 00000000705DFE10
0220:fixme:avrt:AvSetMmThreadCharacteristicsW (L"Audio",00000000705DFDB8): stub
[2023-02-27 19:12:43.831] [MANGOHUD] [error] [file_utils.cpp:43] Error opening directory '/sys/class/drm/card0-HDMI-A-1/device/hwmon/': No such file or directory

DBG=1 bash /run/media/n30/Ember.Knights-jc141/start.e-w.sh

# NVIDIA graphics packages add:

# # sudo pacman -S --needed lib32-vulkan-icd-loader vulkan-icd-loader lib32-libglvnd lib32-nvidia-utils libglvnd nvidia

# # Add nvidia-drm.modeset=1 as a kernel parameter for the best results.

#

# INTEL graphics packages add:

# vulkan-intel lib32-vulkan-icd-loader vulkan-icd-loader lib32-vulkan-intel

# optional packages

# Isolates game from system display server, no desktop res changing when in use. As well as forcing games into fullscreen and scaling when necessary. Can provide AMD FidelityFX Super Resolution or NVIDIA Image Scaling support.

# sudo pacman -S --needed gamescope

# NVIDIA drivers may have some issues with this.

# Requires full Vulkan support. (old architectures with none or semi are not compatible)

# May cause failure to run from first try in certain cases.

# Is not always used by scripts, testing is done to confirm that it is compatible.

# bindtointerface - block non-LAN network activity by default

sudo pacman -S --needed rumpowered/bindtointerface

# Update vlk.sh Vulkan Update?

# https://github.com/jc141x/jc141-bash/blob/314ecb06df3edac7acbe01be07372a6be18a0eca/root-scripts/files/vlk.sh

# add piracy repo:

echo '

[pirate-arch-repo]
SigLevel = Optional DatabaseOptional
Server = https://raw.githubusercontent.com/AbdelrhmanNile/pirate-arch-repo/main/x86_64' | sudo tee -a /etc/pacman.conf

sudo sed -i "/\[multilib\]/,/Include/"'s/^#//' /etc/pacman.conf

## (OPTIONAL)

---

yay -S mangohud goverlay-git

* ### Steam Tinker Launch

is a tool for use with the Steam client which allows customizing and start tools and options for games quickly.

# https://github.com/sonic2kk/steamtinkerlaunch/wiki/Installation

yay -S steamtinkerlaunch-git

* ### [Proton GE](https://github.com/GloriousEggroll/proton-ge-custom)

special build of Proton with various patches and fixes included.

>>> WARNING (You Must run Steam at least once before installing ProtonGE).
>>> yay -S proton-ge-custom
>>>
>>

* ### https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher

yay -S heroic-games-launcher-bin

* ### https://github.com/AbdelrhmanNile/steal

yay -S steal-git dwarfs-bin zpaq

To run steaL, in your command line type:
steal

after first run, the directory ~/.config/steal will be created it contains 2 files `conf.json` and `library.csv`

`conf.json` has two parameters:

```
{
    "lib_path": "/home/USER/Games", <-- default path to save the downloaded games is Games dir in your user's home, change it to whatever
    "num_of_cards": "50" <-- number of games displayed in Browse tab
}
```
`library.csv` contains info about the games you download { name, cover url and launching script }

Usage: just search for the game you want and download it, wait until it finish extracting {zpaq takes time to extract, be patient}

after it's done just click the update button to update the library and your game will be there to launch a game just click on it.  Enjoy!!

## it takes two jc141

To fix the language on it takes two, run `bash settings.sh` mount-dwarfs then go to `files/groot` and edit the file `codex.cfg`. where you see `ru_RU` replace with `en_US`.

The earlier torrent also had a black screen issue. you can just can the script from the new torrent and it will be fixed as well

# KTIMER

---

install sox

#--volume where 0 is muted
sh -c "play --volume 0.4 /home/n30/Music/oven.mp3; kdialog --yesno "test" "
play --volume 0.4 $HOME/.config/hypr/sounds/volume_notif.wav

# [AUDIO wob](https://github.com/francma/wob)

---

`yay -S wob`

Use [these](https://framagit.org/-/snippets/6723) script

`~/.config/waybar/config`

`~/.config/hyper/config`

rm -f $XDG_RUNTIME_DIR/wob.sock && mkfifo $XDG_RUNTIME_DIR/wob.sock && tail -f $XDG_RUNTIME_DIR/wob.sock | wob &

just testing where is that directory `$XDG_RUNTIME_DIR`

```
echo $XDG_RUNTIME_DIR
```
output is for Garuda:
`/run/user/1000`

General case (manually)

# You may manage a bar for audio volume, backlight intensity, or whatever, using a named pipe. Create a named pipe, e.g. /tmp/wobpipe, on your filesystem using.

mkfifo /tmp/wobpipe

# Connect the named pipe to the standard input of a wob instance.

tail -f /tmp/wobpipe | wob &

# Set up your environment so that after updating audio volume, backlight intensity, or whatever, to a new value like 43, it writes that value into the pipe:

echo 43 > /tmp/wobpipe &

# Adapt this use-case to your workflow (scripts, callbacks, or keybindings handled by the window manager).

# See https://github.com/francma/wob/blob/master/wob.ini.5.scd for styling and positioning options.

#checking for errors
journalctl -xe

# Audio volume

## AUDIO SWITCH

---

# Get the list w/ these:

- pactl list short sinks | cut -f 2
- pamixer --list-sources

# for the actual:sonarr

pactl info | grep 'Default Sink' | cut -d':' -f 2

# on pavucontrol:

D30 Pro = Analog Stereo Output
USB Audio = Off
Navi 21/23 = Off   #hdmi audio controller
Built-in Ahdio = Analog Stereo Output
PCM2704 16 bit = AnalogStereo Output

#on settings > audio (kde?), must be:

# D30 Pro: Pro Audio

# Digital output(S/PDIF): Digital Stereo (IEC958)

#Now add the following commands for each of the shortcuts:

# Audífonos

control + super + alt + KP_End
pactl set-default-sink alsa_output.usb-Topping_D30-00.pro-output-0; notify-send 'Audígenos'

# Bocinas

control + super + alt + KP_Down

# pactl set-default-sink alsa_output.usb-Burr-Brown_from_TI_USB_Audio_DAC-00.pro-output-0; notify-send 'Bocinas'

pactl set-default-sink alsa_output.usb-Burr-Brown_from_TI_USB_Audio_DAC-00.iec958-stereo

# restart audio

systemctl --user restart pipewire-pulse.service && systemctl --user restart pipewire.socket && systemctl --user restart wireplumber pipewire pipewire-pulse

## EQ

---

https://diyaudioheaven.wordpress.com/passive-filters/
Beyerdynamic DT990 lowers 11khz peak by 7db

# Sony:

# https://github.com/jaakkopasanen/AutoEq/tree/master/results/oratory1990/harman_over-ear_2018/Sony%20WH-1000XM2

#Beyerdynamic 990:

# https://github.com/jaakkopasanen/AutoEq/tree/master/results/oratory1990/harman_over-ear_2018/Beyerdynamic%20DT%20990%20250%20Ohm%20(worn%20earpads)

## Play a sound when volume is changed:

any of those will work:

- "canberra-gtk-play -i audio-volume-change"
- "play --volume 0.15 $HOME/.config/hypr/sounds/volume_notif.wav"

# 

# [[whatsie](https://github.com/keshavbhatt/whatsie) WHATSAPP]

[old](https://www.youtube.com/watch?v=c-QlxNduPLg)
Trizen AUR Package Manager: lightweight pacman wrapper and AUR helper.

install trizen
trizen whatsapp
20?

## [alternative](https://github.com/sadikeey/dotfiles/blob/main/.local/bin/whatsapp)
/usr/bin/brave --app=https://web.whatsapp.com/


# ELDEN RING wine ------------------------------------

## add in symbolic links from your WINEPREFIX to the root of a mounted drive, or subdirectory, you want to mount as a Wine virtual Windows drive.

cd "${WINEPREFIX:-${HOME}/.wine}/dosdevices"

ln -s "/run/media/n30/SSD_Chivos/linuxsaurio/" "y:"

!!
You can also do with the winecfg "Drives" tab.

Typically all mounted system drives are also accessible via Z:\, which maps to the Unix / root directory.

# ERRORS

---

# error: GPGME error: No data

# error: failed to synchronize all databases (invalid or corrupted database (PGP signature))

sudo pacman -Sy archlinux-keyring chaotic-keyring

#if not:
delete any .sig or .sig.part files for the official repos you have in /var/lib/pacman/sync/
sudo rm /var/lib/pacman/sync/*.sig

# perl: warning: Falling back to the standard locale ("C").

Adding the following to /etc/environment fixed the problem for me on Debian and Ubuntu (of course, modify to mat ch the locale you want to use):
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_CTYPE=en_US.UTF-8

# or on a Debian base

sudo locale-gen en_US en_US.UTF-8
sudo dpkg-reconfigure locales

# error: failed to synchronize all databases (unable to lock database)

sudo rm /var/lib/pacman/db.lck

.local//share/plasma/plasmoids/
its ~/.config/plasmashellrc … if you cant find it in there … just move or backup/delete the file so it is regenerated with defaults.

#How do I detach a process from Terminal?
lattedock & disown
killall latte-dock && sleep 1 && latte-dock & disown

# latte stuff

lattelatte-dock --replace --default-layout --cc & disown

# wrong resolution (manipulate X configuration files for the NVIDIA driver)

# https://manpages.ubuntu.com/manpages/trusty/man1/alt-nvidia-331-updates-xconfig.1.html

sudo nvidia-xconfig

# change monitor from side to side

sudo nano /etc/X11/xorg.conf
+1920+0 for +0+0 and viceversa

# BACKUP

---

Install
firefox workrave easyeffects

# Genymotion, ova, virtual machine


Open VirtualBox on your source computer
Right-click on the device you want to transfer and select Export to OCI...
Make sure to select the Open Virtualization Format 1.0 format and export the device
On your target computer, open VirtualBox and select File > Import Appliance
Import the OVA file you exported earlier
The imported device should then appear in Genymotion Desktop GUI.

# Virtualbox uninstall (when installed via sh on "Downloads")

cd ~/Downloads && chmod +x VirtualBox*.run && sudo ./VirtualBox*.run uninstall

# Easyeffects

# Backup

mv ~/.config/easyeffects/output/*.json ~/<WHEREVER>

#Restore
mv ~/Downloads/*.json ~/.config/easyeffects/output/

# Balena Etcher

https://www.balena.io/etcher/

## export custom keboard shortcuts
rm ~/.mcfly/history.db

# [SWHKD](https://github.com/waycrate/swhkdd)

## - To have systemd automatically start swhkd for you:
  -  Copy hotkeys.sh into your preferred directory
  -  chmod +x hotkeys.sh
  -  Copy hotkeys.service into your $XDG_CONFIG_DIR/systemd/user directory
    Using a text editor, uncomment line 7 of hotkeys.service and change the path accordingly
  -  In a terminal: systemctl --user enable hotkeys.service

```
cp ~/Downloads/hotkeys.sh ~/.dotfiles/bin
chmod +x ~/.dotfiles/bin/hotkeys.sh
cp ~/Downloads/hotkeys.service /usr/lib/systemd/ ????
journalctl /usr/lib/systemd/systemd ????
```

## - Configuration file
Swhkd closely follows sxhkd syntax, so most existing sxhkd configs should be functional with swhkd.

The default configuration file is in `/etc/swhkd/swhkdrc`. If you don't like having to edit the file as root every single time, you can create a symlink from `~/.config/swhkd/swhkdrc` to `/etc/swhkd/swhkdrc`:

```
mkdir ~/.config/swhkd/
mkdir /etc/swhkd/
touch ~/.config/swhkd/swhkdrc
sudo ln -s ~/.config/swhkd/swhkdrc /etc/swhkd/swhkdrc
```
If you use Vim, you can get swhkd config syntax highlighting with the `swhkd-vim plugin`. Install it in vim-plug with Plug `waycrate/swhkd-vim`.

All supported key and modifier names are listed in man 5 swhkd-keys.

## - Runtime signals:
After opening swhkd, you can control the program through signals:

    sudo pkill -USR1 swhkd - Pause key checking
    sudo pkill -USR2 swhkd - Resume key checking
    sudo pkill -HUP swhkd - Reload config file

ExecStart=/usr/bin/swhkd


# [rice's 🍚]()

## 🍚 [hyprland-dotfiles- Moerliy](https://github.com/Moerliy/dotfiles/blob/master/) 🍚
- [SWHKD](https://github.com/Moerliy/dotfiles/blob/master/.config/hypr/scripts/hotkeys)
- [grimblast](https://github.com/Moerliy/dotfiles/blob/master/.config/hypr/scripts/grimblast)


## [AmitGolden dotfiles](https://github.com/AmitGolden/dotfiles)

# paru -S hyprland-bin waybar-hyprland-git sddm sddm-sugar-candy-git wlogout wofi dunst papirus-icon-theme catppuccin-gtk-theme-mocha polkit-gnome wlsunset swayidle udev-block-notify blueman-applet brightnessctl swaylock-effects wofi-emoji wofi-calc wofi-wifi-menu-git playerctl grim slurp pipewire wireplumber xdg-desktop-portal-wlr wl-copy networkmanager

catppuccin-gtk-theme-mocha polkit-gnome wlsunset swayidle udev-block-notify wofi-emoji wofi-calc wofi-wifi-menu-git playerctl wl-copy
-> Could not find all required packages:
wl-copy (Target)
wofi-emoji (Target)

# paru -S thunar firefox deluge-gtk kitty wdisplays discord discocss spotify spicetify timeshift eog pavucontrol celluloid file-roller

wdisplays discocss eog celluloid file-roller

# paru -S zsh zsh-theme-powerlevel10k zoxide neovim zsh-autosuggestions fzf lf trash-cli exa ripgrep btop zsh-autopair-git zsh-vi-mode fzf-tab-git zsh-syntax-highlighting lazygit bat lesspipe fd nodejs-neovim python-neovim

zsh zsh-theme-powerlevel10k zoxide neovim zsh-autosuggestions fzf lf trash-cli exa ripgrep btop zsh-autopair-git zsh-vi-mode fzf-tab-git zsh-syntax-highlighting lazygit bat lesspipe fd nodejs-neovim python-neovim


## 🍚 hyprland-dotfiles- PROxZIMA 🍚

https://github.com/PROxZIMA/.dotfiles/tree/master/.config/wofi
bind = , XF86Calculator, exec, qalculate-gtk

## 🍚 hyprland-dotfiles- nawfalmrouyan 🍚

### nawfalmrouyan's execs
exec-once = /usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1
exec-once = /usr/lib/xfce-polkit/xfce-polkit &

### CUSTOM nawfalmrouyan
https://github.com/nawfalmrouyan/hyprland

windowrule = float, title:^(FireDragon — Sharing Indicator)$
windowrule = move 1577 15, title:^(FireDragon — Sharing Indicator)$
windowrulev2 = float, class:^(firedragon)$, title:^(Picture-in-Picture)$
windowrulev2 = pin, class:^(firedragon)$, title:^(Picture-in-Picture)$

### for ttyclock
windowrulev2 = float, class:^(clock)$, title:^(clock)$
windowrulev2 = size 33% 27%, class:^(clock)$, title:^(clock)$
windowrulev2 = center, class:^(clock)$, title:^(clock)$

# nawfalmrouyan's Screenshots
bind = , Print, exec, $screenshot --area
bind = CTRL, Print, exec, $screenshot --win
bind = $mainMod CTRL, Print, exec, $screenshot --now
# bind = $mainMod, Print, exec, $screenshot --in5
# bind = SHIFT, Print, exec, $screenshot --in10


## 🍚 hyprland-dotfiles- [linuxmobile](https://github.com/linuxmobile/hyprland-dots) 🍚

* for waybar:

"pulseaudio#microphone"

"custom/weather"

## 🍚 hyprland-dotfiles- [iamverysimp1e](https://github.com/iamverysimp1e/dots) 🍚

- [ewww](https://www.reddit.com/r/unixporn/comments/10pn2xn/hyprland_yet_another_wayland_rice/)

## 🍚 hyprland-dotfiles- [Sebastiaan76](https://github.com/Sebastiaan76/waybar_wireplumber_audio_changer) 🍚

- Sebby1976 https://www.reddit.com/r/hyprland/comments/10rmv6r/i_made_a_script_to_change_audio_sinks_using_wpctl/

## 🍚 hyprland-dotfiles- m4xshen 🍚

- custom-alsa.sh

```
╭─n30@n30 in ~/Downloads/hyprland-dotfiles- m4xshen took 127ms
╰─λ ag alsa.sh
hypr/hypr/hyprland.conf
69:bind = , xf86audioraisevolume, exec, amixer sset Master 5%+; exec pkill -SIGRTMIN+1 custom-alsa.sh
70:bind = , xf86audiolowervolume, exec, amixer sset Master 5%-; exec pkill -SIGRTMIN+1 custom-alsa.sh
```
- waybar/waybar/config
  25:      "exec": "custom-alsa.sh",

🍚 hyprland-dotfiles- [wildan](https://github.com/wildan-pratama/wildan-hyprland) 🍚

- https://www.youtube.com/watch?v=u7O5vAxLdNw

```
yay -S git sddm-git polkit hyprland-bin waybar-hyprland alacritty rofi nemo gvfs-mtp swayidle \
file-roller swaybg swaylock-effects-git wl-clipboard mailcap mpv networkmanager-dmenu-git \
mpc mpd ncmpcpp xdg-user-dirs pulsemixer pavucontrol qt5-graphicaleffects qt5-quickcontrols2 \
pipewire wireplumber grim slurp jq dunst qt5-wayland qt6-wayland
```
```
yay -S sddm-git hyprland-bin waybar-hyprland gvfs-mtp \
swaybg swaylock-effects-git networkmanager-dmenu-git \
xfce-polkit geany viewnior xdg-desktop-portal-hyprland-git \
mpc mpd ncmpcpp pulsemixer \
```
```
: sddm-git and sddm are in conflict. Remove sddm? [y/N] y
```
```
Packages (18) audiofile-0.3.6-7  libao-1.2.2-5  libmms-0.6.4-3  libnfs-5.0.2-1
libsidplayfp-2.4.2-1  sddm-0.19.0-9 [removal]  yajl-2.1.0-5
zziplib-0.13.72-1  geany-1.38-3  gvfs-mtp-1.50.3-1  mpc-0.34-2
mpd-0.23.12-1  ncmpcpp-0.9.2-10  networkmanager-dmenu-git-r165.60c12b5-1.1
pulsemixer-1.5.1-3  sddm-git-0.19.0.200.g8f1e3df-1  swaybg-1.2.0-1
viewnior-1.8-2

Total Download Size:    9.71 MiB
Total Installed Size:  26.96 MiB
Net Upgrade Size:      22.51 MiB

:: Packages (2) hyprland-git-r2442.f37866eb-1 [removal]  hyprland-bin-0.21.0beta-2
:: waybar-hyprland and waybar-hyprland-git are in conflict (waybar). Remove waybar-hyprland-git? [y/N]
```
- Copy Configuration and stuff

```
cd wildan-hyprland
sudo cp -a usr /
sudo cp -a etc /
cp -a .config ~/
cp -a .local ~/
```
## 🍚 [Nebula](https://github.com/Barbaross93/Nebula) (formerly Genome) WM: Qtile 🍚

- [dunstrc-nebula](https://github.com/Barbaross93/Nebula/blob/4a08d3cfd0900807aefaa9f9241a6dbf926c549b/.config/dunst/dunstrc#L77) --> configs on /home/n30/.config/dunst/
- [rofi_notif_center.sh](https://github.com/Barbaross93/Nebula/blob/main/.local/bin/rofi_notif_center.sh)
- [dunst_logger.sh](https://github.com/Barbaross93/Nebula/blob/main/.local/bin/dunst_logger.sh)

## 🍚 MrRoy (Sway Notification Center theme) Dracula colors 🍚

- SwayNC Config:
  [config.json](https://gist.github.com/MrRoy/40f103bc34f3a58699e218c3d06d1a43)
- SwayNC Dracula Theme:
  [style.css](https://gist.github.com/MrRoy/3a4a0b1462921e78bf667e1b36697268)

## [🍚 ldelosa | Louis DeLosSantos 🍚](https://github.com/ldelossa/dotfiles/tree/master/config/swaync): 

- swaync
  - style.css
  - confg.json
- gammastep
- waybar
  - script spotify 5% cpu consumptiontho!
-  [rofi + kitty ssh](https://github.com/ldelossa/dotfiles/tree/master/config/rofi)
-  

## [🍚 khaneliman 🍚](https://github.com/khaneliman/dotfiles): !! uses nvidia :(

[Hyprland](https://github.com/khaneliman/dotfiles/tree/main/dots/linux/hyprland)

```
# core
yay -Sy --needed waybar-hyprland-git xdg-desktop-portal-hyprland-git swaync-git wlogout rofi-lbonn-wayland-git swayidle swaylock-effects-git hyprpaper-git blueman network-manager-applet polkit-kde-agent gnome-keyring
# theme
yay -Sy --needed kvantum qt5ct qt6ct
# convenience
yay -Sy --needed find-the-command cliphist firefox-developer-edition
# media
yay -Sy --needed thunar spotify playerctl wireplumber swayimg hyprpicker-git wf-recorder grim
```

- [record_screen](https://github.com/khaneliman/dotfiles/blob/main/dots/linux/hyprland/home/.local/bin/record_screen)
- [xdg-desktop-portal.sh](https://github.com/khaneliman/dotfiles/blob/main/dots/linux/hyprland/home/.local/bin/xdg-desktop-portal.sh)
- [Grimblast](https://github.com/khaneliman/dotfiles/blob/main/dots/linux/hyprland/home/.local/bin/grimblast) or [original](https://github.com/hyprwm/contrib/blob/main/grimblast/grimblast)
a helper for screenshots within hyprland
-   [blurredfox](https://github.com/khaneliman/blurredfox):A modern Firefox CSS Theme 

- [screenshot](https://github.com/khaneliman/dotfiles/blob/main/dots/linux/hyprland/home/.config/hypr/binds.conf)
```
bind = $mainMod, x, exec, hyprpicker -a && (convert -size 32x32 xc:$(wl-paste) /tmp/color.png && notify-send "Color Code:" "$(wl-paste)" -h "string:bgcolor:$(wl-paste)" --icon /tmp/color.png -u critical -t 4000)
```
- [environmet](https://github.com/khaneliman/dotfiles/blob/main/dots/linux/hyprland/home/.config/hypr/environment.conf)


## [🍚 psykose 🍚](https://git.ddd.rip/psykose/dotfiles/src/branch/main/swaync/config.json):

- swaync
  - [style.css](https://git.ddd.rip/psykose/dotfiles/src/branch/main/swaync/style.css)
  - [confg.json](https://git.ddd.rip/psykose/dotfiles/src/branch/main/swaync/config.json)
-

## [🍚 nosvagor 🍚](https://github.com/nosvagor/dotfiles):
- [bin/alert](https://github.com/nosvagor/dotfiles/blob/main/bin/alert): variables for sound of notify-send ⮯
- [bin/change-bg](https://github.com/nosvagor/dotfiles/blob/main/bin/change-bg): videowallpaperchange

- dotfiles
# # re-size windows
# $master_big=hyprctl dispatch resizeactive exact 1866 1955
# $master_norm=hyprctl dispatch resizeactive exact 1012 1955
# bind=ALT,Q,exec,$master_big
# bind=ALT,W,exec,$master_big;$master_norm;$master_norm;$master_norm;$master_norm;$master_norm;
# bind=ALT,F,resizeactive,exact 1870 1186
# bind=ALTSHIFTCTRL,S,exec, hyprctl dispatch moveactive exact 2361 147; hyprctl dispatch resizeactive exact 1301 1000;
# # spotify preferred window ⮭


- exporting:
```
export HYPRLAND_LOG_WLR=1
export XCURSOR_SIZE=24
export XCURSOR_THEME=Nordzy-cursors-white
export PATH="$HOME/.cargo/bin:$PATH"
export GOPATH="$HOME/.go"
export PATH="$PATH:$HOME/.go/bin"
export PAGER=nvimpager
export EDITOR="nvim"
export DOTS="$HOME/dotfiles"

# export PISTOL_CHROMA_STYLE=catppuccin-macchiato

export FZF_DEFAULT_OPTS="\
--color=bg+:#363a4f,bg:#24273a,spinner:#f4dbd6,hl:#F5A97F \
--color=fg:#cad3f5,header:#F5A97F,info:#8AADF4,pointer:#f4dbd6 \
--color=marker:#f4dbd6,fg+:#cad3f5,prompt:#8AADF4,hl+:#F5A97F"

export XDG_CURRENT_DESKTOP=Hyprland
export XDG_SESSION_TYPE=wayland
export XDG_SESSION_DESKTOP=Hyprland

export QT_AUTO_SCREEN_SCALE_FACTOR=1
export QT_QPA_PLATFORM=xcb
export QT_WAYLAND_DISABLE_WINDOWDECORATION=1
export QT_QPA_PLATFORMTHEME=qt5c

export GDK_BACKEND="wayland,x11"
export CLUTTER_BACKEND=wayland
export SDL_VIDEODRIVER=wayland

exec Hyprland
```

## [🍚 JaKooLit 🍚](https://github.com/JaKooLit/Ja_HyprLanD-dots/tree/main/config/hypr): 

- [scripts](https://github.com/JaKooLit/Ja_HyprLanD-dots/tree/main/config/hypr/scripts)
- [modular configs](https://github.com/JaKooLit/Ja_HyprLanD-dots/tree/main/config/hypr/configs)



> # **[wayab](https://github.com/chux0519/wayab)**

wayab(wayland animated background) allows user to set animated background on Linux(wayland).

>>> cairo-glesv2-bin and cairo are in conflict. Remove cairo? [y/N]
>>>
>>

Window 74b54a70 -> qBittorrent v4.5.0.10:
at: 1187,67
size: 2229,1350
workspace: 5 (5)
floating: 0
monitor: 0
class: org.qbittorrent.qBittorrent
title: qBittorrent v4.5.0.10
pid: 4465
xwayland: 0
pinned: 0
fullscreen: 0
fullscreenmode: 0
fakefullscreen: 0
grouped: 0

Window 74cc4000 -> The.Mandalorian.S03E04.1080p.DSNP.WEBRip.DDP5.1.H.264-NTb[TGx]:
at: 769,372
size: 1901,695
workspace: 2 (2)
floating: 1
monitor: 0
class: org.qbittorrent.qBittorrent
title: The.Mandalorian.S03E04.1080p.DSNP.WEBRip.DDP5.1.H.264-NTb[TGx]
pid: 4465
xwayland: 0
pinned: 0
fullscreen: 0
fullscreenmode: 0
fakefullscreen: 0
grouped: 0
swallowing: 0

# evtest

`yay -S evtest`

To see the Wayland events generated when a key is pressed first, you'll need to determine the device node for your keyboard. You can do this by running the sudo `libinput list-devices` command and looking for your keyboard device in the list. Once you've identified the device node, you can use it with the evtest command.

```
sudo evtest /dev/input/event3
```
> # **[bash tools]()**

* [ShellCheck](https://www.shellcheck.net/)
  is a static analysis tool for shell scripts

* [ChatGPT](https://chat.openai.com/chat) is a static analysis tool for shell scripts

> # **[keyboard tools](https://github.com/swaywm/sway/wiki/Useful-add-ons-for-sway#on-screen-keyboards)**

* [Binds WIKI for Hyprland:](https://wiki.hyprland.org/Configuring/Binds/)

  * **Uncommon syms / binding with a keycode:** See the [xkbcommon-keysyms.h](https://github.com/xkbcommon/libxkbcommon/blob/master/include/xkbcommon/xkbcommon-keysyms.h) header for all the keysyms. ~~The name you should use is the one after XKB_KEY_, written in all lowercase, e.g.: `XKB_KEY_Caps_Lock` will become `caps_lock`~~

    If you are unsure of what your key’s name is, you can use ~~`xev` or~~ `wev` to find that information.
    ~~If you want to bind by a keycode, you can just input it in the KEY position with a code: prefix, e.g. for capslock: `bind=SUPER,code:66,exec,$test`~~
  * You can **bind a mod alone** like this: `bindr=ALT,Alt_L,exec,$test`

    Or for a scratchpad binded on SUPER: `bindr = $mainMod, $mainMod_L, togglespecialworkspace,`
  * **Global Keybinds:**
    Let’s take OBS as an example: the “Start/Stop Recording” keybind is set to SUPER + F10, and you want to make it work globally.
    `bind = SUPER,F10,pass,^(com\.obsproject\.Studio)$`
  * **push-to-talk** will work flawlessly with one pass, e.g.:
    `bind=,mouse:276,pass,^(TeamSpeak 3)$`
    Will pass `MOUSE5` to TeamSpeak3 because "`pass`" will pass the PRESS and RELEASE events by itself, no need for a bindr.
  *
* [squeekboard](https://gitlab.gnome.org/World/Phosh/squeekboard) - On-screen Librem5 keyboard
* [wvkbd](https://github.com/jjsullivan5196/wvkbd) - On-screen keyboard for wlroots that sucks less
* [wshowkeys](https://sr.ht/~sircmpwn/wshowkeys/): Displays keypresses on screen on supported Wayland compositors

```
lojazwlr_layer_surface_v1@11: error 2: layer_surface has never been configured
wl_display_dispatch: Protocol error
```
* [kmonad](https://github.com/kmonad/kmonad)

KMonad is an advanced tool that lets you infinitely customize and extend the functionalities of almost any keyboard

>>> https://www.reddit.com/r/hyprland/comments/11cdj3d/hide_waybar_and_show_only_with_mod_key/
>>>
>>

* [𝑋𝑟𝑒𝑚𝑎𝑝](https://github.com/k0kubun/xremap)

xremap is a key remapper for Linux. Unlike xmodmap, it supports app-specific remapping and Wayland.

* [caps2esc](https://gitlab.com/interception/linux/plugins/caps2esc)

transforming the most useless key ever in the most useful one
By moving the CAPSLOCK function to the far ESC location

> # **[Locking](https://github.com/swaywm/sway/wiki/Useful-add-ons-for-sway#locking)**

* [chayang](https://git.sr.ht/~emersion/chayang)
  Gradually dim the screen. Can be used to implement a grace period before locking the session.

> # **[Avizo](https://github.com/misterdanb/avizo)**
>
> ![.](https://raw.githubusercontent.com/misterdanb/avizo/master/github/screenshot.png)
> a simple notification daemon, mainly intended to be used for multimedia keys

- Hyprland config:

```
binde = , xf86audioraisevolume, exec, volumectl -u up
binde = , xf86audiolowervolume, exec, volumectl -u down
bind = , xf86audiomute, exec, volumectl toggle-mute
```
- Sway config (as guide only):

```
bindsym XF86AudioRaiseVolume exec volumectl -u up
bindsym XF86AudioLowerVolume exec volumectl -u down
bindsym XF86AudioMute exec volumectl toggle-mute
bindsym XF86AudioMicMute exec volumectl -m toggle-mute

bindsym XF86MonBrightnessUp exec lightctl up
bindsym XF86MonBrightnessDown exec lightctl down

exec "avizo-service"
```
> # **[SwayOSD](https://github.com/ErikReider/SwayOSD)**
>
> ![](https://user-images.githubusercontent.com/35975961/200685357-fb9697ae-a32d-4c60-a2ae-7791e70097b9.png)
>
>> A OSD window for common actions like volume and capslock.
>>

- Hyprland config:

```
binde= , xf86audioraisevolume, exec, swayosd --output-volume raise
binde= , xf86audiolowervolume, exec, swayosd --output-volume lower
bind= , xf86audiomute, exec, swayosd --output-volume mute-toggle
bindr=ALT,Alt_L, exec, swayosd --caps-lock
bind=KEY_CAPSLOCK,l, exec, $test
```
- Sway config (as guide only):

```
# OSD window
exec swayosd

# Sink volume raise
bindsym XF86AudioRaiseVolume exec swayosd --output-volume raise
# Sink volume lower
bindsym XF86AudioLowerVolume exec  swayosd --output-volume lower
# Sink volume toggle mute
bindsym XF86AudioMute exec swayosd --output-volume mute-toggle
# Source volume toggle mute
bindsym XF86AudioMicMute exec swayosd --input-volume mute-toggle

# Capslock
bindsym --release Caps_Lock exec swayosd --caps-lock

# Capslock but specific LED name (/sys/class/leds/)
bindsym --release Caps_Lock exec swayosd --caps-lock-led input19::capslock

# Brightness raise
bindsym XF86MonBrightnessUp exec swayosd --brightness raise
# Brightness lower
bindsym XF86MonBrightnessDown exec swayosd --brightness lower
```
> # **[fnott](https://codeberg.org/dnkl/fnott)**

Fnott is a keyboard driven and lightweight notification daemon for wlroots-based Wayland compositors.

> ![lol](https://codeberg.org/dnkl/fnott/media/branch/master/screenshot.png)

Notifications are automatically sized (with the possibility of limiting their max width and height):

> ![lol](https://codeberg.org/dnkl/fnott/media/branch/master/screenshot-2.png)

> ![lol](https://codeberg.org/dnkl/fnott/media/branch/master/screenshot-2.png)

> # [cute-sway-recorder](https://github.com/it-is-wednesday/cute-sway-recorder) & **[wf-recorder](https://github.com/ammen99/wf-recorder)**

> ![lol](https://github.com/it-is-wednesday/cute-sway-recorder/blob/master/screenshots/done.png?raw=true)

`pip install cute-sway-recorder`

>>> cute-sway-recorder
>>>
>>

```
╭─n30@n30 in ~ as 🧙 took 40s
╰─λ cute-sway-recorder
00:00:00.007 [swaymsg/main.c:491] Unable to retrieve socket path
00:00:00.007 [swaymsg/main.c:491] Unable to retrieve socket path
Traceback (most recent call last):
File "/usr/bin/cute-sway-recorder", line 8, in <module>
sys.exit(main())
File "/home/n30/.local/lib/python3.10/site-packages/cute_sway_recorder/main.py", line 221, in main
window = CuteRecorderQtApplication()
File "/home/n30/.local/lib/python3.10/site-packages/cute_sway_recorder/main.py", line 74, in __init__
self.config_area = ConfigArea(self)
File "/home/n30/.local/lib/python3.10/site-packages/cute_sway_recorder/config_area.py", line 26, in __init__
self.selection_box = SelectionGroup(window)
File "/home/n30/.local/lib/python3.10/site-packages/cute_sway_recorder/group_selection.py", line 42, in __init__
"Select screen" if len(available_screens()) > 1 else "Whole screen"
File "/home/n30/.local/lib/python3.10/site-packages/cute_sway_recorder/common.py", line 17, in available_screens
out = subprocess.check_output(["swaymsg", "-t", "get_outputs"], text=True)
File "/usr/lib/python3.10/subprocess.py", line 421, in check_output
return run(*popenargs, stdout=PIPE, timeout=timeout, check=True,
File "/usr/lib/python3.10/subprocess.py", line 526, in run
raise CalledProcessError(retcode, process.args,
subprocess.CalledProcessError: Command '['swaymsg', '-t', 'get_outputs']' returned non-zero exit status 1.
```
>>> pip install cute-sway-recorder
>>>
>>

```
╭─n30@n30 in ~ as 🧙 took 306ms
[🔴] × pip install cute-sway-recorder
Defaulting to user installation because normal site-packages is not writeable
Requirement already satisfied: cute-sway-recorder in ./.local/lib/python3.10/site-packages (0.1.10)
Requirement already satisfied: PySide6<7.0.0,>=6.0.0 in ./.local/lib/python3.10/site-packages (from cute-sway-recorder) (6.4.3)
Requirement already satisfied: PySide6-Essentials==6.4.3 in ./.local/lib/python3.10/site-packages (from PySide6<7.0.0,>=6.0.0->cute-sway-recorder) (6.4.3)
Requirement already satisfied: PySide6-Addons==6.4.3 in ./.local/lib/python3.10/site-packages (from PySide6<7.0.0,>=6.0.0->cute-sway-recorder) (6.4.3)
Requirement already satisfied: shiboken6==6.4.3 in ./.local/lib/python3.10/site-packages (from PySide6<7.0.0,>=6.0.0->cute-sway-recorder) (6.4.3)
```
>>> **sudo** pip install cute-sway-recorder
>>>
>>

```
╭─n30@n30 in ~ as 🧙 took 459ms
[🔍] × sudo pip install cute-sway-recorder
Collecting cute-sway-recorder
Downloading cute_sway_recorder-0.1.10-py3-none-any.whl (9.2 kB)
Collecting PySide6<7.0.0,>=6.0.0
Downloading PySide6-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (6.7 kB)
Collecting PySide6-Essentials==6.4.3
Downloading PySide6_Essentials-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (84.5 MB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 84.5/84.5 MB 4.1 MB/s eta 0:00:00
Collecting PySide6-Addons==6.4.3
Downloading PySide6_Addons-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (122.5 MB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 122.5/122.5 MB 6.4 MB/s eta 0:00:00
Collecting shiboken6==6.4.3
Downloading shiboken6-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (171 kB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 171.6/171.6 kB 6.6 MB/s eta 0:00:00
Installing collected packages: shiboken6, PySide6-Essentials, PySide6-Addons, PySide6, cute-sway-recorder
Successfully installed PySide6-6.4.3 PySide6-Addons-6.4.3 PySide6-Essentials-6.4.3 cute-sway-recorder-0.1.10 shiboken6-6.4.3
WARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv
```
>>> `pip install cute-sway-recorder` (first attempt)
>>>
>>

```
╭─n30@n30 in ~ as 🧙 took 83ms
[🔴] × pip install cute-sway-recorder
Defaulting to user installation because normal site-packages is not writeable
Collecting cute-sway-recorder
Downloading cute_sway_recorder-0.1.10-py3-none-any.whl (9.2 kB)
Collecting PySide6<7.0.0,>=6.0.0
Downloading PySide6-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (6.7 kB)
Collecting PySide6-Essentials==6.4.3
Downloading PySide6_Essentials-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (84.5 MB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 84.5/84.5 MB 2.9 MB/s eta 0:00:00
Collecting PySide6-Addons==6.4.3
Downloading PySide6_Addons-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (122.5 MB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 122.5/122.5 MB 6.3 MB/s eta 0:00:00
Collecting shiboken6==6.4.3
Downloading shiboken6-6.4.3-cp37-abi3-manylinux_2_28_x86_64.whl (171 kB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 171.6/171.6 kB 8.1 MB/s eta 0:00:00
Installing collected packages: shiboken6, PySide6-Essentials, PySide6-Addons, PySide6, cute-sway-recorder
WARNING: The scripts pyside6-assistant, pyside6-deploy, pyside6-designer, pyside6-genpyi, pyside6-linguist, pyside6-lrelease, pyside6-lupdate, pyside6-metaobjectdump, pyside6-project, pyside6-qml, pyside6-qmlformat, pyside6-qmlimportscanner, pyside6-qmllint, pyside6-qmlls, pyside6-qmltyperegistrar, pyside6-qtpy2cpp, pyside6-rcc and pyside6-uic are installed in '/home/n30/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
WARNING: The script cute-sway-recorder is installed in '/home/n30/.local/bin' which is not on PATH.
Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
Successfully installed PySide6-6.4.3 PySide6-Addons-6.4.3 PySide6-Essentials-6.4.3 cute-sway-recorder-0.1.10 shiboken6-6.4.3
```
> # **[green-recorder](https://github.com/dvershinin/green-recorder)**
>
> `yaourt -S green-recorder-git`

```
╭─n30@n30 in ~ as 🧙 took 8s
╰─λ green-recorder
You are recording on: wayland
Traceback (most recent call last):
File "/usr/bin/green-recorder", line 33, in <module>
sys.exit(load_entry_point('green-recorder==3.2.10', 'gui_scripts', 'green-recorder')())
File "/usr/bin/green-recorder", line 25, in importlib_load_entry_point
return next(matches).load()
File "/usr/lib/python3.10/importlib/metadata/__init__.py", line 171, in load
module = import_module(match.group('module'))
File "/usr/lib/python3.10/importlib/__init__.py", line 126, in import_module
return _bootstrap._gcd_import(name[level:], package, level)
File "<frozen importlib._bootstrap>", line 1050, in _gcd_import
File "<frozen importlib._bootstrap>", line 1027, in _find_and_load
File "<frozen importlib._bootstrap>", line 1006, in _find_and_load_unlocked
File "<frozen importlib._bootstrap>", line 688, in _load_unlocked
File "<frozen importlib._bootstrap_external>", line 883, in exec_module
File "<frozen importlib._bootstrap>", line 241, in _call_with_frames_removed
File "/usr/lib/python3.10/site-packages/recorder/__init__.py", line 1, in <module>
from .recorder import main
File "/usr/lib/python3.10/site-packages/recorder/recorder.py", line 112, in <module>
GNOMEScreencast = bus.get('org.gnome.Shell.Screencast', '/org/gnome/Shell/Screencast')
File "/usr/lib/python3.10/site-packages/pydbus/proxy.py", line 44, in get
ret = self.con.call_sync(
gi.repository.GLib.GError: g-dbus-error-quark: GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.gnome.Shell.Screencast was not provided by any .service files (2)
```
> # **[kooha](https://flathub.org/apps/details/io.github.seadve.Kooha)**

a simple screen recorder with a minimalist interface.[Gnome and software encoding only tho.](https://www.reddit.com/r/kde/comments/z1sy6a/any_working_screen_recorder_for_plasma_wayland/)

> `yay -s kooha`

> # **[wf-recorder](https://github.com/ammen99/wf-recorder)**
wf-recorder is a utility program for screen recording of wlroots-based compositors 
pacman -S wf-recorder


> # **[nwg-displays](https://github.com/nwg-piotr/nwg-displays)**
Output management utility for sway Wayland compositor, inspired by wdisplays and wlay.This application is a part of the [nwg-shell project](https://nwg-piotr.github.io/nwg-shell/).

```
WARNING: Couldn't find sway config directory '/home/n30/.config/sway'
Settings: {'view-scale': 0.15, 'snap-threshold': 10, 'indicator-timeout': 500, 'custom-mode': []}
Running on Hyprland
wlr-randr package required, but not found, terminating.
```

`yay -S wlr-randr`

:: Importing keys with gpg...
gpg: keyserver receive failed: Server indicated a failure
-> problem importing keys

so:

sudo pacman-key --init

sudo pacman-key --populate

> # **[shotman](hhttps://gitlab.com/WhyNotHugo/shotman)**
A simple UI for handling screenshots.

    :: Importing keys with gpg...
    gpg: keyserver receive failed: Server indicated a failure
    -> problem importing keys
so:

sudo pacman-key --init

sudo pacman-key --populate

# [ChatGPT & REDDIT]()

- ## [Right mouse click to invoke wofi menu](https://www.reddit.com/r/swaywm/comments/123pbft/right_mouse_click_to_invoke_wofi_menu/)

`bindsym button3 exec wofi`

I'm on Hyprland atm so I can't check it for but you can [check this wiki](https://i3wm.org/docs/userguide.html#mousebindings) for more info.

I'm on Hyprland and this does the trick on the conf:
`bind=,mouse:273,exec,yourcommand`

- ## Unable to retrieve socket path

```
systemctl --user status xdg-desktop-portal-hyprland xdg-desktop-portal
00:00:00.007 [swaymsg/main.c:491] Unable to retrieve socket path
```
- ## [How to jump to a desktop if the app is already running and start it otherwise?](https://www.reddit.com/r/hyprland/comments/11cmlwz/how_to_jump_to_a_desktop_if_the_app_is_already/)

```
#!/bin/sh
hyprctl clients | grep class:.foot && \
echo hyprctl keyword workspace $( hyprctl clients |grep class..foot -B4 && wlrctl window focus foot )
|| foot -L
```
- ## [Force apps to use Wayland](https://wiki.hyprland.org/Getting-Started/Master-Tutorial/#force-apps-to-use-wayland)

A lot of apps will use Wayland by default. Chromium (and other browsers based on it or electron) don’t. You need to pass `--enable-features=UseOzonePlatform --ozone-platform=wayland` to them or use `.conf` files where possible. Chromium-based browsers also should have a toggle in `chrome://flags`. Search for “ozone” and select Wayland.

For most electron apps, you should put the above in `~/.config/electron-flags.conf`. VSCode is known to not work with that though.

A few more environment variables for forcing Wayland mode are documented here.You can check whether an app is running in xwayland or not with `hyprctl clients`.

- ## [Certain apps look blurry](https://www.reddit.com/r/hyprland/comments/122tg7x/certain_apps_look_blurry/)

Xwayland + scaling = issues because x11 cannot do fractional scaling.obsidian can be forced to use wayland

Edit the file `/usr/share/applications/obsidian.conf` and append the exec part with this flag:
`--enable-features=UseOzonePlatform --ozone-platform=wayland`

- ## hyprland dpms terminal command for turning off display 3

To turn off a specific display connected to your Hyperland system using the DPMS (Display Power Management System), you can use the xset command.

First, you need to identify the name of the display you want to turn off. You can do this by running the `xrandr` command without any arguments, which will display a list of all connected displays and their current status.

Once you have identified the name of the display you want to turn off, you can use the following command to turn it off using DPMS:

xset dpms force off && sleep 1 && xrandr --output DP-3 --off

This command will turn off the specified display using DPMS, which puts the display into a low-power state, and then turns off the display using xrandr.

Note that turning off a display using DPMS does not shut down your computer or terminate your terminal session. It only turns off the display. To turn the display back on, you can use the same xrandr command with the --auto option, or press a key or move the mouse.

* 😇

  `( flameshot &; ) && ( sleep 0.5s && flameshot gui )`

> # **[dotfiles git](https://blog.smalleycreative.com/using-git-and-github-to-manage-your-dotfiles/)**

```
cd ~/.dotfiles && git init
git add .
git commit -m 'First Git commit of my dotfiles :D'
git branch -M master
git remote add origin https://github.com/neomikr0n/dotfiles.git
git config --global credential.helper store
git push origin master
```

- The default branch has been renamed!

main is now named master

If you have a local clone, you can update it by running the following commands.
```
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a
```

- [GitHub Error: Authentication Failed from the Command Line](https://ginnyfahs.medium.com/github-error-authentication-failed-from-command-line-3a545bfd0ca8)
  1. Go to Settings >> Developer Settings >> Personal access tokens >> [Tokens](https://github.com/settings/tokens) (classic)
  2. Generate a new Personal Access Token (also classic). Make sure you copy the Personal Access Token as soon as it gets generated — you won’t be able to see it again!
  3. Paste the Personal Access Token into the “Password” field when you authenticate via the command line.

- [How to fix Git always asking for user credentials](https://www.freecodecamp.org/news/how-to-fix-git-always-asking-for-user-credentials/)

      git config --global credential.helper store

- [Other useful commands:]()
  ```
  git push -u origin master

  git remote add origin git@github.com:username/dotfiles.git

  git config pull.rebase true
  git config credential.interactive false

  git pull -f origin main

  git push -f origin master
  git config --global init.defaultBranch master
  ```

> # **[chezmoi](https://www.chezmoi.io/)**

Manage your dotfiles across multiple diverse machines, securely.

[step-by-step guide on how to start using chezmoi to manage your dotfiles.](https://jerrynsh.com/how-to-manage-dotfiles-with-chezmoi/)

`~/.local/share/chezmoi`: source directory where chezmoi stores its source state.
```
chezmoi add ~/Documents/deleteme.md

git remote add origin git@github.com:your-awesome-username/dotfiles.git 
git branch -M main

git add .
git commit -m "<Initial commit message>"
git push -u origin main
```

official:

> `yay -s chezmoi`
> 


## [Start using chezmoi on your current machine](https://www.chezmoi.io/quick-start/#start-using-chezmoi-on-your-current-machine)

```
chezmoi init
```
This will create a new git local repository in `~/.local/share/chezmoi` where chezmoi will store its source state. By default, chezmoi only modifies files in the working copy.

Manage your first file with chezmoi:

```
chezmoi add ~/.bashrc
chezmoi add ~/Documents/deleteme.md

```
This will copy `~/.bashrc` to `~/.local/share/chezmoi/dot_bashrc`.

Edit the source state:

```
chezmoi edit ~/Documents/deleteme.md
chezmoi edit ~/.bashrc
chezmoi edit ~/.config/swaync/config.json

```
This will open `~/.local/share/chezmoi/dot_bashrc` in your `$EDITOR`. Make some changes and save the file.

See what changes chezmoi would make:

```
chezmoi diff
```
Apply the changes:

```
chezmoi -v apply
```
All chezmoi commands accept the -v (verbose) flag to print out exactly what changes they will make to the file system, and the -n (dry run) flag to not make any actual changes. The combination -n -v is very useful if you want to see exactly what changes would be made.

Next, open a shell in the source directory, to commit your changes:

```
chezmoi cd
git add .
git commit -m "Initial commit"
```
## Create a new repository on GitHub called dotfiles and then push your repo:

```
git remote add origin https://github.com/neomikr0n/dotfiles.git
git branch -M main
git push -u origin main
```


chezmoi init --apply --verbose https://github.com/neomikr0n/dotfiles.git

 # **[terminal tools]()**

- ## [ag](https://github.com/jarcode-foss/glava): The Silver Searcher
  A code searching tool similar to ack, with a focus on speed.
  ```
  pacman -S the_silver_searcher
  ```
```
Usage: ag [FILE-TYPE] [OPTIONS] PATTERN [PATH]

ag scriptsdir ~/.dotfiles --ignore-dir={google-chrome-backup,Code - OSS,History}


Output Options:
--ackmate            Print results in AckMate-parseable format
-A --after [LINES]      Print lines after match (Default: 2)
-B --before [LINES]     Print lines before match (Default: 2)
--[no]break          Print newlines between matches in different files
(Enabled by default)
-c --count              Only print the number of matches in each file.
(This often differs from the number of matching lines)
--[no]color          Print color codes in results (Enabled by default)
--color-line-number  Color codes for line numbers (Default: 1;33)
--color-match        Color codes for result match numbers (Default: 30;43)
--color-path         Color codes for path names (Default: 1;32)
--column             Print column numbers in results
--[no]filename       Print file names (Enabled unless searching a single file)
-H --[no]heading        Print file names before each file's matches
(Enabled by default)
-C --context [LINES]    Print lines before and after matches (Default: 2)
--[no]group          Same as --[no]break --[no]heading
-g --filename-pattern PATTERN
Print filenames matching PATTERN
-l --files-with-matches Only print filenames that contain matches
(don't print the matching lines)
-L --files-without-matches
Only print filenames that don't contain matches
--print-all-files    Print headings for all files searched, even those that
don't contain matches
--[no]numbers        Print line numbers. Default is to omit line numbers
when searching streams
-o --only-matching      Prints only the matching part of the lines
--print-long-lines   Print matches on very long lines (Default: >2k characters)
--passthrough        When searching a stream, print all lines even if they
don't match
--silent             Suppress all log messages, including errors
--stats              Print stats (files scanned, time taken, etc.)
--stats-only         Print stats and nothing else.
(Same as --count when searching a single file)
--vimgrep            Print results like vim's :vimgrep /pattern/g would
(it reports every match on the line)
-0 --null --print0      Separate filenames with null (for 'xargs -0')

Search Options:
-a --all-types          Search all files (doesn't include hidden files
or patterns from ignore files)
-D --debug              Ridiculous debugging (probably not useful)
--depth NUM          Search up to NUM directories deep (Default: 25)
-f --follow             Follow symlinks
-F --fixed-strings      Alias for --literal for compatibility with grep
-G --file-search-regex  PATTERN Limit search to filenames matching PATTERN
--hidden             Search hidden files (obeys .*ignore files)
-i --ignore-case        Match case insensitively
--ignore PATTERN     Ignore files/directories matching PATTERN
(literal file/directory names also allowed)
--ignore-dir NAME    Alias for --ignore for compatibility with ack.
-m --max-count NUM      Skip the rest of a file after NUM matches (Default: 10,000)
--one-device         Don't follow links to other devices.
-p --path-to-ignore STRING
Use .ignore file at STRING
-Q --literal            Don't parse PATTERN as a regular expression
-s --case-sensitive     Match case sensitively
-S --smart-case         Match case insensitively unless PATTERN contains
uppercase characters (Enabled by default)
--search-binary      Search binary files for matches
-t --all-text           Search all text files (doesn't include hidden files)
-u --unrestricted       Search all files (ignore .ignore, .gitignore, etc.;
searches binary and hidden files as well)
-U --skip-vcs-ignores   Ignore VCS ignore files
(.gitignore, .hgignore; still obey .ignore)
-v --invert-match
-w --word-regexp        Only match whole words
-W --width NUM          Truncate match lines after NUM characters
-z --search-zip         Search contents of compressed (e.g., gzip) files

File Types:
The search can be restricted to certain types of files. Example:
ag --html needle
- Searches for 'needle' in files with suffix .htm, .html, .shtml or .xhtml.

For a list of supported file types run:
ag --list-file-types

ag was originally created by Geoff Greer. More information (and the latest release)
can be found at http://geoff.greer.fm/ag
```

- ## [glava](https://github.com/jarcode-foss/glava): 
  a general-purpose, highly configurable OpenGL audio spectrum visualizer 

- ## [lavat](https://github.com/AngelJumbo/lavat): 
lavat -c yellow -R1 -k red![lavat -c yellow -R1 -k red](https://github.com/AngelJumbo/demos/raw/main/lavat/5.gif?raw=true)

- ## [neofetch]: 
neofetch | lolcat -a -d 1 -s 999 -t

- ## [pfetch]: 
pfetch | lolcat -a -d 1 -s 999 -t

- ## [Hyprkeys](https://github.com/hyprland-community/Hyprkeys): 

A simple, scriptable keybind retrieval utility for Hyprand

  1. Download Go. `yay go1`
  2. `cd ~/Documents/forks/`
  3. Clone this repository with `git clone https://github.com/notashelf/hyprkeys`
  4. Install the application with `make build && sudo make install`
  5. `hyprkeys -b -m`

```
Usage:
hyprkeys [flags]
hyprkeys [command]

Available Commands:
completion  Generate the autocompletion script for the specified shell
help        Help about any command
version     Prints current verison

Flags:
-a, --auto-start            Show autostarting programs
-b, --binds                 output binds
-l, --comments              Show comments in output
-c, --config-file string    path to your hyprland config
-f, --filter-binds string   get binding where command or dispatcher contains given string
-t, --from-ctl              get binds from ctl
-h, --help                  help for hyprkeys
-j, --json                  Output in json
-k, --keywords              Show keywords
-m, --markdown              Output in markdown
-o, --output string         path to output file
-r, --raw                   Output in plain text
-v, --variables             Show variables
```

- ## [showmethekey](https://github.com/AlynxZhou/showmethekey): 
gui only works for mouse, cli works for keyboard also:

`showmethekey-cli`
This part exists because of Wayland's security policy, which means you cannot run a GUI program with sudo. It's suggested to split your program into a GUI frontend and a CLI backend that do privileged operations, and this is the backend.

- ## [0x0Uploader](https://codeberg.org/MorsMortium/0x0uploader): 
  Uploader for the 0x0 file sharing service.

  `0x0uploader '/home/n30/Pictures/Screenshots/ss_2023-04-26-18-2149_garuda.png'`


- ## [tldr](https://github.com/tldr-pages/tldr): 
  collection of community-maintained help pages for command-line tools, that aims to be a simpler, more approachable complement to traditional man pages.

  ```
  yay -S tldr
  yay -S tealdeer     # alternative writen in rust
  tldr --update
  ```
- ## [gifgen](https://github.com/lukechilds/gifgen)

  ```
  Usage: gifgen [options] [input]

  Options:
  -o   Output file [input.gif]
  -f   Frames per second [10]
  -s   Optimize for static background
  -v   Display verbose output from ffmpeg
  -w   Scale output with horizontal resolution
  -b   Begin the clip at a given timestamp (in seconds)
  -d   Duration in seconds of the resulting gif, can be combined with at

  Examples:
  $ gifgen video.mp4
  $ gifgen -o demo.gif SCM_1457.mp4
  $ gifgen -sf 15 screencap.mov
  $ gifgen -sf 15 -w 320 screencap.mov

  Begin at 3.5 seconds into the video, make the gif using the next 5.5 seconds
  $ gifgen -b 3.5 -d 5.5 screencap.mov
  ```

- ## [joystickwake](https://github.com/foresto/joystickwake):
A joystick-aware screen waker

joystickwake --loglevel info --cooldown 1 --command "hyprctl dispatch dpms on"

- ## [wljoywake](https://github.com/nowrep/wljoywake):
Joystick

- ## [thefuck](https://github.com/nvbn/thefuck):
  corrects errors in previous console commands.

  To enable instant mode, add --enable-experimental-instant-mode to the alias initialization in .bashrc, .bash_profile or .zshrc.

  For example:

  eval $(thefuck --alias --enable-experimental-instant-mode)

- ## [lf](https://github.com/gokcehan/lf):
  (as in "list files") is a terminal file manager written in Go with a heavy inspiration from ranger file manager.

- ## [backgroundremover](https://github.com/nadermx/backgroundremover): The Silver Searcher
    
  pip install --upgrade pip
  pip install backgroundremover
  
  backgroundremover -i "/path/to/image.jpeg" -o "output.png"
  backgroundremover -i "/path/to/video.mp4" -tv -o "output.mov"

  ffmpeg -i /home/n30/Pictures/welita-sandia.MOV -vcodec h264 -acodec mp2 /home/n30/Pictures/welita-sandia.mp4

  - ### Usage as a cli
  Remove the background from a local file image
  backgroundremover -i "/path/to/image.jpeg" -o "output.png"

  - ### Advance usage for image background removal
  Sometimes it is possible to achieve better results by turning on alpha matting. Example:
  backgroundremover -i "/path/to/image.jpeg" -a -ae 15 -o "output.png"

  change the model for diferent background removal methods between u2netp, u2net, or u2net_human_seg
  backgroundremover -i "/path/to/image.jpeg" -m "u2net_human_seg" -o "output.png"

  - ### Video
  remove background from video and make transparent mov
  backgroundremover -i "/path/to/video.mp4" -tv -o "output.mov"

  remove background from local video and overlay it over other video
  backgroundremover -i "/path/to/video.mp4" -tov "/path/to/videtobeoverlayed.mp4" -o "output.mov"

  remove background from local video and overlay it over an image
  backgroundremover -i "/path/to/video.mp4" -toi "/path/to/videtobeoverlayed.mp4" -o "output.mov"

  remove background from video and make transparent gif
  backgroundremover -i "/path/to/video.mp4" -tg -o "output.gif"

  Make matte key file (green screen overlay)
  Make a matte file for premier
  backgroundremover -i "/path/to/video.mp4" -mk -o "output.matte.mp4"

  - ### Advance usage for video
  Change the framerate of the video (default is set to 30)
  backgroundremover -i "/path/to/video.mp4" -fr 30 -tv -o "output.mov"

  Set total number of frames of the video (default is set to -1, ie the remove background from full video)
  backgroundremover -i "/path/to/video.mp4" -fl 150 -tv -o "output.mov"

  Change the gpu batch size of the video (default is set to 1)
  backgroundremover -i "/path/to/video.mp4" -gb 4 -tv -o "output.mov"

  Change the number of workers working on video (default is set to 1)
  backgroundremover -i "/path/to/video.mp4" -wn 4 -tv -o "output.mov"

  change the model for diferent background removal methods between u2netp, u2net, or u2net_human_seg and limit the frames to 150
  backgroundremover -i "/path/to/video.mp4" -m "u2net_human_seg" -fl 150 -tv -o "output.mov"


  
  ### [Preview Images ](https://github.com/gokcehan/lf/wiki/Previews#with-kitty-and-pistol)With Kitty and Pistol

  The following setup will use kitty to display images, and fall back to pistol for everything else. This also works with the wezterm or Konsole terminal.

  As usual, we'll specify a previewer and a cleaner in `~/.config/lf/lfrc`:
  ```
  set previewer ~/.config/lf/lf_kitty_preview
  set cleaner ~/.config/lf/lf_kitty_clean
  ```

  The cleaner script is ~/.config/lf/lf_kitty_clean:
  ```
  #!/usr/bin/env bash

  kitty +kitten icat --clear --stdin no --silent --transfer-mode file < /dev/null > /dev/tty
  ```
  And the previewer is at ~/.config/lf/lf_kitty_preview:
  ```
  #!/usr/bin/env bash
  file=$1
  w=$2
  h=$3
  x=$4
  y=$5

  if [[ "$( file -Lb --mime-type "$file")" =~ ^image ]]; then
      kitty +kitten icat --silent --stdin no --transfer-mode file --place "${w}x${h}@${x}x${y}" "$file" < /dev/null > /dev/tty
      exit 1
  fi

  pistol "$file"
  ```
  Don't forget to mark the files as executable: `chmod +x ~/.config/lf/lf_kitty_{clean,preview}`

  As with the setups above, you can integrate ffmpegthumbnailer into the previewer to it to support videos. The following modification, for example, uses the vidthumb script:
  ```
  #!/usr/bin/env bash
  file=$1
  w=$2
  h=$3
  x=$4
  y=$5

  filetype="$( file -Lb --mime-type "$file")"

  if [[ "$filetype" =~ ^image ]]; then
      kitty +kitten icat --silent --stdin no --transfer-mode file --place "${w}x${h}@${x}x${y}" "$file" < /dev/null > /dev/tty
      exit 1
  fi

  if [[ "$filetype" =~ ^video ]]; then
      # vidthumb is from here:
      # https://raw.githubusercontent.com/duganchen/kitty-pistol-previewer/main/vidthumb
      kitty +kitten icat --silent --stdin no --transfer-mode file --place "${w}x${h}@${x}x${y}" "$(vidthumb "$file")" < /dev/null > /dev/tty
      exit 1
  fi

  pistol "$file"
  ```

- ## [xplr](hhttps://github.com/sayanarijit/xplr):
  xplr is a terminal UI based file explorer that aims to increase our terminal productivity

- ## [spotify-tui](https://github.com/Rigellute/spotify-tui):
  A Spotify client for the terminal written in Rust.

  `yay -S spotify-tui`
  spotify-tui needs to connect to Spotify’s API in order to find music by name, play tracks etc.


    ### How to get setup:

  1.    Go to the [Spotify dashboard](https://developer.spotify.com/dashboard/applications).
  2.    Click Create an app
  3.    You now can see your Client ID and Client Secret
  4.    Now click Edit Settings
  5.    Add `http://localhost:8888/callback` to the Redirect URIs
  6.    Scroll down and click Save
  7.    You are now ready to authenticate with Spotify!
  8.    Go back to the terminal
  9.    Run `spt`
  10.   Enter your Client ID: `94809121fc5647909a211fd9da683186`
  11.   Enter your Client Secret: `d995704ae27a40fbb07950cd17587b24`
  12.   Press enter to confirm the default port (8888) or enter a custom port
      You will be redirected to an official Spotify webpage to ask you for permissions.
      After accepting the permissions, you'll be redirected to localhost. If all goes well, the redirect URL will be parsed automatically and now you're done. If the local webserver fails for some reason you'll be redirected to a blank webpage that might say something like "Connection Refused" since no server is running. Regardless, copy the URL and paste into the prompt in the terminal.
      And now you are ready to use the spotify-tui tada

      You can edit the config at anytime at ${HOME}/.config/spotify-tui/client.yml. ~~(for snap ${HOME}/snap/spt/current/.config/spotify-tui/client.yml)~~

- ## [ranger](https://github.com/ranger/ranger):
  Console file manager with VI key bindings.

SUPPORTS image previews on any terminal w/ sixel support, needs:
foot
ranger-git

To enable it add this to ranger's config:
```
set preview_images true
set preview_images_method sixel
```

- ## [edexUI](https://github.com/GitSquared/edex-ui/blob/master/README.md)

- ## [timer](https://github.com/pando85/timer)

  ```
  curl -s https://api.github.com/repos/pando85/timer/releases/latest \
    | grep browser_download_url \
    | grep $(uname -m) \
    | grep linux \
    | cut -d '"' -f 4 \
    | xargs curl -L \
    | tar xvz
  sudo mv timer /usr/local/bin
  ```

 - ## [lolcat](https://github.com/busyloop/lolcat)
 timer -l 98 | lolcat -a -d 1 -s 999 -t

 - ## [fkill](https://github.com/sindresorhus/fkill)
 Fabulously kill processes. Cross-platform.

# **[SDDM]()**

## [How to start it](https://bbs.archlinux.org/viewtopic.php?id=214709):
You need to start sddm as systemd service, not by running 'sddm' command.
First, you need to enable sddm.service and restart Arch Linux.
```
systemctl enable sddm
systemctl reboot
```
By enabling the 'sddm.service', sddm login greeter will always be shown.


## [Autologin](https://wiki.archlinux.org/title/SDDM)

SDDM supports automatic login through its configuration file, for example:

`nano /etc/sddm.conf.d/autologin.conf`
```
[Autologin]
User=n30
Session=hyprland
```
Available session types can be found in /usr/share/xsessions/ for X and in /usr/share/wayland-sessions/ for Wayland.

# **[Gromit-MPX](https://github.com/bk138/gromit-mpx)**
Gromit-MPX is an on-screen annotation tool.
Its main use is for making presentations of some application. 

# **[𝑋𝑟𝑒𝑚𝑎𝑝](https://github.com/k0kubun/xremap)**
xremap is a key remapper for Linux. Unlike xmodmap, it supports app-specific remapping and Wayland.


Features:

  - Remap any keys, e.g. Ctrl or CapsLock.
  Remap any key combination to another, even to a key sequence.
  - Remap a key sequence as well. You could do something like Emacs's C-x C-c.
  - Remap a key to two different keys depending on whether it's pressed alone or held.
  - Application-specific remapping. Even if it's not supported by your application, xremap can.
    - Automatically remap newly connected devices by starting xremap with --watch.
    Support Emacs-like key remapping, including the mark mode.
    - Trigger commands on key press/release events.
    - Use a non-modifier key as a virtual modifier key.


# **[Ianny](https://github.com/zer0-x/iann)**
Simple, light-weight, easy to use, and effective Linux Wayland desktop utility helps preventing repetitive strain injuries RSI by keeping track of usage patterns and periodically informing user to take breaks.

git clone https://github.com/zer0-x/ianny.git
cd ianny

Checkout to a release tag e.g. v1.0.1
git checkout vx.x.x

meson build
meson compile -C build
You will find the binary in ./build/src/ianny

To install:
meson install -C build



# **[xsettingsd](https://github.com/derat/xsettingsd)**
xsettingsd is a daemon that implements the XSETTINGS specification.

Some GTK applications running via XWayland, and some Java applications, need an XSettings daemon running in order to pick up the themes and font settings.

One implementation [ON SWAY](https://github.com/swaywm/sway/wiki/GTK-3-settings-on-Wayland) is xsettingsd.

---

screenshot: 621*413

gifgen -o /home/n30/Videos/Kooha/lol.gif /home/n30/Videos/Kooha/Kooha-2023-04-03-21-11-31.mp4


---


gamescope /run/media/n30/nvme_chivos/Heroic/DyingLight/DyingLightGame.exe -AUTH_LOGIN=unused -AUTH_PASSWORD=6937¢84ba5be428898 1922124645bc12 -AUTH_TYPE=exchangecode -epicapp=04a54ed532ce4fbfbfsfd5833f60defd -epicenv=Prod -EpicPortal -epicusername=n30mikron -epicuserid=0e442¢779fd94a688e0ba07fef2b459b -epiclocale=en -epicsandboxid=2¢42520d342a46d7a6e0cfa77b4715de

gamescope -w 3440 -h 1440 -f -r 144 -- heroic

"dying light" communication problem with epic online services occurred


---
[Quick setup](https://github.com/neomikr0n/dotfiles) — if you’ve done this kind of thing before
`https://github.com/neomikr0n/dotfiles.git`
or
`git@github.com:neomikr0n/dotfiles.git`

Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
```
echo "# dotfiles" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/neomikr0n/dotfiles.git
git push -u origin main
```
…or push an existing repository from the command line
```
git remote add origin https://github.com/neomikr0n/dotfiles.git
git branch -M main
git push -u origin main
```
…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

---
`mv {startup,videowallpaper-change,statusbar,notifications,gamemode.sh,volume_audio_changer.py,volume,exit,colorpicker,} ~/.dotfiles/bin`


```
╭─n30@n30 in repo: .dotfiles on  master [!?] took 950ms
[🔴] × ag scriptsdir ~/.dotfiles
/home/n30/.dotfiles/config/hypr/scripts/spotify-session.sh
3:scriptsDir="$HOME"/.config/hypr/scripts
5:"$scriptsDir"/videowallpaper-change music &
9:# kitty --title spotify-glava --hold -e $scriptsDir/misc --glava &
14:"$scriptsDir"/videowallpaper-change test &

/home/n30/.dotfiles/config/hypr/scripts/startup
3:scriptsDir=$HOME/.config/hypr/scripts
22:bash "$scriptsDir"/videowallpaper-change code &
23:# ${SCRIPTSDIR}/wall $HOME/.config/hypr/wallpapers/dreams.png &   #static wallpaper

/home/n30/.dotfiles/config/hypr/scripts/startup-2022
3:SCRIPTSDIR=$HOME/.config/hypr/scripts
14:# ${SCRIPTSDIR}/gtkthemes &
17:${SCRIPTSDIR}/notifications &
20:${SCRIPTSDIR}/statusbar &
26:${SCRIPTSDIR}/tools/dynamic &
27:${SCRIPTSDIR}/wall $HOME/.config/hypr/wallpapers/dreams.png & # for the transitions of swww_fork
28:${SCRIPTSDIR}/rgb &

/home/n30/.dotfiles/config/hypr/hyprland.conf
8:$scriptsDir = $HOME/.config/hypr/scripts
13:# source = $scriptsDir/hyprlandconf-enviroment.sh
110:exec-once = $scriptsDir/startup
111:exec-once = $scriptsDir/startup
112:exec-once = $scriptsDir/videowallpaper-change test
115:exec-once = $scriptsDir/statusbar
118:exec-once = $scriptsDir/notifications
145:# exec-once = $scriptsDir/portal
165:$menu = $scriptsDir/menu
166:$powermenu = $scriptsDir/powermenu
167:$volume = $scriptsDir/volume
168:$exit = $scriptsDir/exit
169:$backlight = $scriptsDir/brightness
170:$screenshot = $scriptsDir/screenshot
172:$colorpicker = $scriptsDir/colorpicker
173:$wofi_beats = $scriptsDir/wofi-beats
216:bind = WIN, F1, exec, $scriptsDir/gamemode.sh
292:bind=CTRL,space,exec,pkill wofi || $scriptsDir/volume_audio_changer.py
311:bind= $triMod,G,exec, $scriptsDir/misc --gamescope2560
317:# bind= SUPER, Tab,exec,sh $scriptsDir/sway-select-window # TODO: 3 years old, perhaps not working?😔354:bind= $triMod,S,exec,sh $scriptsDir/spotify-session.sh
435:bind=KEY_CAPSLOCK,n, exec, $scriptsDir/notifications & swaync-client -rs
511:bind= $triMod,1,exec,bash $scriptsDir/videowallpaper-change code
512:bind= $triMod,2,exec,bash $scriptsDir/videowallpaper-change music
513:bind= $triMod,3,exec,bash $scriptsDir/videowallpaper-change test
516:bind = $triMod, H, exec, $scriptsDir/misc --heroic
573:exec-once = bash $scriptsDir/misc --openbrowser
574:exec-once = bash $scriptsDir/misc --heroic

/home/n30/.dotfiles/wiki-wayland-0.9beta.md
3837:ag scriptsdir ~/.dotfiles --ignore-dir={google-chrome-backup,Code - OSS,History}

/home/n30/.dotfiles/ideas-hyprland.txt
126:exec-once = $scriptsDir/portal
133:# ${SCRIPTSDIR}hotkeys &
188:# bindr = $mainMod SHIFT, C, exec, pkill bemenu || $scriptsDir/bemenu_input -l        #?
195:# bind = $mainMod, L, exec, $scriptsDir/changeLayout
206:bind = $triMod, F, exec, hyprctl keyword decoration:screen_shader $scriptsDir/flux.glsl
626:# ${SCRIPTSDIR}/tools/dynamic &   # for the transitions of swww_fork??
627:# ${SCRIPTSDIR}/rgb &   # TODO file missing? I'm not sure what this does lol
633:# ${SCRIPTSDIR}/gtkthemes & # TODO: ? nwg-look seems working fine tho
```
---
exec-once = hyprctl dispatch exec "sleep 15s && telegram-desktop"
exec-once = hyprctl dispatch exec "sleep 15s && qbittorrent"

on QT5 Configuration:

qt5 garuda default font
fira Sans. to restore default fonts, just copy etc/skel/.config/kdeglobals to ~/.config/kdeglobals 
JetBrainsMono Nerd Font

# **[profe juan antonio](https://www.youtube.com/watch?v=_DEAD1NAnWk)**

## [MÉTODO DEFINITIVO PARA BLOQUEAR LAS ACTUALIZACIONES DE iOS 16, 15 y 14](https://drive.google.com/drive/folders/10wk07Gj4dlQGTMQMNZ8ryj8LxFvVP4mR)
⬇️ DESCARGA PERFIL TVOS16:
· Fuente 1: https://bit.ly/tvOS16BlockOTA
· Fuente 2: https://bit.ly/BlockOTAUpdateiOS16

# [AltLinux](https://github.com/i-love-altlinux/AltLinux)

## requeriments:
sudo pacman -S binutils wget curl git python-pip libappindicator-gtk3 usbmuxd libimobiledevice avahi zlib unzip usbutils

Run the following commands:
git clone https://github.com/i-love-altlinux/AltLinux
cd AltLinux
python3 main.py


## [Use Xcode to Enable Developer Mode](https://www.tenorshare.com/ios-16/ios-16-developer-mode-not-showing.html)
Download and set up [Xcode](https://developer.apple.com/xcode/) on your Mac. You can get it from the Apple App Store. However, be noted that installing Xcode is long and tedious. It takes 10+ GBs of data to download, then some additional time to set up.
Take your USB to Lightning cable and connect your iPhone to the Mac you’re using.
If you’re connecting the phone to the computer for the first time, you will need to trust the computer. Tap “Trust This Computer” when prompted on your iPhone’s display.
Now, open the Settings app and go to Privacy & Security > Developer Mode.
Turn on the toggle and confirm that you want to enable the feature.

altserver -u 879c9f69a0e8151beb06152e967511efbb097d90 -a nemonikronz@me.com -p Tower1986 


## curl: (7) Failed to connect to 127.0.0.1 port 6969 after 0 ms: Couldn't connect to server
curl 127.0.0.1:6969


## Failed to handle request:Incorrect Content-Type: must be textual to extract_string, JSON to extract_json.



---
# **[palera1n](https://palera.in/latest-release/)**

Telling device with udid 879c9f69a0e8151beb06152e967511efbb097d90 to enter recovery mode

- **If you are using a USB-C to Lightning cable** to do this process, you may run into issues entering into DFU mode
```
sudo systemctl stop usbmuxd
sudo usbmuxd -f -p
sudo palera1n
```
Once the device boots up (3min for "-fc" + another 20s "-f" + 1min for palera1n icon on homescreen), open the palera1n loader app and tap Install. After a bit of time, you'll be prompted to respring and Sileo should be on your home screen.

	-c, --setup-fakefs			Setup fakefs
	-f, --fakefs 				    Boots fakefs

[EXAMPLES](https://cdn.nickchan.lol/palera1n/c-rewrite/releases/v2.0.0-beta.1/palera1n.1.html)
```
To (re-)jailbreak in rootless mode:
palera1n

To setup fakefs for rootful mode:
palera1n -fc

After the device has rebooted, follow the following example.
To re-jailbreak in rootful mode:
palera1n -f

To remove the jailbreak in rootful mode:
palera1n --force-revert -f

To remove the jailbreak in rootless mode:
palera1n --force-revert

To verbose boot in rootful mode:
palera1n -Vf

To exit recovery mode:
palera1n -n
```
```
Usage: palera1n [-cCdDEfhIlLnOpRsSvV] [-e boot arguments] [-k Pongo image] [-o overlay file] [-r ramdisk file] [-K KPF file] [-i checkra1n file]
Copyright (C) 2023, palera1n team, All Rights Reserved.

iOS/iPadOS 15.0-16.5 arm64 jailbreaking tool

  	--version				Print version
	--force-revert				Remove jailbreak
	-B, --setup-partial-fakefs		Setup partial fakefs
	-c, --setup-fakefs			Setup fakefs
	-C, --clean-fakefs			Clean fakefs
	-d, --demote				Demote
	-D, --dfuhelper				Exit after entering DFU
	-e, --boot-args <boot arguments>	XNU boot arguments
	-E, --enter-recovery			Enter recovery mode
	-f, --fakefs 				Boots fakefs
	-h, --help				Show this help
	-i, --override-checkra1n <file>		Override checkra1n
	-k, --override-pongo <file>		Override Pongo image
	-K, --override-kpf <file>		Override kernel patchfinder
	-l, --rootless				Boots rootless. This is the default
	-L, --jbinit-log-to-file		Make jbinit log to /cores/jbinit.log (can be read from sandbox while jailbroken)
	-n, --exit-recovery			Exit recovery mode
	-I, --device-info			Print info about the connected device
	-o, --override-overlay <file>		Override overlay
	-p, --pongo-shell			Boots to PongoOS shell
	-P, --pongo-full			Boots to a PongoOS shell with default images already uploaded
	-r, --override-ramdisk <file>		Override ramdisk
	-R, --reboot-device			Reboot connected device in normal mode
	-s, --safe-mode				Enter safe mode
	-S, --no-colors				Disable colors on the command line
	-v, --debug-logging			Enable debug logging
		This option can be repeated for extra verbosity.
	-V, --verbose-boot			Verbose boot
```
  
##  To hard reset an iPhone X, follow these steps:
    ```
    Press and quickly release the Volume Up button.
    Press and quickly release the Volume Down button.
    Press and hold the Side button until the Apple logo appears.
    ```

## List of Bypass Jailbreak Detection Tweaks on iPhone
Tweak	Repo
iHide	https://repo.kc57.com
Choicy	https://www.ios-repo-updates.com/repository/opa334-s-repo/
KernBypass	https://github.com/akusio/KernBypass-Public
VNodeBypass	https://cydia.ichitaso.com/
A-Bypass	https://repo.dynastic.co/
https://repo.rpgfarm.com/
Liberty Lite	https://ryleyangus.com/repo/
Shadow	https://ios.jjolano.me/
FlyJB X	https://repo.xsf1re.kr/
UnSub	https://repo.packix.com/
Hestia HideJB	https://repo.packix.com/

✔️ **resources**:
- https://www.ios-repo-updates.com/search/?s=carrierizer&repository=&section=&order=date
- https://www.reddit.com/r/jailbreak/comments/11mt9sv/discussion_1631_tweak_compatibility_list/
- https://www.reddit.com/r/jailbreak


sileo://source/https://sparkdev.me/
sileo://source/https://miro92.com/repo
sileo://source/https://cokepokes.github.io/
sileo://source/https://ios.jjolano.me
sileo://source/https://creaturecoding.com/repo/
sileo://source/https://havoc.app/
sileo://source/
sileo://source/http://apt.thebigboss.org/repofiles/cydia/

## https://onejailbreak.com/blog/best-cydia-repos/#:~:text=Chariz%20Repository%20Chariz%20repo%20is%20a%20great%20Cydia,can%20find%20here%20both%2C%20free%20and%20paid%20packages.
sileo://source/https://repo.dynastic.co/
sileo://source/https://ipogo.app/repo/
sileo://source/https://repo.twickd.com/
sileo://source/https://julioverne.github.io/
sileo://source/https://repo.pixelomer.com/
sileo://source/https://haoict.github.io/cydia/
sileo://source/https://cydia.ichitaso.com/

*cracked-cydia-repositories*
https://onejailbreak.com/blog/best-cydia-repos/#cracked-cydia-repositories
sileo://source/https://rejail.ru/
sileo://source/http://repo.hackyouriphone.org/
sileo://source/https://cydia.kiiimo.org/
sileo://source/https://julio.hackyouriphone.org
sileo://source/https://apt.pandahelp.vip/
sileo://source/https://paxcex.github.io
sileo://source/https://arab-cydia.com/repo/
sileo://source/

*altstore*
step1 : just sign in altstore account in ios device (which you're using for sideloading apps)
step2 : then delete older altstore and altstore sideloaded apps
step3 : then install altstore and open altstore signin with the account that you're using for sideload
step4 : after the installation and sign in of altstore you can install and refresh apps
step 5: if you want to change your apple account you can change now ( older apple account / whichever account)


[SpotilifeC](https://github.com/SpotCompiled/SpotilifeC/releases)
[IPAspotifyhifi-8.8.26-zxcvbn.ipa](https://appdb.to/app/cydia/1900001145)


✔️ **test**:

[ArtFull](https://www.ios-repo-updates.com/repository/havoc/package/com.nahtedetihw.artfull/)
Make the Apple Music app look like iOS 17!
- [iSponsorBlock](https://www.ios-repo-updates.com/repository/icraze-s-repo/package/com.galacticdev.isponsorblock/)



✔️ **iOS 16.1.2 FREE**:
- [Cylinder Reborn](https://www.ios-repo-updates.com/repository/chariz/package/com.ryannair05.cylinder/) 
- [SnowBoard](https://www.ios-repo-updates.com/repository/sparkdev/package/com.spark.snowboard/)
- [uyou](https://github.com/MiRO92/uYou-for-YouTube)
- [Filza File Manager](https://www.ios-repo-updates.com/repository/bigboss/package/com.tigisoftware.filza/)
- [AppStore++](https://www.ios-repo-updates.com/repository/cokepokes/package/com.cokepokes.appstoreplusplus/)
- [FloatingDockXVI](https://www.ios-repo-updates.com/repository/havoc/package/com.nahtedetihw.floatingdockxvi/) 
- [Shuffle](https://www.ios-repo-updates.com/repository/creaturecoding/package/com.creaturecoding.shuffle/) - configuration revamped *-*
- [AppSync Unified](https://www.ios-repo-updates.com/repository/karen-s-repo/package/ai.akemi.appsyncunified/)
- [Velvet 2](https://www.ios-repo-updates.com/repository/chariz/package/com.noisyflake.velvet2/) A fully customizable notification experience
- [AltStore](https://www.ios-repo-updates.com/repository/ichitaso-repository/package/com.ichitaso.altstore/) Jailbroken version of AltStore with on device signing feauture.
- [Felicity Pro](https://www.ios-repo-updates.com/repository/havoc/package/com.xandesign.felicitypro/) THEME a more colorful & detailed look for iOS
- [SleepyTime](https://www.ios-repo-updates.com/repository/sparkdev/package/com.spark.sleepytime/) Displays the time until alarms in the stock iOS 'Clock' app.
- [TapVideoConfig](https://www.ios-repo-updates.com/repository/poomsmart/package/com.ps.tapvideoconfig/) Change video configuration directly in Camera app.
- [VolSkip11](https://www.ios-repo-updates.com/repository/rob311-s-beta-repo/package/com.rob311.volskip11/) Skip tracks by holding the Volume buttons. Play/Pause by holding both Volume Buttons
- 
- [Shadow](https://www.ios-repo-updates.com/repository/jjolano/package/me.jjolano.shadow/) 

- [cask3](https://www.ios-repo-updates.com/repository/chariz/package/com.ryannair05.cask3/) - Animated table scrolling - Orion Runtime (iOS 14 - 16)
- [Locker](https://www.ios-repo-updates.com/repository/p2kdev-s-repo/package/com.p2kdev.locker/) Enable passcode for A11!

- ShakeItOff - shake the phone to activate funtions


**iOS 16.1.2 $$$**

$4 [DYNAMICPENINSULA](https://www.ios-repo-updates.com/repository/bigboss/package/net.limneos.dynamicpeninsula/)
$3 [WhoozItPro](https://www.ios-repo-updates.com/repository/iarrays/package/com.iarrays.whoozit/)
$3 [CheckL0ck](https://www.ios-repo-updates.com/repository/havoc/package/com.foxfort.checkl0ck/)
$1 [SixteenMusic](https://www.ios-repo-updates.com/repository/havoc/package/com.nahtedetihw.sixteenmusic/)
$4 [Snapper 3](https://www.ios-repo-updates.com/repository/havoc/package/com.jontelang.snapper3/)
$2 [ChromaFlow](https://www.ios-repo-updates.com/repository/chariz/package/com.ryannair05.chromaflow/)


**just ok :|**

[dodo](https://www.ios-repo-updates.com/repository/ginsu-tweaks/package/com.ginsu.dodo/) - perfect Lock Screen tweak - 
[everest](https://www.ios-repo-updates.com/repository/havoc/package/com.christopher.everest/) - App icon animations -
[ezswipe](https://www.ios-repo-updates.com/repository/p2kdev-s-repo/package/com.imkpatil.ezswipe/) - Give your hand a rest by using gestures instead! -
[laetus](https://www.ios-repo-updates.com/repository/sparkdev/package/com.spark.laetus/) - Unparalleled Keyboard Customisation -
[fakepass](https://www.ios-repo-updates.com/repository/nyuszika7h-s-repo/package/net.cadoth.fakepass/) - Fake passcode for checkm8 jailbreaks on iOS 14+ on A11 -
aquaboard xs - Amazing Water Effects On SpringBoard - 
dragspring - Drag down from the top of settings to respring -
Liberty Pass - bypass detection
settingscollapse
Carrierizer2 - Custom Text/Options for your Carrier! -



**nope**
[EQE](https://moreinfo.thebigboss.org/moreinfo/depiction.php?file=eqe2Dp) System-wide parametric equalizer (and more) Compatible with iOS 7-14 :'(
YellowPages - not working :(
betterccxi
A-Bypass
island - not found :(
shuffle - organize settings
Ampere: Velvet 2, PreferenceLoader, Substitute, Substrate Safe Mode
Phoenix -  contacts info

## [YTLitePlus](https://github.com/Balackburn/YTLitePlus#building-optional)
- YTLite: +50 customization options for YouTube, YTLite enhances your viewing experience by removing ads, enabling background playback, and providing control over navigation, overlay, player, tab bar, and Shorts settings.

- iSponsorBlock: Skips annoying sponsor ads inside videos. iSponsorBlock is based on SponsorBlock engine. Basically, this is the iOS version of the SponsorBlock extension.
- YouPiP: enable YouTube's native PiP. More options are in YouTube Settings => General.
- YTUHD: unlock VP9 codec and in effect, enables video quality of 2K and 4K. You can configure YTUHD in YouTube's Settings - Video quality preferences.
- YouTube Dislike Return: brings back Dislike counts under YouTube videos using ReturnYoutubeDislike's API.

and many more...!
- YTABGoodies: allow you to disable some YouTube A/B testing features. It is a combination of several tweaks, such as:
- YouAreThere: disable "Video paused. Continue watching?" popup in the YouTube app when you play a long video.
- YouRememberCaption: make YouTube remember your video caption setting (if not already).
- YTNoCheckLocalNetwork: block the Local Network permission popup.
- YTSpeed: a toggleable tweak to add 2.25x, 2.5x, 2.75x, 3x, 3.25x, 3.5x, 3.75x, 4x & 5x playback speed options in the video player.
- YTMiniplayerEnabler: enable Miniplayer for all YouTube videos.
- DontEatMyContent: prevent the notch/Dynamic Island from munching on 2:1 video content in YouTube.
- YTABConfig: allow user to control over YouTube A/B testing flags.
- YouMute: Mute/unmute videos in the YouTube Video Player directly.
- YTNoCommunityPosts: this can disable all the Community Posts on the YouTube app.
- LowContrastMode: makes the YouTube Interface Low Contrast as possible to make it easier on the eyes.

---
# ENVIROMENT VARIABLES but for script:
```
# Toolkit Backend Variables
env GDK_BACKEND,"wayland;x11"
env SDL_VIDEODRIVER,wayland
env CLUTTER_BACKEND,wayland

# XDG Specifications
# XDG specific environment variables are often detected through portals and applications that may set those for you, however it is not a bad idea to set them explicitly.
env XDG_CURRENT_DESKTOP,Hyprland
env XDG_SESSION_TYPE,wayland
env XDG_SESSION_DESKTOP,Hyprland

# QT Variables
env QT_AUTO_SCREEN_SCALE_FACTOR,1
env QT_QPA_PLATFORM,"wayland;xcb"
env QT_WAYLAND_DISABLE_WINDOWDECORATION,1
env QT_QPA_PLATFORMTHEME,qt5ct

# Theming Related Variables
env XCURSOR_SIZE,32

# for flameshot:
# export SDL_VIDEODRIVER=wayland
env _JAVA_AWT_WM_NONREPARENTING,1

# https://github.com/nosvagor/dotfiles/blob/main/bin/hyprwrap   #adendum, clean dots tho
env SDL_VIDEODRIVER,wayland
env GDK_BACKEND,"wayland,x11"
env CLUTTER_BACKEND,wayland
```
 

---
[How to one-line with & ?](https://www.reddit.com/r/bash/comments/12xuacc/how_to_oneline_with/)
FYI - there are a few ways to get bash -c to accept multi-line commands, which sort of bypasses this entirely.

Option 1 - dont close quotes between lines

bash -c "sleep 1000 &
echo 'Say this now'"

Option 2 - use cat<<EOF in a variable substitution. This is sort of nice if you have quotes in the command you are running with bash -c, since you dont need to modify them so that they work nested inside a quoted string.

bash -c "$(cat<<EOF
sleep 1000 &
echo 'Say this now'
EOF
)"

---

sym: Return       (65293), utf8: ''
[14:     wl_keyboard] key: serial: 45429; time: 15318239; key: 49; state: 1 (pressed)
sym: bar          (124), utf8: '|'
[14:     wl_keyboard] key: serial: 45430; time: 15318321; key: 49; state: 0 (released)

---

# GARUDA-UPDATE error: 
failed to commit transaction (conflicting files installed with pip a long time ago)

## ERROR:
```
error: failed to commit transaction (conflicting files)
python-tqdm: /usr/bin/tqdm exists in filesystem
python-numpy: /usr/bin/f2py exists in filesystem
python-numpy: /usr/bin/f2py3 exists in filesystem
python-numpy: /usr/share/licenses/python-numpy/LICENSE.txt exists in filesystem
Errors occurred, no packages were upgraded.
```
## FIX:
1. sudo pip uninstall tqdm :
```
Found existing installation: tqdm 4.65.0
Uninstalling tqdm-4.65.0:
  Would remove:
    /usr/bin/tqdm
    /usr/lib/python3.10/site-packages/tqdm-4.65.0.dist-info/*
    /usr/lib/python3.10/site-packages/tqdm/*
```
2. sudo pip uninstall numpy :
```
Found existing installation: numpy 1.23.5
Uninstalling numpy-1.23.5:
  Would remove:
    /home/n30/.local/bin/f2py
    /home/n30/.local/bin/f2py3
    /home/n30/.local/bin/f2py3.10
    /home/n30/.local/lib/python3.10/site-packages/numpy-1.23.5.dist-info/*
    /home/n30/.local/lib/python3.10/site-packages/numpy.libs/libgfortran-040039e1.so.5.0.0
    /home/n30/.local/lib/python3.10/site-packages/numpy.libs/libopenblas64_p-r0-742d56dc.3.20.so
    /home/n30/.local/lib/python3.10/site-packages/numpy.libs/libquadmath-96973f99.so.0.0.0
    /home/n30/.local/lib/python3.10/site-packages/numpy/*
```
3. Also:
```
sudo rm /usr/share/licenses/python-numpy/LICENSE.txt
```
## THEN:
4. garuda-update :
```
warning: dwarfs: local (0.6.2-6) is newer than chaotic-aur (0.6.2-1.2)
warning: xwinwrap-git: local (r20.539fc47-1) is newer than archlinuxcn (r5.ec32e9b-2)
resolving dependencies...
looking for conflicting packages...
warning: dependency cycle detected:
warning: libcamera-ipa will be installed before its libcamera dependency
```
5. small error tho, doesn't look important:
```
Failed to write file "/sys/module/pcie_aspm/parameters/policy": Operation not permitted
error: command failed to execute correctly
```

---
FIREFOX THEME error:
extensions.activeThemeID
{e7e228a2-e4dc-4652-b9a1-e985442d584e}

browser.theme.toolbar-theme
0

layout.css.has-selector.enabled false > true

---
 ╭─n30@n30 in ~ as 🧙 took 1s
✦ [🔴] × cleanup
checking dependencies...
:: kitty optionally requires python-pygments: syntax highlighting in kitty +kitten diff
:: lv2 optionally requires python-pygments: for lv2specgen.py

Packages (63) docbook-xml-4.5-9  docbook-xsl-1.79.2-7  faudio-23.05-1  glib2-docs-2.76.2-1  goocanvas-3.0.0-4  gtk-doc-1.33.2-1  lib32-libnsl-2.0.0-2  libotf-0.9.16-4  librest-0.9.1-2  libuninameslist-20221022-1  libwrap-7.6.31-4  m17n-db-1.8.2-1  m17n-lib-1.8.2-1  mingw-w64-binutils-2.38-3
mingw-w64-crt-10.0.0-1  mingw-w64-headers-10.0.0-1  mingw-w64-winpthreads-10.0.0-1  potrace-1.16-2  python-anytree-2.8.0-6  python-dateutil-2.8.2-5  python-docutils-1:0.20-1  python-iniconfig-2.0.0-4  python-pluggy-1.0.0-4  python-pygments-2.15.1-1  7-zip-22.01-2  chrpath-0.16-4
colord-1.4.6-1  cython-0.29.34-3  emacs-28.2-2  fontforge-20230101-3  geocode-glib-3.26.4-3  glib-perl-1.329.3-3  gnome-online-accounts-3.48.0-2  gupnp-dlna-0.12.0-2  intltool-0.51.0-6  lib32-faudio-23.04-1  lib32-libwrap-7.6.31-4  libappindicator-gtk2-12.10.0.r298-1
libgda-5.2.10-5  libgee06-0.6.8-1  libvisual-0.4.2-1  lua-lpeg-1.0.2-4  mcfly-0.8.0-1  mingw-w64-gcc-12.2.0-1  perl-extutils-depends-0.8001-3  perl-extutils-pkgconfig-1.16-10  perl-parse-yapp-1.21-5  pnpm-8.5.0-1  python-exceptiongroup-1.1.1-2  python-jarowinkler-1.2.3-1
python-kivy-2.1.0-2  python-pandas-1.5.3-3  python-pebble-5.0.3-1  python-pyparsing-3.0.9-3  python-pytest-7.3.1-4  run-parts-5.5-1  scdoc-1.11.2-5  scons-4.4.0-3  sharutils-4.15.2-4  tre-0.8.0-6  vala-0.56.7-1  webkit2gtk-5.0-2.38.6-1  webtorrent-cli-4.1.0-1

Total Removed Size:  1812.76 MiB

:: Do you want to remove these packages? [Y/n] 

---

find-the-command: "/usr/bin/mcfly" may be found in package "community/mcfly"
resolving dependencies...
looking for conflicting packages...

Packages (1) mcfly-0.8.0-1

---

stuck on emergency mode:

sudo blkid

comment some lines on fstab, then restart
```
sudo nano /etc/fstab
reboot
```

-----------------
    sudo mvc -rp /usr/lib/firmware/yamaha/yss225_registers.bin.xz /run/media/n30/nvme_chivos/backup2023-07-01-garudaupdate/
    cp: cannot create regular file No such file or directory


[pacman "exists on filesystem" error for linux-firmware](https://unix.stackexchange.com/questions/240252/pacman-exists-on-filesystem-error/505061);
    ```
    garuda-update | sudo tee ~/Documents/garudaupdate-errors.txt
    
    cat ~/Documents/garudaupdate-errors.txt | awk '{print $2}' >> ~/Documents/garudaupdate-errors-lite.txt
    
    mkdir /run/media/n30/nvme_chivos/backup2023-07-01-garudaupdate

    while read -r file; do sudo mv -- -R "$file" /run/media/n30/nvme_chivos/backup2023-07-01-garudaupdate/$file; done < ~/Documents/garudaupdate-errors-lite.txt

    while read -L file; sudo rm -- $file; end < ~/Documents/garudaupdate-errors-lite.txt
    ```

    Wich is:
    - Get a list of the offending files (copy and paste pacman's output into a file).
    - Use awk to strip out everything but the file paths into a new list.
    - Use while to move the offending files out of the way, based on the list.
    - Run sudo pacman -Syu again.

while read -L file; sudo cp -rp -- $file /run/media/n30/nvme_chivos/backup2023-07-01-garudaupdate$file; end < ~/Documents/garudaupdate-errors-lite.txt

    
pacman -Qkk linux-firmware
sudo pacman -Qnq | sudo pacman -S -

----------------

λ git add . && git commit -m 'mcomplete: -n '__fish_git_using_command {/home/n30/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/usr/lib/rustup/bin//:/': Unexpected end of string, incomplete parameter expansion
__fish_git_using_command {/home/n30/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/usr/lib/rustup/bin//:/
                         ^
complete: -n '__fish_git_using_command } basename': Unexpected '}' for unopened brace expansion
__fish_git_using_command } basename
                         ^
i'                                 nor changes'


---
HSBC
https://www.hsbc.com.mx/tarjetas-de-credito/condiciones-generales/

Hay que tomar en cuenta que HSBC es de los peores bancos en cuanto a atención a clientes, la app seguido falla, al igual que su sistema en general, para todo te mandan a la sucursal, en fin sino tuvieran buenas promos ni siquiera lo hubiera tomado en cuenta. Un consejo para los que la piensen solicitar, es que sí les ofrecen la air, tomenla e inmediatamente después de activarla, llamen para realizar el cambio de producto, casi siempre te ofrecerán la 2now y la zero. En este banco mientras más línea mejor porque por casi todas las compras en línea te realizan cargos doble y sí quieres ocupar el resto de tu línea tienes que esperar minimo 3 días a que se libere.

Hola soy Luis y puedo dar mi experiencia con la targeta hey banco y si puedo aprovechar el 2%  usando la billetera de Google y pagando con el móvil casi no uso la tarjeta ficica todo por contacto

Para llegar a los 2,500, domicilie mi PPR (Plan Para el Retiro), entonces sin pedos cumplo la cuota mensual

---
# linux-wallpaperengine-wayland-git

## install
8 aur/linux-wallpaperengine-wayland-git r411.660f798-1 (+0 0.00) 

[error: externally-managed-environment](https://github.com/python/cpython/issues/102134)
```
Traceback (most recent call last):
  File "/home/n30/.local/bin/cmake", line 5, in <module>
    from cmake import cmake
ModuleNotFoundError: No module named 'cmake'
==> ERROR: A failure occurred in build().
    Aborting...
 -> error making: linux-wallpaperengine-wayland-git-exit status 4
checking dependencies...

Packages (1) glm-0.9.9.8-1
```
yayu cmake
yayui pipx
pipx install cmake
yayi linux-wallpaperengine-wayland-git

Usage: linux-wallpaperengine [options] background_path/background_id

where background_path/background_id can be:
	the ID of the background (for autodetection on your steam installation)
	a full path to the background's folder


## options:
```
	--silent					Mutes all the sound the wallpaper might produce
	--volume <amount>			Sets the volume for all the sounds in the background
	--noautomute				Disables the automute when an app is playing sound
	--screen-root <screen name>	Display as screen's background
	--window <geometry>	Runs in window mode, geometry has to be XxYxWxH and sets the position and size of the window
	--fps <maximum-fps>			Limits the FPS to the given number, useful to keep battery consumption low
	--assets-dir <path>			Folder where the assets are stored
	--screenshot				Takes a screenshot of the background
	--list-properties			List all the available properties and their possible values
	--set-property <name=value>	Overrides the default value of the given property
	--no-fullscreen-pause	Prevents the background pausing when an app is fullscreen
Cannot find directory for steam app wallpaper_engine: assets
fish: Job 1, 'linux-wallpaperengine' terminated by signal SIGSEGV (Address boundary error)
```
## commands
linux-wallpaperengine --silent /run/media/n30/nvme_chivos/SteamLibrary/steamapps/workshop/content/431960/1888636115/scene.pkg

linux-wallpaperengine --assets-dir /run/media/n30/nvme_chivos/SteamLibrary/steamapps/workshop/content/431960 1888636115

## error 
```
[⚡] × linux-wallpaperengine --assets-dir /run/media/n30/nvme_chivos/SteamLibrary/steamapps/workshop 
1888636115
Cannot find workshop directory for steam app 431960 and content 1888636115
terminate called after throwing an instance of 'std::runtime_error'
  what():  Cannot find workshop directory for steam app 431960 and content 1888636115
fish: Job 1, 'linux-wallpaperengine --assets-…' terminated by signal SIGABRT (Abort)
```

# dolphin-git disaster:

## finding when it was modified:
grep -i dolphin /var/log/pacman.log

## printing only the 4th word of the first 91 lines:
grep -i 2023-07-13T01:15 /var/log/pacman.log | awk 'NR <= 91 {print $4}'

## bard eliminated the line jump:
yay -s dolphin kuserfeedback kactivities kparts kcmutils kdeclarative kio-extras kdsoap-ws-discovery-client kdsoap syntax-highlighting phonon-qt5 kdnssd knewstuff syndication kpackage attica kio kded ktextwidgets sonnet kcompletion kwallet kservice knotifications kbookmarks kxmlgui kitemviews kiconthemes karchive kconfigwidgets ki18n kguiaddons kcodecs kauth polkit-qt5 kglobalaccel kcrash kwindowsystem kconfig kdbusaddons kjobwidgets kwidgetsaddons kcoreaddons solid

---
# Promoción Tarjetas de Regalo Amazon Exclusiva para miembros Prime
1. ¿Cuál es la mecánica de la promoción?

Exclusiva para miembros Prime. Al realizar un pedido de $1,000 pesos o más en una Tarjeta de Regalo digital vendida por Amazon México, recibirás $200 pesos de saldo promocional. El monto debe ser en una sola tarjeta. Haz la compra de la Tarjeta de Regalo y 2 días después te llegará un correo confirmando la promoción. El saldo no será visible, pero se acreditará en tu siguiente compra de productos vendidos y enviados por Amazon México.

2. ¿Cuál es la vigencia de la promoción?

Para poder obtener el beneficio de $200 pesos en saldo promocional, deberás comprar una Tarjeta de Regalo vendida y enviada por Amazon México de al menos $1,000. La compra de la Tarjeta de Regalo deberá ser realizado entre las 00:00 horas (tiempo del Centro de México) del 11 de julio de 2023 y las 23:59 horas (tiempo del Centro de México) del 16 de julio de 2023.

3. ¿Cuál es la fecha límite para canjear el saldo promocional?

El saldo promocional se podrá utilizar hasta las 23:59 horas (tiempo del Centro de México) del 31 de agosto de 2023.

4. ¿Cómo puedo participar en la promoción?

Para poder acceder a la promoción, debes ser miembro Prime. Luego, debes ordenar al menos $1,000 pesos en una Tarjeta de Regalo Digital vendida por Amazon México. 2 días posteriores a la notificación del envío de la Tarjeta de Regalo recibirás un correo electrónico confirmando que tu saldo promocional ya se encuentra disponible en tu cuenta. El saldo promocional no será visible en la cuenta, pero será aplicado en la próxima compra.

5. ¿Existen restricciones en la promoción?

Sí. Esta promoción es exclusiva para miembros Prime. Además, no es posible combinar esta promoción con otros códigos promocionales, Ofertas del Día, Ofertas Relámpago, promociones bancarias o meses sin intereses. La compra de la Tarjeta de Regalo debe efectuarse solo con método de pago de tarjeta de débito y crédito. Válido una vez por cliente y por cuenta.

6. ¿Cómo canjeo mi saldo promocional?

El saldo promocional no será visible, pero se aplicará en automático en tu siguiente compra de productos vendidos y enviados por Amazon México.

7. ¿Cuáles son las formas de pago que participan?

Para comprar la tarjeta de regalo de $1,000 o más, participan casi todas las formas de pago aceptadas en Amazon.com.mx, incluyendo tarjetas de crédito y débito, tarjeta de débito Amazon Recargable. No participan las Tarjetas de Regalo, Paga en Efectivo en Oxxo y Prepago con Amazon Cash.

8. ¿Puedo combinar esta promoción con otras promociones?

No. Esta promoción no puede combinarse con otras promociones basadas en códigos promocionales, promociones bancarias, ni Ofertas del Día, Ofertas relámpago y Ofertas Destacadas de productos vendidos y enviados por Amazon México.

9. ¿Puedo utilizar Meses Sin Intereses con la promoción?

No, las Tarjetas de Regalo no son elegibles para pago a Meses sin Intereses.

10. ¿Si tengo preguntas adicionales a quien puedo contactar?

Si tienes dudas puedes entrar en contacto con Amazon.com.mx en https://www.amazon.com.mx/gp/help/customer/display.html?nodeId=508510

Términos y Condiciones
Promoción exclusiva para miembros Prime. Para hacer válida la promoción deberás ordenar al menos $1,000 pesos en Tarjetas de Regalo Digitales Amazon vendidas por Amazon México. Al realizar un pedido de $1,000 pesos o más en Tarjetas de Regalo Digitales Amazon México, recibirás $200 pesos de saldo promocional que serán acreditados a tu cuenta 2 días posteriores a la notificación del envío de tu pedido. Una vez cumplido el período de espera, recibirás vía e-mail una notificación sobre el cargo del saldo promocional a tu cuenta. El saldo promocional no será visible en tu cuenta, pero estará disponible para aplicarse en tus próximos pedidos de productos vendidos y enviados por Amazon México. El saldo promocional de $200 podrás redimirlo a partir de la fecha de su acreditación hasta las 23:59 horas (tiempo del Centro de México) del 31 de agosto de 2023. Esta es una promoción válida por tiempo limitado. Amazon se reserva el derecho de modificar o cancelar la promoción en cualquier momento, lo cual se comunicará en https://www.amazon.com.mx/b?ie=UTF8&node=117030933011. Promoción exclusiva para miembros Prime. Para participar en la promoción, el pedido de la Tarjeta de Regalo deberá ser realizado entre las 00:00 horas (tiempo del Centro de México) del 11 de julio de 2023 y las 23:59 horas (tiempo del Centro de México) del 16 de julio de 2023 o hasta agotar existencias. La promoción es aplicable una sola vez por cuenta. Si realizas varios pedidos de $1,000 pesos o más en Tarjetas de Regalo Digitales vendidas por Amazon México, sólo recibirás $200 pesos de descuento. La promoción aplica únicamente en Amazon.com.mx, al realizar un pedido de $1,000 pesos o más en una Tarjeta de Regalo Digital Amazon vendidas por Amazon México incluidos en esta sección https://www.amazon.com.mx/b?ie=UTF8&node=117030933011. No aplica para Tarjetas de regalo de otras marcas, productos en pre-venta, productos no disponibles, productos vendidos por Amazon EE.UU., terceros vendedores o en cualquier otra página web accesible a través de www.amazon.com.mx. Busca la etiqueta “Vendido y enviado por Amazon México” en la página de detalles del producto. La promoción aplica únicamente a productos comprados en un solo pedido. Esta promoción no puede combinarse con otras promociones basadas en códigos promocionales, promociones bancarias, ni como Ofertas del Día, Ofertas relámpago y Ofertas Destacadas de productos vendidos y enviados por Amazon México. Si alguno de los productos se devuelve, tu reembolso será igual al monto pagado por el producto, sujeto a las políticas de devoluciones aplicables. En caso de devolución total, no serás elegible para participar en la promoción. En caso de devolución parcial, únicamente se bonificará el porcentaje correspondiente al total de los productos no devueltos. Participan casi todas las formas de pago aceptadas en Amazon.com.mx, incluyendo tarjetas de crédito y débito, tarjeta de débito Amazon Recargable. No participan las Tarjetas de Regalo, Prepago con Amazon Cash o Paga en Efectivo en Oxxo. La promoción no es transferible y no podrá ser utilizada para reventa, canjeada por efectivo o tarjetas de regalo. Esta promoción no tendrá efectos en caso de existir restricciones legales y/o administrativas que le resulten aplicables. Si infringes los términos y condiciones de la promoción, no serás elegible para la promoción.

---
KVM

[EXT4 in Windows by Chris Titus Tech](https://www.youtube.com/watch?v=aX1vH1j7m7U)
https://christitus.com/ext4-in-windows/

## INSTALL on LINUX shennaningas
[QEMU/KVM for absolute beginners](https://www.youtube.com/watch?v=BgZHbCDFODk)

[🔴] × yayi qemu virt-manager virt-viewer dnsmasq vde2 bridge-utils openbsd-netcat
:: openbsd-netcat and gnu-netcat are in conflict. Remove gnu-netcat? [y/N] n

[🔴] × yayi ebtables iptables
:: iptables and iptables-nft are in conflict. Remove iptables-nft? [y/N] 

sudo systemctl start libvirtd.service
systemctl status libvirtd.service

yayi virt-manager virt-viewer qemu bridge-utils libguestfs
sudo nano /etc/libvirt/libvirtd.conf
sudo gpasswd -a $USER libvirtd

sudo systemctl start libvirtd
sudo systemctl enable libvirtd

[Setup Qemu in Debian Linux](https://christitus.com/vm-setup-in-linux/)
Start Default Network for Networking
VIRSH is a command to directly interact with our VMs from terminal. We use it to list networks, vm-status and various other tools when we need to make tweaks. Here is how we start the default and make it auto-start after reboot.

sudo virsh net-start default

Network default started
sudo virsh net-autostart default

Network default marked as autostarted

Check status with:
sudo virsh net-list --all

 Name      State      Autostart   Persistent
----------------------------------------------
 default   active       yes          yes

Add User to libvirt to Allow Access to VMs:
sudo usermod -aG libvirt $USER & \
sudo usermod -aG libvirt-qemu $USER & \
sudo usermod -aG kvm $USER & \
sudo usermod -aG input $USER & \
sudo usermod -aG disk $USER


## [Windows Inside of Linux](https://www.youtube.com/watch?v=6KqqNsnkDlQ)
https://christitus.com/windows-inside-linux/
- install the VirtIO tools, which can be difficult to track down. My favorite way is to run the exe file from https://github.com/virtio-win/virtio-win-pkg-scripts but many guides use the iso file also provided at this link.

Another good resource for obtaining VirtIO drivers is from the proxmox wiki https://pve.proxmox.com/wiki/Windows_VirtIO_Drivers

- [Enable QEMU Guest Agent](http://wiki.stoney-cloud.org/wiki/Qemu_Guest_Agent_Integration)
Now you need to modify the VM to make use of the guest agent drivers. We need to add the qemu agent channel. Add Hardware -> Channel OR *EDIT CURRENTLY "Channel"* and copy these settings on XML (must be enabled on preferences):
<channel type="unix">
  <source mode="bind"/>
  <target type="virtio" name="org.qemu.guest_agent.0"/>
</channel>

original was:
<channel type="spicevmc">
  <target type="virtio" name="com.redhat.spice.0"/>
  <address type="virtio-serial" controller="0" bus="0" port="1"/>
</channel>

On "details" -> Channel (qemu-ga) should be "state:connected"

- Passing Devices Through


- automatic logon:
1. Open the Registry Editor using [Windows] + [R] and “regedit”.
2. Enter HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsNT\CurrentVersion\PasswordLess\Device.
3. Double click on “DevicePasswordLessBuildVersion” and set the value to “0”.
4. Open User Accounts using [Windows] + [R] and “netplwiz”.
5. Uncheck the box beside “Users must enter a user name and password to use this computer”.

[Setting Up the Ultimate Windows 10](https://christitus.com/setting-up-the-ultimate-windows-11/)

irm christitus.com/win | iex

user agent switcher to fake edge

iniciar igpu
deshabilitar iommu

yayi 