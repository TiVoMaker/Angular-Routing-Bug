# Angular 6 Routing Bug
This repo demonstrates a routing bug in Angular 6 (at least). It also demonstrates why the Ionic v4 back-button does not always work correctly, which has at least 6 open bug reports on Ionic as well.

## Setup
Install `ionic` globally, clone the repo, `npm install`, then run `ionic serve`. Opens in the browser.

## The Problem
The `app-routing.ts` file shows a simple routing setup - a top page with a router outlet, which in turn contains another page with it's own nested router outlet, which has two children. In the top page, click on _Goto Level 1_. You will be on level 2 (level 1 is the container with the second router outlet). Click on _Goto our sister page_. You are on level 2a. Hit the Ionic back button ← at the top, takes you back to level 2. You are now stuck on that page, and cannot leave. No routing events are posted, no messages in the console, nothing.

The key is that this code uses `relative` paths to move between the two level 2 pages.

In the various Ionic v4 bugs that have been entered, it is noted that one fix is to use absolute paths (yuck). I've verified that it works - and it is a clue.

## The Bug
In the github Angular repository `angular/angular`, examine `angular/packages/router/src/create_url_tree.ts`. Consider the function `replaceSegment`, which walks the router outlets in the in the current router tree, looking for the old URL, and then replaces it, if found, with the new URL. The code calling this function has laborously constructed the absolute URL that is in the outlet, as well as the new absolute URL using the old URL and the new relative path. The comparison is based on the old and new URL segment groups for the outlet, which of course are complex objects. On or about line 62, the code does a simple `===` comparison of the old and new segment groups.

If you are lucky (and apparently, many are), the old segment group reference has not changed from that originally placed in the router outlet, and the code happily replaces it with the new reference. However, after using the Ionic back-button, the reference in the outlet and the one provided as the "old" segment group no longer reference the same object; the `===` fails, and the outlet is not updated. You are stuck forever.

It seems that the `===` match should be replaced with a comparison that actually matches up the path segments one by one, something like:

	function toPath(segments: UrlSegmentGroup) { return segments.map(s => s.path).join('/'); }
	if (toPath(c) === toPath(oldSegment) {
		children[outletName] = newSegment;
	}


      