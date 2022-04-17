import React from 'react';
import "../styles/preFooter.css";
import "../styles/footer.css";

const shield = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"/></svg>

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z"/></g></g></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>

const twitter = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>

const youtube = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const facebook = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

const instagram = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>

const Footer = ({footer}) => {
  return (
    <>
      <div className="preFooter">
        <div>
            {repeatIcon}
            <p><b>Hassle-free replacement</b> <br /> 10-day easy replacement policy on mi.com</p>
        </div>
        <div>
            {shield}
            <p><b>100% secure payments</b> <br /> We support cards, Wallets, EMI and COD</p>
        </div>
        <div>
            {mapIcon}
            <p><b>Vast service network</b> <br /> 1000 MI service-centers across 600 cities</p>
        </div>
      </div>
      <div className="preFooter2">
        <div><p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>
        <div>
          <div>
            <input type="email" name='email' placeholder="Enter Email Address" />
            <button> &gt; </button>
          </div>
          <span>Thanks, you are on our email list for special offers</span>
        </div>

        <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>

        <div>
          {facebook} {youtube} {instagram} {twitter}
        </div>
      </div>

      <div className="footer">
        <div>
          <p>SUPORT</p>
          {
            footer.support.map((item, index) => (
              <a href={item.url} key={item.url}> {item.name} </a>
            ))
          }
        </div>

        <div>
          <p>SHOP AND LEARN</p>
          {
            footer.shopAndLearn.map((item, index) => (
              <a href={item.url} key={item.url}> {item.name} </a>
            ))
          }
        </div>

        <div>
          <p>RETAIL STORE</p>
          {
            footer.retailStore.map((item, index) => (
              <a href={item.url} key={item.url}> {item.name} </a>
            ))
          }
        </div>

        <div>
          <p>ABOUT</p>
          {
            footer.aboutUS.map((item, index) => (
              <a href={item.url} key={item.url}> {item.name} </a>
            ))
          }
        </div>

        <div>
          <p>CONTACT</p>
          {
            footer.contactUs.map((item, index) => (
              <a href={item.url} key={item.url}> {item.name} </a>
            ))
          }
        </div>

        <div>
          <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>

      </div>

      <div className="footerBorder">
        <div>Copyright Ⓒ 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>

    </>
  )
}

export default Footer;