# Melt9 AR Menu - McArt glow + sparkle on pop (v41 TEST)

Based on v40 (smoke, no border). McArt ONLY for this test.

Glow + sparkle (dishes/glow.png, dishes/sparkle.png):
- Golden glow disc under the pizza, 1.30 wide, pulsing
  opacity 0.45 to 0.85, 2 seconds, forever - like the
  pizza is hot from the oven.
- Thin gold ring around the pizza, 0.58-0.63, pulsing
  0.5 to 0.9, same 2 seconds.
- 8 gold sparkle stars in a circle round the pizza.
  They burst out on pop (scale 0 to 1.5, fade in then
  out, 1.2 seconds) - triggered in targetFound, where
  the code emits 'sparklestart' on each one.
- 4 small twinkles that keep sparkling slowly after
  the burst, so the pizza keeps shining.

McArt only: dishes.js has "glow: true" on the McArt
block only. To put this on all dishes, add "glow: true"
to that dish in dishes.js. To turn it off for McArt,
delete the "glow: true" line in dishes.js.

Smoke: same as v40 - dark grey thin wisps, no border,
7 wisps, 14 planes, visible flat and tilted.
Shadow: soft 1.10 / 0.65, dark 0.80 / 0.85.

Kept: fixed AR label, Add to cart + Photo in AR,
1-second flash, auto-spin, self-hosted libs/ engine.
iOS (Quick Look) + Android (MindAR camera scan).
