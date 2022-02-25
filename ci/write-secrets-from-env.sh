#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
root="${dir}/.."

main() {
	pushd "${root}"
		source ".gcloud/gcp-project-config.bash.inc"
		local gcloud_account_file=".gcloud/${GCLOUD_KEY}"
		if [ ! -z "${GCLOUD_KEY_CONTENT:-}" ] && [ ! -e ${gcloud_account_file} ]; then
			mkdir -p $(dirname "${gcloud_account_file}")
			echo "${GCLOUD_KEY_CONTENT}" > "${gcloud_account_file}"
		fi

	popd
}

main "$@"