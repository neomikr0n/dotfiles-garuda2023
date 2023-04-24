#!/usr/bin/env bash
# https://gitlab.com/wef/dotfiles/-/blob/master/bin/mywob
# shellcheck disable=SC2034
TIME_STAMP="20220627.145053"

# Copyright (C) 2020-2021 Bob Hepple < bob dot hepple at gmail dot com>

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or (at
# your option) any later version.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.

PROG=$( basename "$0" )
wob_pipe=~/.cache/$( basename "$SWAYSOCK" ).wob

case "$1" in
    -h|--help)
        echo "Usage: $PROG [percent]"
        echo
        echo "pops up wob; sets up $wob_pipe if necessary "
        exit 0
        ;;
esac

[[ "$SWAYSOCK" ]] || exit 0

# returns 0 (success) if $1 is running and is attached to this sway session; else 1
is_running_on_this_screen() {
    pkill -0 "$1" || return 1
    for pid in $( pgrep "$1" ); do
        WOB_SWAYSOCK="$( tr '\0' '\n' < "/proc/$pid/environ" | awk -F'=' '/^SWAYSOCK/ {print $2}' )"
        if [[ "$WOB_SWAYSOCK" == "$SWAYSOCK" ]]; then
            return 0
        fi
    done
    return 1
}

new_value=$1 # null or a percent; no checking!!

[[ -p $wob_pipe ]] || mkfifo "$wob_pipe"

# wob does not appear in $(swaymsg -t get_msg), so:
is_running_on_this_screen wob || {
    tail -f "$wob_pipe" | wob &
}

# sometimes this hangs - need to use a timeout and restart wob if necessary:
[[ "$new_value" ]] && echo "$new_value" > "$wob_pipe"

# Local Variables:
# mode: shell-script
# time-stamp-pattern: "4/TIME_STAMP=\"%:y%02m%02d.%02H%02M%02S\""
# eval: (add-hook 'before-save-hook 'time-stamp)
# End:

