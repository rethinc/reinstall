#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

source "${dir}/includes/check-tool.bash.inc"
source "${dir}/includes/silent-on-success.bash.inc"

main() {
	check_tool "gcloud"

	local project="${1:-}"
	if [ -z "${project}" ]; then
		usage "${0}"
	fi

	local key="${2:-}"
	if [ ! -e "${key}" ]; then
		(>&2 echo "ERROR: key file ${key} not found")
		usage "${0}"
	fi

	check_path_for_docker "${key}"

	silent_on_success "gcloud auth activate-service-account --key-file=${key}"
	silent_on_success "gcloud config set project ${project}"
}

is_absoulte_path() {
	[ "$1" != "${1#/}" ] # does not start with '/'
}

is_using_parent() {
	[ "$1" != "${1#..}" ] # does not start with '..'
}

check_path_for_docker() {
	local file="${1}"
	if  is_absoulte_path "${file}"; then
		(>&2 echo "ERROR: Paths are not allowed to be absolute since we are running this inside a docker countainer and we only mount the current folder.")
		exit 1
	fi

	if is_using_parent "${file}"; then
		(>&2 echo "ERROR: Paths may not reference something outside the current folder since we are running this inside a docker countainer and we only mount the current folder.")
		exit 1
	fi
}

usage() {
	local script="${0}"
	echo "USAGE: ${script} <gcp project name> <serviceaccount JSON key>"
	exit 1
}

main "$@"