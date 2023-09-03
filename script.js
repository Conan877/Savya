function showProduct(productNumber) {
    // Get references to the elements you want to hide
    const heroSection = document.querySelector(".hero");
    const productGrid = document.querySelector(".products");

    // Hide the hero section and product grid
    heroSection.style.display = "none";
    productGrid.style.display = "none";

    // Rest of your code to show the selected product detail
    const productDetail = document.getElementById("product-detail");
    const productName = document.getElementById("product-name");
    const productDescription = document.getElementById("product-description");
    const productImage = document.getElementById("product-image");
    const prevButton = document.getElementById("prev-image");
    const nextButton = document.getElementById("next-image");
    const imageGallery = ["wallet1.jpg", "wallet2.jpg", "wallet3.jpg", "wallet4.jpg"];
    let currentImageIndex = 0;

    productName.textContent = `Wallet ${productNumber}`;
    productDescription.textContent = `This is a long description of Wallet ${productNumber}. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`;
    productImage.src = imageGallery[0];
    currentImageIndex = 0;
    updateImage();
    productDetail.style.display = "block";

    prevButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + imageGallery.length) % imageGallery.length;
        updateImage();
    });

    nextButton.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
        updateImage();
    });

    function updateImage() {
        productImage.src = imageGallery[currentImageIndex];
    }
}
