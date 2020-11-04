#!/bin/sh

if [ "$INCOMING_HOOK_BODY" = "full" ]; then 
    echo "Full build"
    gatsby clean && gatsby build
else
    echo "Simple build"
    cross-env GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --log-pages
fi;
