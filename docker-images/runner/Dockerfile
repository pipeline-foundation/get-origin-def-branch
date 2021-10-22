FROM ubuntu:20.04

# argument required by tzdata installation from software-properties-common
ARG DEBIAN_FRONTEND=noninteractive
ARG NODEJS_VERSION
ARG IS_CI

RUN set -x; \
	apt update; \
	apt install -y git \
		curl \
		wget; \
	if [ "${IS_CI}" = "true" ]; then \
	else \
		# install GitHub CLI for GitHub release
		GH_CLI_VERSION=`curl  "https://api.github.com/repos/cli/cli/releases/latest" | grep '"tag_name"' | sed -E 's/.*"([^"]+)".*/\1/' | cut -c2-`; \
		wget https://github.com/cli/cli/releases/download/v${GH_CLI_VERSION}/gh_${GH_CLI_VERSION}_linux_amd64.tar.gz; \
		tar xvf gh_${GH_CLI_VERSION}_linux_amd64.tar.gz; \
		cp gh_${GH_CLI_VERSION}_linux_amd64/bin/gh /usr/local/bin/; \
		rm -rf gh_${GH_CLI_VERSION}_linux_amd64 gh_${GH_CLI_VERSION}_linux_amd64.tar.gz; \
	fi
	
# Built with ❤ by [Pipeline Foundation](https://pipeline.foundation)
