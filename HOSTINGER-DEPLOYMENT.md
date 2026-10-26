# Host CropEvidence on Hostinger PHP/HTML hosting

Verified against official Hostinger documentation on 26 October 2026.

## What is in GitHub

Repository: https://github.com/PrajaktaAdlytica/CropEvidence

- `main`: React/Vite source, all production assets, original artwork, brand/design archive, QA evidence, and build configuration.
- `hostinger`: ready-to-serve HTML, CSS, JavaScript, images, fonts and `.htaccess`. Connect THIS branch to Hostinger.
- GitHub Actions: every push to `main` builds and tests the project, then updates `hostinger`. A downloadable hosting ZIP is attached to the workflow run. The initial release also includes a ZIP.

This site runs as static files on a standard PHP/HTML website. PHP does not need to execute the React app, and Node.js does not run on Hostinger. GitHub performs the build. Current enquiry forms create local drafts only, authentication is a concept preview, and no payments or equipment integration are connected.

## 1. Confirm hosting capacity

A purchased domain alone is not a hosting plan. You need an active Web Hosting plan with an available normal website slot. Exhausting Node.js/Web App slots does not establish whether a PHP/HTML slot is available. If the overall website quota is exhausted too, this method cannot bypass it.

Official guides: [Create your first website](https://docs.hostinger.com/getting-started/creating-your-first-website), [Add a website](https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/).

## 2. Add the PHP/HTML website and assign your domain

1. Open Hostinger hPanel → Websites.
2. Select your Web Hosting plan → Create website (some panels show Add website).
3. Choose Custom PHP/HTML website / empty website. Do not select Node.js Web App or a Website Builder installation.
4. Select the existing domain you purchased at Hostinger. Do not purchase another domain.
5. Open that website's Dashboard.

Before deploying into a directory with existing content, download a backup. Use a dedicated empty site directory for the first deployment; do not overwrite a WordPress site or another working website. The legacy Git flow explicitly requires an empty target.

Source: [Hostinger website creation](https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/).

## 3. Connect the ready-built Git branch — recommended

Current hPanel flow:

1. Website Dashboard → Advanced → Git → Connect with GitHub.
2. Authorize Hostinger for the CropEvidence repository.
3. Select `PrajaktaAdlytica/CropEvidence` → Next.
4. Branch: `hostinger` (not `main`).
5. Root / Deploy directory: `public_html` for the main domain.
6. Click Deploy and wait for success.
7. Keep Auto-deployment enabled if you want future branch updates deployed automatically. Hostinger manages the webhook in this connection flow.

If your panel instead shows the legacy repository URL form:

- Repository URL: `https://github.com/PrajaktaAdlytica/CropEvidence.git`
- Branch: `hostinger`
- Directory: leave blank to target `public_html` (this legacy field differs from the current Root/Deploy directory field).
- Ensure the target is empty, save/create the repository, then click Deploy.
- For future automatic updates, open Auto Deployment, copy its webhook URL and follow the displayed GitHub webhook instructions. Keep the webhook URL private.

The repository is public, so the legacy public URL does not need a private-repository SSH key. If visibility is changed later, use the current GitHub authorization or follow Hostinger's private-repository deploy-key guide.

**Do not select `main` and expect Hostinger to run npm.** Ordinary PHP/HTML Git deployment pulls files; it does not install dependencies or build Vite. `hostinger` already has `index.html` at its root.

Sources: [Hostinger Git documentation](https://docs.hostinger.com/websites/git), [Git repository deployment](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/).

## 4. ZIP upload alternative

Use this if Git is unavailable in your plan or you prefer a manual upload.

1. Download `CropEvidence-hostinger.zip` from the repository's Releases page (or the latest successful GitHub Actions run).
2. Website Dashboard → File Manager → `public_html`.
3. Back up existing content and remove only the starter files you no longer need.
4. Upload the ZIP and extract its CONTENTS directly into `public_html`.
5. Check these paths exist:

```
public_html/index.html
public_html/.htaccess
public_html/assets/
public_html/brand/
public_html/fonts/
public_html/icons/
```

Do not leave an extra `CropEvidence-hostinger`, `dist`, or `client` folder around those files. Show hidden files if `.htaccess` is not visible. After verifying extraction, remove the uploaded ZIP from the public directory. Choose either Git-managed deployment or manual ZIP updates for this folder; Git redeployment can replace manual edits.

Source: [Upload a website with File Manager](https://www.hostinger.com/support/how-to-upload-a-website-from-backups/).

## 5. Connect the domain and enable HTTPS

- A domain purchased in the same Hostinger account normally already has Hostinger nameservers, but it still needs to be assigned to this website.
- If the website shows Domain not connected, use the site's Check guide / connection instructions and the exact DNS values hPanel provides. Preserve existing mail records. Do not copy an arbitrary IP address from another site.
- DNS changes may take 24–48 hours.
- SSL normally provisions automatically. If not, open Dashboard → Security → SSL → Install SSL. Enable Force HTTPS after the certificate is active.

Sources: [Connecting a domain](https://docs.hostinger.com/getting-started/connecting-a-domain), [SSL](https://docs.hostinger.com/websites/ssl).

## 6. Verify the hosted site

Replace YOUR-DOMAIN with the domain assigned in hPanel:

- `https://YOUR-DOMAIN/`: intro, pause/skip and hero transition.
- `https://YOUR-DOMAIN/products/field-review`: direct visit and browser refresh.
- `https://YOUR-DOMAIN/pricing`: illustrations, fonts and hypothesis labels.
- `https://YOUR-DOMAIN/demo`: synthetic queue and reviewer boundary.
- Mobile navigation, form layout and footer.

The included `.htaccess` supplies SPA routing for real routes, returns 404 for missing assets and denies hidden deployment metadata. It was tested against local Apache; actual Hostinger settings and DNS/SSL still require verification after deployment.

## Updating the website

1. Edit the source on `main` and push.
2. Wait for the GitHub Actions workflow **Build Hostinger static site** to turn green.
3. Confirm the `hostinger` branch has the new build.
4. With Hostinger Auto-deployment connected, check its deployment status. If it did not trigger, click Redeploy/Deploy in hPanel.
5. For manual hosting, download the new workflow ZIP and replace the deployed files.

Do not edit generated files on `hostinger`; they are replaced by the next successful source build. No Hostinger passwords or API keys are stored in this repository.

## Local build commands

Use Node.js 22 and a ZIP command available on the machine:

```sh
npm ci
npm run build
npm run test:sites
npm run package:hostinger
```

Output is `deploy/hostinger/` plus `deploy/CropEvidence-hostinger.zip`. The Vite output here is `dist/client`, not the default `dist`. The Sites adapter remains available separately in `dist/server`; it is not used for PHP/HTML hosting.
