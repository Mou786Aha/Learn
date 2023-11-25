#!/bin/bash
flatpak run org.flatpak.Builder --force-clean --user --install build-dir org.my.learn.yml
flatpak run org.my.learn