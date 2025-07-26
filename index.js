function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if ((user === "admin" || user === "user") && pass === "1234") {
    role = user;
    securityLevel = (role === "admin") ? "high" : "low";

    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("order-section").classList.remove("hidden");

    // ✅ Show the role and security level correctly
    document.getElementById("userInfo").innerText = `Role: ${role} | Security: ${securityLevel}`;
  } else {
    alert("Wrong login!");
  }
}

     function processOrder() {
      const name = document.getElementById("name").value;
      const age = parseInt(document.getElementById("age").value);
      const coffee = document.getElementById("coffeeType").value;
      const quantity = parseInt(document.getElementById("quantity").value);
      const people = parseInt(document.getElementById("people").value);
      const tipPercent = parseInt(document.getElementById("tip").value);

      let pricePerCup = 0;
      if (coffee === "espresso") pricePerCup = 2.5;
      else if (coffee === "latte") pricePerCup = 3.5;
      else if (coffee === "cappuccino") pricePerCup = 4.0;

      let originalTotal = pricePerCup * quantity;
      let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
      let finalTotal = originalTotal - discount;
      let tipAmount = finalTotal * (tipPercent / 100);
      let totalWithTip = finalTotal + tipAmount;
      let perPerson = totalWithTip / people;

      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML =
  `<strong>👋 Hello ${name}!</strong><br><br>` +
  `☕ You ordered <strong>${quantity}</strong> <em>${coffee}</em>(s)<br>` +
  `💵 Original Price: <strong>$${originalTotal.toFixed(2)}</strong><br>` +
  `🎁 Discount: <strong>-$${discount.toFixed(2)}</strong><br>` +
  `💖 Tip: <strong>$${tipAmount.toFixed(2)}</strong><br>` +
  `🧾 Final Total: <strong>$${totalWithTip.toFixed(2)}</strong><br>` +
  `👥 Split between ${people}: <strong>$${perPerson.toFixed(2)}</strong> each<br><br>` +
  ` Enjoy your coffee! ☕💫`;
    }