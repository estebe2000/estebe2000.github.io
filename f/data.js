var APP_DATA = {
  "scenes": [
    {
      "id": "0-snt-1",
      "name": "snt 1",
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
        "yaw": -0.18038419372251369,
        "pitch": -0.30868021796347733,
        "fov": 1.4016564304616623
      },
      "linkHotspots": [
        {
          "yaw": -0.17838940142251403,
          "pitch": -0.3066854256634777,
          "rotation": 0,
          "target": "2-snt2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-snt-3",
      "name": "snt 3",
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
        "yaw": 3.048927477629375,
        "pitch": 0.45517047689057044,
        "fov": 1.4016564304616623
      },
      "linkHotspots": [
        {
          "yaw": 3.102458120129371,
          "pitch": 0.4016398343905898,
          "rotation": 0,
          "target": "0-snt-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-snt2",
      "name": "snt2",
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
        "yaw": -0.431816456248022,
        "pitch": -0.01666222550720775,
        "fov": 1.4016564304616623
      },
      "linkHotspots": [
        {
          "yaw": 0.025052979199994496,
          "pitch": 0,
          "rotation": 0,
          "target": "1-snt-3"
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
