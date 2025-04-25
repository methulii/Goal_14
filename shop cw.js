document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    // Basket and checkout functionality
    const basket = [];
    const basketContainer = document.getElementById('Basket'); // Corrected selector
    const totalPriceElement = document.getElementById('totalPrice'); // Corrected selector

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            const productName = productElement.querySelector('h4').textContent; // Corrected selector
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
            const productImage = productElement.querySelector('img').src;

            const basketItem = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            basket.push(basketItem);
            updateBasket();
        });
    });

    function updateBasket() {
        basketContainer.innerHTML = ''; // Clear previous basket items
        let total = 0;

        basket.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('basket-item');
            itemElement.innerHTML = `
                <div><img src="${item.image}" width="50"></div>
                <div>${item.name}</div>
                <div>$${item.price.toFixed(2)}</div>
            `;
            basketContainer.appendChild(itemElement);
            total += item.price;
        });

        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    document.querySelector('.checkout').addEventListener('click', () => {
        if (basket.length === 0) {
            alert('Your basket is empty!');
        } else {
            alert('Thank you for your purchase!');
            clearBasket();
        }
    });

    document.querySelector('.clear-basket').addEventListener('click', clearBasket);

    function clearBasket() {
        basket.length = 0;
        updateBasket();
    }
});
