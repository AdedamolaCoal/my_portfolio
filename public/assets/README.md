# CV File Instructions

## How to Add Your CV

1. **Prepare your CV file:**

   - Convert your CV to PDF format
   - Name it `Adedamola_CV.pdf` (or update the filename in the code)
   - Make sure it's professional and up-to-date

2. **Place your CV file:**

   - Put your CV file in this folder: `public/assets/`
   - The file should be accessible at: `/assets/Adedamola_CV.pdf`

3. **Alternative locations:**

   - You can also place it directly in `public/` folder
   - Or host it on a cloud service (Google Drive, Dropbox, etc.)

4. **Update the code if needed:**
   - If you use a different filename, update `src/utils/cvDownload.ts`
   - If you host it elsewhere, update the URL in the download function

## File Structure

```
public/
├── assets/
│   ├── Adedamola_CV.pdf    <- Your CV goes here
│   └── README.md           <- This file
└── vite.svg
```

## Supported Formats

- PDF (recommended)
- DOCX (will open in browser)
- TXT (plain text)

## Features

- ✅ Direct download when clicked
- ✅ Works on mobile and desktop
- ✅ Fallback to open in new tab if download fails
- ✅ Animated download buttons
- ✅ Available in header and hero section
