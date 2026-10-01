document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Stop default browser redirect

      // Provide visual feedback while sending
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success alert message
          alert('Success! Your message has been sent successfully.');
          contactForm.reset();
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      } catch (error) {
        alert('Oops! Network error. Please try again later.');
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});

// WHATSAPP REPAIR BOOKING

document.addEventListener("DOMContentLoaded", function() {
  const repairForm = document.getElementById("repairForm");
  // Check that the form exists
  if (!repairForm) {
    console.error("Repair form not found.");
    return;
  }
  repairForm.addEventListener("submit", function(event) {
    // Prevent normal form submission
    event.preventDefault();
 
    const whatsappNumber = "+2347083085958";
  
    const fullName =
      document.getElementById("fullName").value.trim();
    const phone =
      document.getElementById("phone").value.trim();
    const service =
      document.getElementById("service").value;
    const date =
      document.getElementById("date").value;
    const address =
      document.getElementById("address").value.trim();
  
    if (
      fullName === "" ||
      phone === "" ||
      service === "" ||
      date === "" ||
      address === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    const dateObject = new Date(date + "T00:00:00");
    const formattedDate =
      dateObject.toLocaleDateString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    // ==========================================
    // CREATE WHATSAPP MESSAGE
    // ==========================================
    const message =
      `🔧 TAYUSTECH ENGINEERING- REPAIR BOOKING
Hello TAYUSTECH,
I would like to schedule a repair service.

CUSTOMER INFORMATION
------------------------------

👤 Full Name:
${fullName}

📞 Phone Number:
${phone}

🛠️ Service Needed:
${service}

📅 Preferred Date:
${formattedDate}

📍 Service Address:
${address}

Please confirm my repair booking.
Thank you.
TAYUS TECH`;
    // ==========================================
    // CREATE WHATSAPP LINK
    // ==========================================
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);
    // ==========================================
    // OPEN WHATSAPP
    // ==========================================
    window.location.href = whatsappURL;
  });
});

 
// Trade-In / Sell Valuation Algorithm
function handleEstimate(event) {
  event.preventDefault();
  
  const type = document.getElementById('sellType').value;
  const age = parseInt(document.getElementById('sellAge').value);
  const condition = document.getElementById('sellCondition').value;
  const resultBox = document.getElementById('estimateResult');
  
  let basePrice = type === 'fridge' ? 120000 : 130000;
  
  // Age deduction
  if (age === 2) basePrice -= 10000;
  if (age === 4) basePrice -= 20000;
  
  // Condition adjustment
  if (condition === 'good') basePrice *= 0.8;
  if (condition === 'faulty') basePrice *= 0.6;
  
  basePrice = Math.max(basePrice, 50); // Minimum guaranteed scrap value
  
  const formattedPrice = `₦${basePrice.toFixed(2)}`;
  
  resultBox.style.display = 'block';
  resultBox.innerHTML = `Estimated Trade-in Offer: ${formattedPrice}<br><small>A technician will verify condition upon pickup.</small>`;
  
  // WhatsApp Button Integration
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.style.display = 'block';
    whatsappBtn.onclick = function() {
      const phoneNumber = "+2347083085958";
      
      const message = `Hello, I would like to submit a sell/trade-in request:\n\n` +
        `*Appliance Type:* ${type}\n` +
        `*Condition:* ${condition}\n` +
        `*Estimated Valuation:* ${formattedPrice}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  }
}

 /* =========================
   OPEN / CLOSE FAQ
========================= */

function toggleFAQ(button) {
    const answer =
        button.nextElementSibling;
    const icon =
        button.querySelector(".icon");

    if (answer.style.display === "none") {
        answer.style.display = "block";
        icon.textContent = "−";
    } else {
        answer.style.display = "none";
        icon.textContent = "+";
    }
}
let currentCategory = "All";
function filterCategory(category, button) {
    currentCategory = category;
    document
        .querySelectorAll(".category-buttons button")
        .forEach(btn => {
            btn.classList.remove("active");
        });
    button.classList.add("active");
    filterFAQs();
}
document
    .getElementById("search")
    .addEventListener("input", filterFAQs);
function filterFAQs() {
    const search =
        document
        .getElementById("search")
        .value
        .toLowerCase();
    const faqs =
        document
        .querySelectorAll(".faq-item");
    let found = 0;
    faqs.forEach(faq => {
        const category =
            faq.dataset.category;
        const text =
            faq.innerText.toLowerCase();
        const categoryMatch =
            currentCategory === "All" ||
            category === currentCategory;
        const searchMatch =
            text.includes(search);
        if (categoryMatch && searchMatch) {
            faq.style.display = "block";
            found++;
        } else {
            faq.style.display = "none";
        }
    });
    document.getElementById("noResult").style.display =
        found === 0 ? "block" : "none";
}

/* =========================
   BACK TO TOP
========================= */

const backToTop =
  document.getElementById("backToTop");
window.addEventListener("scroll", function() {
  if (window.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================
   JUMP TO BOTTOM
========================= */

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}



// =========================
// LIGHT / DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

// Check saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = " ☀️ ";
} else {
  document.body.classList.remove("dark-mode");
  themeToggle.textContent = "🌙 ";
}

// Change theme
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = " ☀️ ";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙 ";
    localStorage.setItem("theme", "light");
  }
});


/*Display DateTime*/
function displayDateTime() {
    var now = new Date();
    document.getElementById("datetime").innerHTML = now.toLocaleString();}
displayDateTime();
setInterval(displayDateTime, 1000);