var APP_DATA = {
  "scenes": [
    {
      "id": "0-cantine",
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
        "yaw": -0.7223149243053992,
        "pitch": 0.46052342736369845,
        "fov": 1.2045782547802415
      },
      "linkHotspots": [
        {
          "yaw": -1.1416284334907782,
          "pitch": 0.17746251341794306,
          "rotation": 0,
          "target": "3-queue-cantine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-couloir-a",
      "name": "Couloir A",
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
        "yaw": -0.505021967137008,
        "pitch": 0.29282565309573805,
        "fov": 1.2045782547802415
      },
      "linkHotspots": [
        {
          "yaw": 1.214006431264039,
          "pitch": 0.1097009006394245,
          "rotation": 0,
          "target": "3-queue-cantine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salle-musique",
      "name": "Salle musique",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-queue-cantine",
      "name": "Queue cantine",
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
          "yaw": -1.8631557304566257,
          "pitch": 0.004673966778346639,
          "rotation": 0,
          "target": "0-cantine"
        },
        {
          "yaw": -2.1087676097154144,
          "pitch": 0.06495386375846479,
          "rotation": 0,
          "target": "4-extrieur-mdl"
        },
        {
          "yaw": 1.2500215968443218,
          "pitch": 0.09372029793244074,
          "rotation": 0,
          "target": "1-couloir-a"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.701854319267241,
          "pitch": -0.013428916902014976,
          "title": "Bureaux administration",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-extrieur-mdl",
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
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20067818528519865,
          "pitch": 0.37192621109950785,
          "rotation": 0,
          "target": "5-prau-mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8027756363746388,
          "pitch": -0.03490893847282983,
          "title": "MDL",
          "text": "Maison des lycéens"
        }
      ]
    },
    {
      "id": "5-prau-mdl",
      "name": "Préau MDL",
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
          "yaw": -1.7625702489025095,
          "pitch": 0.24589622471890138,
          "rotation": 0,
          "target": "4-extrieur-mdl"
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
