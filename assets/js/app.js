document.addEventListener('DOMContentLoaded', function () {
  const testimonials = [
    {
      name: "Agesh Aji",
      role: "Customer",
      rating: 4.0,
      review: "Good communication & great experience. The staff helped me pick the perfect computer for my friend's work needs & explained each detail without trying to upsell me. Prices were fair and he even helped me set it up before I left. I highly recommend this place — thanks brother!"
    },
    {
      name: "SARATH KRISHNA",
      role: "Customer",
      rating: 5.0,
      review: "I just got graphics card from here, budget friendly shop, very low price, owner is very helpful and good way of dealing with people."
    },
    {
      name: "Karthik tn",
      role: "Customer",
      rating: 4.5,
      review: "I recently bought components from this seller, and I’m really impressed. The items were fresh and in perfect condition, and the overall experience was smooth. They offer great value for money and made my PC build both affordable and high-quality."
    },
    {
      name: "akhil premachandran01",
      role: "Customer",
      rating: 4.5,
      review: "Very good in budget pc building and system parts are available at low cost and friendly behaviour of staffs"
    },
    {
      name: "Adarsh R S",
      role: "Customer",
      rating: 4.5,
      review: "Best service best price. The owner helps in ways he can. Really worth it."
    },
    {
      name: "Gowtham Krishna",
      role: "Customer",
      rating: 4.5,
      review: "I have bought RTX 3060ti from this shop and the GPU is superb.Most importantly the delivery time and the customer support is extraordinary.Best shop for buying pc parts."
    },
    {
      name: "Krishna",
      role: "Customer",
      rating: 4.0,
      review: "I have purchased a system for my work purpose and would definitely like to appreciate the effort taken by the store to deliver the product with quality and on time also."
    },
    {
      name: "Yoganand g nair",
      role: "Customer",
      rating: 5.0,
      review: "Good service....Ordered a Used,In warranty RTX 3050 and got a New Piece with Full Warranty 😍. Proper Communication and Friendly Behaviour"
    },
    {
      name: "Akash Benni",
      role: "Customer",
      rating: 5.0,
      review: "Hands down the best PC components shop I’ve been to! The owner is super friendly and actually takes the time to help you find exactly what you need. Whether you're a total newbie or a hardcore PC builder, they’ve got you covered. Prices are great, the service is top-notch, and they even give solid advice instead of just trying to sell you the most expensive stuff. If you need anything for your setup, this is the place to go. Highly recommend!"
    },
    {
      name: "RAHUL KRISHNAN",
      role: "Customer",
      rating: 4.0,
      review: "Excellent service, knowledgeable staff, and competitive prices! Highly recommended for all computer needs."
    },
    {
      name: "Arun Antony",
      role: "Customer",
      rating: 4.8,
      review: "A wide variety of computer parts available at decent prices. The overall experience was good. I was confused by the choices available at my price range, but Mr. Askar was able to help me finalize the purchase for me. Overall I would recommend their service and product to all."
    },
    {
      name: "Aleena Soosan Mathew",
      role: "Customer",
      rating: 5.0,
      review: "I had a great experience at NYXG store.Wide selection of latest graphics card. And wide range of second hand systems. This shop is haven for gamers and graphics enthusiasts! The staff is ensuring you to find the perfect fit."
    },
    {
      name: "Anuraj P",
      role: "Customer",
      rating: 5.0,
      review: "I recently visited NYX G - Store and had an awesome experience! The staff was super friendly and knowledgeable, helping me find exactly what I needed. The variety of accessories they have is impressive, and the prices are really reasonable. I highly recommend checking them out if you're looking for quality computer gear!"
    }
  ];

  const container = document.getElementById('testimonial-container');

  function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    let out = '';
    for (let i = 0; i < full; i++) out += '<i class="fa-solid fa-star"></i>';
    if (half) out += '<i class="fa-solid fa-star-half-stroke"></i>';
    for (let i = 0; i < empty; i++) out += '<i class="fa-regular fa-star"></i>';
    return out;
  }

  testimonials.forEach(t => {
    const html = `
      <div class="swiper-slide">
        <p>
          <i class="fa-solid fa-quote-left"></i><br>
          ${t.review}
        </p>
        <hr>
        <div class="info-bar">
          <div class="left">
            <h4>${t.name}</h4>
            <span class="small-title">${t.role}</span>
          </div>
          <div class="right">
            <div class="rating">${renderStars(t.rating)}</div>
            <b style="margin-left:8px">${t.rating.toFixed(1)}</b> Ratings
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });

  // Initialize Swiper AFTER slides are injected
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 24,
    autoplay: { delay: 4000, disableOnInteraction: true },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      0:   { slidesPerView: 1, spaceBetween: 12 },
      640: { slidesPerView: 1.25, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024:{ slidesPerView: 3, spaceBetween: 24 }
    }
  });
});