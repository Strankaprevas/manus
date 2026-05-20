# TRAKCIA s.r.o. - Autoservis Website

A modern, responsive static HTML/CSS/JavaScript website for TRAKCIA autoservis in Prešov, Slovakia.

## Features

- **Pure HTML/CSS/JavaScript** - No frameworks, lightweight and fast
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **White & Green Design** - Modern professional aesthetic
- **Smooth Animations** - Scroll animations and transitions
- **Mobile Menu** - Hamburger menu for mobile devices
- **Contact Form** - Ready for integration with backend
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Vercel Ready** - Configured for easy deployment

## Project Structure

```
trakcia-static/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS styling
├── script.js           # Vanilla JavaScript for interactions
├── vercel.json         # Vercel deployment configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Sections

1. **Navigation** - Fixed sticky navbar with mobile menu
2. **Hero** - Full-screen hero section with CTA buttons
3. **About** - Company information with team image and stats
4. **Services** - 9 service offerings with descriptions
5. **Why Us** - 6 key reasons to choose TRAKCIA
6. **Reviews** - Customer testimonials and ratings
7. **Gallery** - Image gallery of the workshop
8. **Contact** - Contact information and form
9. **Footer** - Links and company information

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Using GitHub

1. Push this repository to GitHub
2. Connect your GitHub account to Vercel
3. Select this repository
4. Click "Deploy"

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from Git or upload files
4. Configure and deploy

## Local Development

Simply open `index.html` in your browser. No build process needed!

For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Colors
- Primary Green: `#16a34a`
- Dark Text: `#1f2937`
- Light Background: `#f9fafb`

Edit these in `styles.css` to change the color scheme.

### Content
Edit `index.html` to update:
- Company information
- Services
- Testimonials
- Contact details
- Images

### Fonts
Currently using:
- Display: Barlow Condensed (Google Fonts)
- Body: Source Sans 3 (Google Fonts)

## Performance

- **Lightweight**: Only 3 files (HTML, CSS, JS)
- **Fast Loading**: No dependencies or build process
- **Optimized Images**: Using external CDN for images
- **Mobile Optimized**: Responsive design and touch-friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form Integration

The contact form is currently set up to log data to the console. To integrate with a backend:

1. Update the form submission handler in `script.js`
2. Send data to your backend API
3. Implement email notifications

Example integration with a backend API:

```javascript
// In script.js, update the form submission handler
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => console.log('Success:', result))
.catch(error => console.error('Error:', error));
```

## License

© 2024 TRAKCIA s.r.o. All rights reserved.

## Support

For questions or issues, contact:
- Phone: +421 51 452 5207
- Email: trakciapresov@gmail.com
