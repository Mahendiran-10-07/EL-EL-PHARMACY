document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const ctaButton = document.querySelector('.cta-button');
    const featureGrid = document.getElementById('featureGrid');
    const productGrid = document.getElementById('productGrid');

    loginBtn.addEventListener('click', function() {
        alert('Login functionality coming soon!');
    });

    ctaButton.addEventListener('click', function() {
            document.querySelector('#products').scrollIntoView({
            behavior: 'smooth'
        });
    });
    

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feature data
    const features = [
        { title: 'Wide Range of Medicines', description: 'Access to a vast selection of prescription and over-the-counter medications.' },
        { title: '24/7 Service', description: 'Our online platform is available round the clock for your convenience.' },
        { title: 'Fast Delivery', description: 'Quick and reliable delivery service to your doorstep.' },
        { title: 'Expert Advice', description: 'Professional pharmacists available for consultations and advice.' },
        { title: 'Health Monitoring', description: 'Regular health check-ups and monitoring services available.' },
        { title: 'Prescription Refills', description: 'Easy and convenient prescription refill service.' }
    ];

    // Product data
    const products = [
        { name: 'Multivitamin Complex', price: 999, image: "1.jpg" },
        { name: 'Pain Relief Gel', price: 299, image: '2.jpg' },
        { name: 'Allergy Relief Tablets', price: 899, image: '5.jpg' },
        { name: 'First Aid Kit', price: 499, image: '4.jpg' },
        { name: 'Digital Thermometer', price: 599, image: '6.jpg' },
        { name: 'Hand Sanitizer', price: 399, image: '7.jpg' },
        { name: 'Glucometer', price: 899, image: '8.jpg' },
        { name: 'KareIn Classic Adult Diaper Pants, Medium', price: 299, image: '9.webp' }
    ];

    // Populate features
    features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.classList.add('feature');
        featureElement.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featureGrid.appendChild(featureElement);
    });

    // Populate products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs ${product.price.toFixed(2)}</p>
            <button class="cta-button">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });

    // Add to cart functionality
    productGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            const productName = e.target.parentElement.querySelector('h3').textContent;
            (`${productName} added to cart!`);
        }
    });
});
//.........................................................................


