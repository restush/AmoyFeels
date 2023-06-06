---
title: Custom Domain
date: 2023-06-06 06:45:10 +0800
author: amoy
categories: 
tags: [writing]
image:
    path: /assets/commons/old-amoyfeels.png
render_with_liquid: false
hidden: false
---

## Moving From Old Website to New Website

The old Amoy Feels website use Google Site. Google Site is really good for beginner like it's just plug and play. I'm really thanksful to Google Site because there is no fee! However, I found Jekyll a better static website with Chirpy theme. Now the website is on and I had to move my `www.amoyfeels.com` domain from Google Site to Github.

### It's Really Confusing
![Old Amoy Feels](/assets/commons/old-amoyfeels.png){:  w="275" h="150" .left } Because moving domain need to setup again from Google Domain. I need to change dns, create, and match record from Github provide. I read article and video tutorial but still like I'm scared when try to implement. There is an issue like when I change custom domain in Github page, it failed to verify the dns of `www.amoyfeels.com`. I deleted and re-entered custom record in Google Domain to match Github, disable/unpublish my Google Site but still the verify dns still failed. Although when I go to `www.amoyfeels.com` it redirect to this Jekyll so it's failed successfuly. I begin test my website `www.amoyfeels.com` to open from any browser that I have, sometime redirect to my old Google Site that I have unpublished. I begin to think maybe need to delete cache, then after delete cache worth 6 years, the `www.amoyfeels.com` site is working and no redirect to my Google Site. Then, check on Github, but still `www.amoyfeels.com` failed to verify. Then, I found that in internet, need to click button `remove` to delete my custom domain on Github then try add again. Later that on, it works! 

### Anger
![New Amoy Feels](/assets/commons/new-amoyfeels.png){: w="275" h="150" .left } While setting up domain, it made me angry, mad, anxiety, and nervous. But it's worth it in the final. I think it's cool, that the new website has custom domain rather than `xxx.github.io/AmoyFeels`.