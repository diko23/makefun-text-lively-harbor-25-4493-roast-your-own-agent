# makefun-text-lively-harbor-25-4493-roast-your-own-agent

[![Competition](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/diko23/makefun-text-lively-harbor-25-4493-roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/diko23/makefun-text-lively-harbor-25-4493-roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Submission for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) bounty on make.fun.

## Overview

A standalone Node.js TypeScript program that writes a single-line roast (under the 140-character cap) poking fun at how our own coding agent investigates a production incident, runs diagnostic git tooling on its own work, agrees with the evidence as an outside observer, and politely offers to file paperwork instead of fixing it.

## Run it

```sh
node main.ts
```

By default, the program writes `/output/entry.txt` (override the output directory with `MAKEFUN_OUTPUT_DIR`). Runs with Node 22+ standard library only, no network access, and deterministic output.
