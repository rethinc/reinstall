#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

dir=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

main() {
	local image="${1}"
	local version="${2}"
	local gcr_image="gcr.io/dev-tools-249011/${image}"
	docker login -u _json_key -p "${CONTAINER_REGISTRY_JSON}" https://gcr.io

	docker tag ${image} ${gcr_image}:${version}
	docker push ${gcr_image}:${version}

	docker tag ${image} ${gcr_image}:latest
	docker push ${gcr_image}:latest
}

main "$@"
