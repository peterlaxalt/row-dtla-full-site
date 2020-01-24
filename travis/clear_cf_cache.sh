#!/bin/bash

if [ "$TRAVIS_BRANCH" = "master" ]; then
  echo "Invalidating cache for CF Distribution: $AWS_CLOUDFRONT_DIST_ID"
  travis-ci-cloudfront-invalidation -a $AWS_ACCESS_KEY_ID -s $AWS_SECRET_ACCESS_KEY -c $AWS_CLOUDFRONT_DIST_ID -i '/*' -b $TRAVIS_BRANCH -p $TRAVIS_PULL_REQUEST
else
  echo "Skipping Cloudfront Invalidation on branch $TRAVIS_BRANCH"
fi