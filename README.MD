# not VidemanMC Modpack since 03.11.25
In this repository the modpack from our modded server is stored. We keep it in specific structure:
1. `client/` — client part
1. `server/` — server part.
1. `generic/` — here are stored content for both, client and server parts.

## Why?
1. For the launcher to be able to download modpack without server part.
1. To speed up the upgrade process — it is not need to separate mods into client and server parts every time the modpack is being updated.

### What is `hash.txt` file?
This file is used by the [launcher](https://github.com/VidemanMC/launcher) to check if local files are outdated.
