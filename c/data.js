var APP_DATA = {
  "scenes": [
    {
      "id": "0-autre_mdl",
      "name": "Autre_mdl",
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
        "yaw": -1.3445780459108896,
        "pitch": -0.002099190243139759,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.4234714980062435,
          "pitch": 0.09240812856059222,
          "rotation": 0,
          "target": "1-mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3999416747844773,
          "pitch": 0.06407589399825042,
          "title": "SpiderMan",
          "text": "<h1>Un grand pouvoir implique de grandes responsabilités</h1>"
        }
      ]
    },
    {
      "id": "1-mdl",
      "name": "Mdl",
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
          "yaw": 1.323627652775965,
          "pitch": 0.07155979547449043,
          "rotation": 0,
          "target": "0-autre_mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6559263918066964,
          "pitch": -0.1618532207089025,
          "title": "I'm Batman<br>",
          "text": "L'homme craint ce qu'il ne peut voir..<br>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
