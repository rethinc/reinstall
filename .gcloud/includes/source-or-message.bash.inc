source_or_message() {
	local file="${1:-}"
	local message=${2:-"File ${file} does not exist"}

	if [ ! -e "${file}" ]; then
		(>&2 echo "${message}")
		exit 1
	fi

	source "${file}"
	
}