FROM alpine:3.14

RUN apk update; \
    apk add --no-cache \
		git \
        curl \
        wget; \
	apk add --update npm; \
	# add dev non-root user
	useradd --shell /bin/bash --create-home devcontainer;

USER devcontainer

# Built with ❤ by [Pipeline Foundation](https://pipeline.foundation)
