#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
root="${dir}/.."

main() {
	local region="us-central1"
	local image="${1:-}"
	if [ -z "${image}" ]; then
		echo "USAGE: ${0} <image> <version>"
		exit 1
	fi

	local version="${2:-}"
	if [ -z "${version}" ]; then
		echo "USAGE: ${0} <image> <version>"
		exit 1
	fi
	local full_image_name="gcr.io/dev-tools-249011/${image}:${version}"

	pushd "${root}"
		./gcloud-local run deploy reinstall --region=${region} --image=${full_image_name} --allow-unauthenticated
	popd
}

main "$@"