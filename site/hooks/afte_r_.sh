#!/usr/bin/env sh
. ./hooks/.env
read PRJ_DIR
surge --project $PRJ_DIR
