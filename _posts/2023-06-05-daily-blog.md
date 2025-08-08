---
title: I Got It!
date: 2023-06-05 07:07:56 +0700
author: Amoy
categories: [Blogging, Story]
tags: [writing]
render_with_liquid: false
---

## My New Post Build Failed Because of This

I have tried to deploy my last post but it failed. The culprit are a file named `pages-deploy.yml` which make a file `jekyll.yml` cannot execute to build. So I deleted the culprit file then the build works! Also make sure need to build local by using `bundle exec jekyll s`. Right now I'm really happy what I achieved today. Everything from now and future, would working just fine.
