#!/usr/bin/env bash

check_tool() {
	local name="${1}"
	local additional_message="${2:-}"
	local binary=$(which ${name} || true)

	if [ -z "${binary}" ]; then
		(>&2 echo "ERROR: ${name} not found.")
		(>&2 echo "This script depends on ${name}. Please install it first before executing this scirpt.")
		if [ ! -z "${additional_message}" ]; then
			(>&2 echo "${additional_message}")
		fi
		exit 127
	fi
}