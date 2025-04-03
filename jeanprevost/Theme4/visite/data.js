var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-mdl",
      "name": "Entrée MDL",
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
          "yaw": 2.506678653372516,
          "pitch": 0.020220854605931038,
          "rotation": 0,
          "target": "1-extrieur-mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8004721186297044,
          "pitch": 0.09144776200879257,
          "title": "Zone de jeu",
          "text": "Billard et BabyFoot"
        }
      ]
    },
    {
      "id": "1-extrieur-mdl",
      "name": "Extérieur MDL",
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
          "yaw": 0.6257458223770236,
          "pitch": 0.059192219112485844,
          "rotation": 0,
          "target": "0-entre-mdl"
        },
        {
          "yaw": -0.24361141819875698,
          "pitch": 0.02563658440787364,
          "rotation": 0,
          "target": "5-sortie-cantine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-etude-btiment-d",
      "name": "Etude Bâtiment D",
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
        "yaw": 1.980388448941742,
        "pitch": 0,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": 0.27115018393879353,
          "pitch": 0.054346184741596915,
          "rotation": 0,
          "target": "5-sortie-cantine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.014185198702119,
          "pitch": 0.04578466041428797,
          "title": "Indice ICI",
          "text": "Fenêtre de la vie scolaire"
        }
      ]
    },
    {
      "id": "3-cantine",
      "name": "Cantine",
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
          "yaw": -1.385583419982769,
          "pitch": 0.009596203119691893,
          "rotation": 0,
          "target": "5-sortie-cantine"
        },
        {
          "yaw": 0.8580024621851745,
          "pitch": 0.1088738683119761,
          "rotation": 0,
          "target": "4-self"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-self",
      "name": "Self",
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
          "yaw": 2.535212251319054,
          "pitch": 0.06753457143643615,
          "rotation": 0,
          "target": "3-cantine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sortie-cantine",
      "name": "Sortie Cantine",
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
          "yaw": -0.4950289316948755,
          "pitch": -0.03854645518349997,
          "rotation": 0,
          "target": "3-cantine"
        },
        {
          "yaw": 2.335077497069321,
          "pitch": -0.02024253982379065,
          "rotation": 0,
          "target": "2-etude-btiment-d"
        }
      ],
      "infoHotspots": []
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
