document.addEventListener("DOMContentLoaded", function () {
  const widget = document.createElement("div");
  widget.id = "fixmyhive-widget";
  widget.innerHTML = `
    <a href="tel:+97477839040" class="call-now">
      <svg viewBox="0 0 512 512"><path d="M391.1 330.2c-20.9-11.1-41.7-23.7-61.1-36.8-13.3-9-25.7-18.8-37.6-29.5-11.5-10.4-20.8-21.2-28.5-32.6-5.4-7.8-10.1-15.7-14.1-23.7-4.4-8.8-7.3-17.5-8.8-26-2-11.5-6.2-21.7-13.3-30.7-7.2-9.1-16.4-14.4-27.7-15.9-8.8-1.2-17.1 1.1-24.8 6.8-5.8 4.4-11.1 9.8-16.2 15.9-8.1 10.1-15.5 20.5-22.2 31.3-8.2 13.1-14.4 26.5-18.4 40.1-3.4 11.6-3.9 22.6-1.5 32.8 3.1 13.6 10.1 26.8 21 39.8 18.4 22.2 41.1 42.5 68.4 60.8 28.8 19.2 58.6 34.5 89.5 45.6 21.6 7.8 41.2 11.9 58.7 12.1 10.9.1 21-2 30.2-6.2 12.1-5.6 22.6-15.4 31.5-29.4 5.2-8.1 7.3-16.7 6.4-25.9-.8-9.4-5.2-17.5-13.2-24.4z"/></svg>
      Call Now
    </a>
    <a href="https://wa.me/97477839040" class="whatsapp" target="_blank">
      <svg viewBox="0 0 448 512"><path d="M380.9 97.1C339-18.2 204.5-42.2 117.2 32 40.4 96.7 23 211 79 293.5l-16.4 60c-2.9 10.6 7.5 19.8 17.3 14.5l62.5-32.6c73.4 38.6 169.6 18.4 226.9-47.1 64.5-74.4 43.6-190.8-38.4-241.2zm-73.3 240.5c-16.6 10.4-34.6 13.4-52.6 8.3-15.7-4.4-30.2-12.4-44-23.7-20.8-17.2-37.9-40.2-50.2-66.3-9.1-19.3-14.6-36.3-16.6-50.7-1.7-11.9 2.3-23.4 11.1-31.7 7.1-6.9 15.5-10.7 24.5-10.8 4.7 0 9.2 1.1 13.3 3.3l26.5 14.1c3.4 1.8 5.6 5.3 5.7 9.1.1 3.8-1.8 7.4-5.1 9.4l-13.1 7.6c-3.2 1.9-5.4 5.1-5.7 8.8-.3 3.7 1.1 7.3 3.8 9.9 6.1 5.9 13 11.5 20.6 16.6 7.6 5.1 15.4 9.5 23.2 13.1 3.4 1.6 7.3 1.4 10.6-.6l12.6-7.5c3.4-2 7.6-2.2 11.2-.5l28.1 13.2c3.7 1.8 6.3 5.1 7.1 9 .8 3.9-.1 8-2.5 11.3-7.1 9.7-14.5 18.4-22.4 25.2z"/></svg>
      WhatsApp Us
    </a>
  `;
  document.body.appendChild(widget);

  const style = document.createElement("style");
  style.textContent = `
    #fixmyhive-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    #fixmyhive-widget a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: white;
      font-weight: bold;
      padding: 12px 16px;
      border-radius: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: background-color 0.3s;
      gap: 8px;
      font-family: sans-serif;
    }
    #fixmyhive-widget .call-now {
      background-color: orange;
    }
    #fixmyhive-widget .call-now:hover {
      background-color: darkorange;
    }
    #fixmyhive-widget .whatsapp {
      background-color: #FFA500;
    }
    #fixmyhive-widget .whatsapp:hover {
      background-color: #e69500;
    }
    #fixmyhive-widget svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
    @media (max-width: 600px) {
      #fixmyhive-widget a {
        font-size: 14px;
        padding: 10px 14px;
      }
      #fixmyhive-widget svg {
        width: 18px;
        height: 18px;
      }
    }
  `;
  document.head.appendChild(style);
});
