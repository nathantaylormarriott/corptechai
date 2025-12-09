# CorpTech AI Landing Page

Conversion-focused, neon-styled landing page for CorpTech AI — an automation, cybersecurity, and marketing intelligence consultancy.

## Sections
- Hero with CTA, stats, and holographic insight cards
- About pillars explaining differentiation
- Services grid for consultancy, automation, cybersecurity, and marketing pods
- Recent projects with metrics
- Delivery process timeline
- Contact form for strategy calls

## Run locally
Open `index.html` in your browser or serve the directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Merge guidance
If GitHub shows merge conflicts on `README.md`, `index.html`, `styles.css`, or `script.js`, keep the versions from this branch. These files contain the full original landing experience with the holographic hero cards and animated background.

### Quick resolve recipe (when `main` has diverged)
1. Check out this branch locally: `git fetch origin && git checkout work` (or the branch containing this site).
2. Start the merge: `git merge main`.
3. When prompted with conflicts on the landing files, **choose "Accept Incoming"** in GitHub Desktop/VS Code, or run the CLI equivalent:
   ```bash
   git checkout --theirs README.md index.html styles.css script.js
   git add README.md index.html styles.css script.js
   git commit -m "Resolve landing page conflicts"
   ```
4. Push the branch and complete the pull request back into `main`.

This sequence ensures the original site files remain unchanged while resolving the README conflict cleanly.
