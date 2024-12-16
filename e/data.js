var APP_DATA = {
  "scenes": [
    {
      "id": "0-1er_tage_d",
      "name": "1er_étage_d",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.265356582531229,
          "pitch": 0.009816570721572049,
          "rotation": 0,
          "target": "1-escalier_d_droite"
        },
        {
          "yaw": 0.8089557062798001,
          "pitch": -0.0352215964005449,
          "rotation": 0,
          "target": "3-devant_cdi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.021969730025954703,
          "pitch": -0.3593984340166685,
          "title": "un golmon",
          "text": "légère autisme"
        },
        {
          "yaw": -3.0673325199175494,
          "pitch": 0.07530246684431852,
          "title": "extincteur",
          "text": "il est là hein"
        }
      ]
    },
    {
      "id": "1-escalier_d_droite",
      "name": "Escalier_d_droite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.42980194819378,
          "pitch": -0.12804226956849618,
          "rotation": 0,
          "target": "0-1er_tage_d"
        },
        {
          "yaw": 2.1710330766194694,
          "pitch": 0.3919556182169721,
          "rotation": 0,
          "target": "2-derrire_la_cantine_"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30528327133362154,
          "pitch": -0.6171437328797698,
          "title": "Enceinte",
          "text": "sonnerie lycée"
        },
        {
          "yaw": 3.0893498778688286,
          "pitch": -0.027913391646798402,
          "title": "double barre",
          "text": "2 barres"
        }
      ]
    },
    {
      "id": "2-derrire_la_cantine_",
      "name": "Derrière_la_cantine_",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.048399790174333,
          "pitch": -0.05751994857897458,
          "rotation": 0,
          "target": "1-escalier_d_droite"
        },
        {
          "yaw": 0.5870036734600426,
          "pitch": -0.15166527276785047,
          "rotation": 0,
          "target": "3-devant_cdi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7691933413684993,
          "pitch": -0.1843889185139176,
          "title": "encore ce golmon",
          "text": "se rattache à&nbsp; la vie"
        },
        {
          "yaw": 0.7469507758849687,
          "pitch": 0.05282867943569336,
          "title": "cantinière",
          "text": "fait du miam miam"
        }
      ]
    },
    {
      "id": "3-devant_cdi",
      "name": "Devant_cdi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9929994082009816,
        "pitch": 0.23526225974683257,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.8624120572062584,
          "pitch": 0.07669058270665197,
          "rotation": 0,
          "target": "2-derrire_la_cantine_"
        },
        {
          "yaw": 0.8242357764790817,
          "pitch": 0.01809792587661363,
          "rotation": 0,
          "target": "0-1er_tage_d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3335256486371634,
          "pitch": 0.09388930655906513,
          "title": "CDI",
          "text": "porte"
        },
        {
          "yaw": 0.35481121175297403,
          "pitch": 0.05763003397636268,
          "title": "extincteur",
          "text": "on sait jamais pour un incendie ça peut toujours servir&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
