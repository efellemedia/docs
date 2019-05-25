---
title: Directory Structure
---

# Directory Structure

[[toc]]

---

All themes are stored within the `public/themes` directory. Let's look at what a typical theme directory structure will look like, and explain each part of it:

```txt
public/
    |-- themes/
        |-- your-project/
            |-- assets/
                |-- css/
                    |-- theme.css
                |-- img/
                |-- js/
                    |-- main.js
                    |-- theme.js
                |-- sass/
            |-- views/
                |-- layouts/
                    |-- public.blade.php    
                |-- partials/
                    |-- header.blade.php
                    |-- footer.blade.php
                |-- index.blade.php
        |-- theme.json
```
