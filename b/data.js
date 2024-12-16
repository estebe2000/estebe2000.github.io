var APP_DATA = {
  "scenes": [
    {
      "id": "0-rfectoire-1",
      "name": "Réfectoire 1",
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
        "yaw": -1.437535249435287,
        "pitch": 0.35883586783267063,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.6234162000193972,
          "pitch": 0.042570078694076585,
          "rotation": 0,
          "target": "2-rfectoire-2"
        },
        {
          "yaw": 0.5080849028838905,
          "pitch": 0.03848236414679285,
          "rotation": 0,
          "target": "1-couloir-bat-a"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4674648579673235,
          "pitch": 0.011102127172520682,
          "title": "Entrée réfectoire",
          "text": "Bon appétit"
        }
      ]
    },
    {
      "id": "1-couloir-bat-a",
      "name": "Couloir bat A",
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
          "yaw": 0.37713258693048957,
          "pitch": 0.07814918201709986,
          "rotation": 0,
          "target": "2-rfectoire-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5406695988149304,
          "pitch": -0.15775264720595317,
          "title": "Extincteur",
          "text": "Sert à éteindre le feu pompier"
        }
      ]
    },
    {
      "id": "2-rfectoire-2",
      "name": "Réfectoire 2",
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
          "yaw": 2.2521982089085846,
          "pitch": 0.047248564850566055,
          "rotation": 0,
          "target": "0-rfectoire-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.697385551980994,
          "pitch": 0.035664286698143144,
          "title": "Poubelle recyclage",
          "text": "Tri tes déchets"
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
