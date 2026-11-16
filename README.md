# Clubhaus

The website for Clubhaus, a community library and learning hub in The Gambia.

It has two pages: `index.html` (what Clubhaus is) and `join.html` (sign up, contribute, agreements). It's plain HTML and CSS with no build step, hosted free on GitHub Pages.

## Updating the site

Almost everything you'll change lives in **`data.json`**. Edit it on GitHub (open the file, click the pencil, then "Commit changes"). The site updates within a minute or two.

| What | Where in `data.json` |
|---|---|
| Tally form | `settings.tallyFormId`: the ID at the end of your Tally link, e.g. `wA1bCd` from `tally.so/r/wA1bCd` |
| WhatsApp link | `settings.whatsappUrl`: e.g. `https://whatsapp.com/channel/...` or `https://chat.whatsapp.com/...` |
| Email | `settings.email` |
| Progress bars | `progress`: change `current` (and `goal` if needed) |
| Build the Haus parts | `parts`: set `status` to `open`, `part` (in progress) or `claimed`, and put the person or organisation's name in `by` |

Buttons for WhatsApp and email stay hidden until you fill those in. Until `tallyFormId` is set, the Join page shows a "form coming soon" box.

## Turning on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. The site will be live at `https://pure-matter.github.io/clubhaus/`.

## Brand

- Colours: Blue `#2340FF`, Orange `#FF6B1F`, Ink `#121212`, Paper `#F5F4F0`
- Fonts: Bricolage Grotesque (headings at narrow width, extra bold; body text) and DM Mono (small labels). Both are free Google Fonts.
- The signature is the overprint: the wordmark printed in orange, with the same word in blue set slightly down and to the right, both on multiply so the overlap goes near-black.

See `docs/tally-form.md` for how to set up the sign-up form.
