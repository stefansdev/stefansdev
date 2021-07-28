---
title: "How to create scroll triggered moving text with React & GSAP"
excerpt: "Short guide for to create scroll triggered moving text with React & Gsap"
image: "/posts/meta_react_gsap.jpg"
date: "2021-07-29T00:16:21+02:00"
categories: ["react", "gsap", "animations"]
---

![How%20to%20create%20scroll%20triggered%20moving%20text%20in%20Reac%208f0e3be156ac4b36a598d016f1aabd15/scroll-animation.gif](/posts/scroll-animation.gif)

You probably seen it around. It's a trend , then it's not. But its definitely interesting and cool animation to have on your website. And it's not that hard to do. You don't have to write everything by yourself, there are a plenty of plugins to help you do animations.

I think this is the easiest way to achieve this animation.

For this example we are going to use [ScrollTrigger - Plugin for GSAP](https://greensock.com/scrolltrigger/).

Note: in this example I'm using TailwindCss. If you are not familiar with it, you can use your preferred way of styling. For me it's much easier to have style and everything in one place.

### Install dependencies

In your react app install:

```
npm install gsap
```

### Import GSAP and ScrollTrigger in page or component

```jsx
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
```

### Register plugin

```jsx
gsap.registerPlugin(ScrollTrigger);
```

### Setup html

```jsx
<div className="page_wrapper min-h-[170vh] relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
	<div className="p-4 bg-blue-300 absolute top-0 left-0 w-full">Header</div>

	{/* This is the element we want to animate on scroll */}
	<h1 className="scrolling_text text-white text-8xl absolute font-black top-[30%]">
		SOME COOL TEXT!
	</h1>

	<div className="p-4 bg-gray-300 absolute bottom-0 left-0 w-full">
		Footer
	</div>
</div>
```

### Connect scroll plugin and configure it

Now we need to select trigger node, set timeline and setup animation - how we want our element to move.

```jsx
useEffect(() => {
	gsap.set(".page_wrapper", { width: "100%" });
	gsap.timeline({
		scrollTrigger: {
			trigger: ".page_wrapper",
			start: "top top",
			end: "bottom bottom",
			scrub: 0,
		},
	}).fromTo(
		".scrolling_text",
		{ y: "30%", x: "120%" },
		{ y: "130%", x: "10%" },
		0
	);
}, []);
```

And thats it . Your component should look like this:

```jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerText = () => {
	useEffect(() => {
		gsap.set(".page_wrapper", { width: "100%" });
		gsap.timeline({
			scrollTrigger: {
				trigger: ".page_wrapper",
				start: "top top",
				end: "bottom bottom",
				scrub: 0,
			},
		}).fromTo(
			".scrolling_text",
			{ y: "30%", x: "120%" },
			{ y: "130%", x: "10%" },
			0
		);
	}, []);

	return (
		<div className="page_wrapper min-h-[170vh] relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
			<div className="p-4 bg-blue-300 absolute top-0 left-0 w-full">
				Header
			</div>

			<h1 className="scrolling_text text-white text-8xl absolute font-black top-[30%]">
				SOME COOL TEXT!
			</h1>

			<div className="p-4 bg-gray-300 absolute bottom-0 left-0 w-full">
				Footer
			</div>
		</div>
	);
};

export default ScrollTriggerText;
```

You can now customise and tailor for your needs. Everything you needed to understand is in `useEffect` hook.
