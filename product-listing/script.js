// Sample product data with real image URLs
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "electronics",
        price: 99.99,
        rating: 4.5,
        ratingCount: 128,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Smartphone 128GB",
        category: "electronics",
        price: 699.99,
        rating: 4.2,
        ratingCount: 256,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Men's Casual T-Shirt",
        category: "clothing",
        price: 19.99,
        rating: 3.9,
        ratingCount: 87,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Women's Running Shoes",
        category: "clothing",
        price: 79.99,
        rating: 4.7,
        ratingCount: 215,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Coffee Table Book: Modern Art",
        category: "books",
        price: 29.99,
        rating: 4.1,
        ratingCount: 42,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Stainless Steel Water Bottle",
        category: "home",
        price: 24.99,
        rating: 4.3,
        ratingCount: 156,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "Wireless Charging Pad",
        category: "electronics",
        price: 34.99,
        rating: 3.8,
        ratingCount: 91,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Cotton Throw Blanket",
        category: "home",
        price: 39.99,
        rating: 4.6,
        ratingCount: 178,
        image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhbmtldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 9,
        name: "Bestseller Novel",
        category: "books",
        price: 14.99,
        rating: 4.4,
        ratingCount: 203,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 10,
        name: "Denim Jeans",
        category: "clothing",
        price: 49.99,
        rating: 4.0,
        ratingCount: 112,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 11,
        name: "Smart Watch",
        category: "electronics",
        price: 199.99,
        rating: 4.5,
        ratingCount: 189,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 12,
        name: "Ceramic Dinner Set",
        category: "home",
        price: 89.99,
        rating: 4.2,
        ratingCount: 76,
        image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlubmVyJTIwc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const sortSelect = document.getElementById('sort-by');
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const ratingCheckboxes = document.querySelectorAll('input[name="rating"]');
const priceSlider = document.getElementById('price-slider');
const maxPriceDisplay = document.getElementById('max-price-display');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resetFiltersBtn = document.getElementById('reset-filters');
const productCountElement = document.getElementById('product-count');

// Current filter state
let currentFilters = {
    categories: ['electronics', 'clothing', 'home', 'books'],
    maxPrice: 1000,
    minRating: 0,
    searchQuery: ''
};

// Initialize the page
function init() {
    renderProducts(products);
    setupEventListeners();
    updateProductCount(products.length);
}

// Set up event listeners
function setupEventListeners() {
    // Category filter
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const category = checkbox.value;
            if (checkbox.checked) {
                if (!currentFilters.categories.includes(category)) {
                    currentFilters.categories.push(category);
                }
            } else {
                currentFilters.categories = currentFilters.categories.filter(c => c !== category);
            }
            applyFilters();
        });
    });

    // Rating filter
    ratingCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const rating = parseInt(checkbox.value);
            if (checkbox.checked) {
                // Only keep the highest selected rating
                if (rating > currentFilters.minRating) {
                    currentFilters.minRating = rating;
                }
            } else {
                // If unchecking the current min rating, find the next highest
                if (rating === currentFilters.minRating) {
                    const checkedRatings = Array.from(ratingCheckboxes)
                        .filter(cb => cb.checked)
                        .map(cb => parseInt(cb.value));
                    currentFilters.minRating = checkedRatings.length > 0 ? Math.max(...checkedRatings) : 0;
                }
            }
            applyFilters();
        });
    });

    // Price filter
    priceSlider.addEventListener('input', () => {
        currentFilters.maxPrice = parseInt(priceSlider.value);
        maxPriceDisplay.textContent = `$${currentFilters.maxPrice}`;
        applyFilters();
    });

    // Sort
    sortSelect.addEventListener('change', () => {
        applyFilters();
    });

    // Search
    searchBtn.addEventListener('click', () => {
        currentFilters.searchQuery = searchInput.value.trim().toLowerCase();
        applyFilters();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentFilters.searchQuery = searchInput.value.trim().toLowerCase();
            applyFilters();
        }
    });

    // Reset filters
    resetFiltersBtn.addEventListener('click', resetFilters);
}

// Apply all filters and sorting
function applyFilters() {
    let filteredProducts = [...products];
    
    // Apply category filter
    filteredProducts = filteredProducts.filter(product => 
        currentFilters.categories.includes(product.category)
    );
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
        product.price <= currentFilters.maxPrice
    );
    
    // Apply rating filter
    if (currentFilters.minRating > 0) {
        filteredProducts = filteredProducts.filter(product => 
            product.rating >= currentFilters.minRating
        );
    }
    
    // Apply search filter
    if (currentFilters.searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentFilters.searchQuery)
        );
    }
    
    // Apply sorting
    const sortOption = sortSelect.value;
    filteredProducts = sortProducts(filteredProducts, sortOption);
    
    // Render filtered products
    renderProducts(filteredProducts);
    updateProductCount(filteredProducts.length);
}

// Sort products based on selected option
function sortProducts(products, sortOption) {
    switch (sortOption) {
        case 'price-asc':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...products].sort((a, b) => b.price - a.price);
        case 'rating-desc':
            return [...products].sort((a, b) => b.rating - a.rating);
        case 'name-asc':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return [...products].sort((a, b) => b.name.localeCompare(a.name));
        default:
            return products;
    }
}

// Reset all filters to default
function resetFilters() {
    // Reset category filters
    categoryCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
    currentFilters.categories = ['electronics', 'clothing', 'home', 'books'];
    
    // Reset price filter
    priceSlider.value = 1000;
    currentFilters.maxPrice = 1000;
    maxPriceDisplay.textContent = '$1000';
    
    // Reset rating filter
    ratingCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    currentFilters.minRating = 0;
    
    // Reset search
    searchInput.value = '';
    currentFilters.searchQuery = '';
    
    // Reset sort
    sortSelect.value = 'default';
    
    // Apply reset filters
    applyFilters();
}

// Render products to the DOM
function renderProducts(products) {
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        productsContainer.innerHTML = '<p class="no-results">No products match your filters. Try adjusting your criteria.</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const stars = renderStars(product.rating);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-count">(${product.ratingCount})</span>
                </div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Helper function to render star ratings
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Update the product count display
function updateProductCount(count) {
    productCountElement.textContent = `${count} ${count === 1 ? 'product' : 'products'}`;
}

// Initialize the application
init();