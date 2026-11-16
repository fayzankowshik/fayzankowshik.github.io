# Fayzan Kowshik Khan: personal website

A plain website with no build step, no database and nothing to update. It is five
small files plus your pictures and PDFs. It will keep working for as long as the
host serves files, and you can edit it in a web browser without any AI tool.

## What is in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word on the site: bio, education, projects, awards, links | **Yes. This is the only file you normally touch.** |
| `assets/` | Your photo, CV (PDF) and project pictures | Replace files here |
| `reports/` | Project reports (PDF) linked from the Projects section | Add or remove files here |
| `index.html` | The page shell and the title shown in Google results | Rarely |
| `style.css` | Colours, fonts and layout | Only to restyle |
| `site.js` | Builds the page from `content.js` | No |

## Put it online for free (GitHub Pages, about 5 minutes, done once)

1. Sign in at https://github.com as **fayzankowshik**.
2. Click **+** (top right) > **New repository**.
3. Name it exactly `fayzankowshik.github.io`, choose **Public**, click **Create repository**.
4. On the new page click **uploading an existing file**.
5. Drag in **everything inside this folder** (the files and the `assets` and `reports`
   folders themselves, not the outer folder). Click **Commit changes**.
6. Open **Settings > Pages**. Under "Build and deployment" choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
7. Wait a minute or two, then visit **https://fayzankowshik.github.io**.

That address is the one to put in your emails, CV and Google Scholar profile.

## Change something later

1. On GitHub, open your repository and click `content.js`.
2. Click the pencil icon (**Edit this file**).
3. Change the text between the quotes. Instructions are written at the top of the file.
4. Click **Commit changes**. The live site updates in about a minute.

Common edits:

- **Add a project**: in `content.js`, copy one `{ ... },` block inside `projects`, paste it
  where you want it to appear, and change the text. The order in the file is the order on the page.
- **Add a publication**: same thing inside `research`.
- **New CV**: upload the new PDF into `assets/` with the same file name
  (`Fayzan_Kowshik_Khan_CV.pdf`) so the old one is replaced. Nothing else needs to change.
- **New photo**: upload a square picture named `photo.jpg` into `assets/`.
- **Add a project picture**: upload it into `assets/`, then set
  `image: "assets/your-file.jpg"` in that project.
- **Hide a section**: delete all the items in its list (for example `awards: []`).
  Empty sections disappear from the page and the menu.

## If the site goes blank after an edit

A quote, comma or bracket is missing in your last change to `content.js`.
On GitHub open the file, click **History**, open your last change and use
**Revert**, or fix the typo. Every earlier version is kept, so nothing is ever lost.

## Notes

- Your phone number is deliberately not on the site, to avoid spam. Your email is.
- The search-result title and description are in `index.html` (lines with `<title>`
  and `meta name="description"`). Update them if your headline changes.
- To use your own address such as `fayzankhan.com`, buy the domain and add it under
  **Settings > Pages > Custom domain**. This is optional.
