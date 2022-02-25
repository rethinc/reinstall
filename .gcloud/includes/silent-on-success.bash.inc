silent_on_success() {
	local command="$1"
	local exit_code="1"
	{
		 eval "${command} 2> /dev/null"
		 exit_code="$?"
	} || true

	if [ "${exit_code}" != "0" ]; then
		# Execute command again to generate output
		eval "${command}"
	fi
}