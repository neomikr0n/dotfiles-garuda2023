#!/bin/bash

# https://github.com/swaywm/sway/issues/2639
#         We want to use socket name set by user, not existing socket from another sway instance.
        if (getenv("SWAYSOCK") != NULL && access(getenv("SWAYSOCK"), F_OK) == -1) {
                strncpy(ipc_sockaddr->sun_path, getenv("SWAYSOCK"), sizeof(ipc_sockaddr->sun_path) - 1);
                ipc_sockaddr->sun_path[sizeof(ipc_sockaddr->sun_path) - 1] = 0;
        }
