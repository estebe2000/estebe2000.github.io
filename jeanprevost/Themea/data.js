var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre",
      "name": "Entrée",
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
        "yaw": 0.16124864849870235,
        "pitch": 0,
        "fov": 1.2739945160662665
      },
      "linkHotspots": [
        {
          "yaw": -2.4003081295430206,
          "pitch": 0.06789947859016365,
          "rotation": 0,
          "target": "1-parking"
        },
        {
          "yaw": 0.7706816038565769,
          "pitch": 0.047682977723452424,
          "rotation": 0,
          "target": "5-arriere-bat-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2766054216712934,
          "pitch": 0.010414107866530742,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Entrée</font></font>",
          "text": "Text"
        },
        {
          "yaw": -0.10826452358204719,
          "pitch": 0.13890556166963108,
          "title": "Plan du lycée",
          "text": "Text"
        },
        {
          "yaw": -1.1635248290186286,
          "pitch": 0.1946496857351825,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Entrée batiment A</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-parking",
      "name": "parking",
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
          "yaw": -2.686067216913571,
          "pitch": 0.0024861355033110044,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 1.246202817941512,
          "pitch": -0.03443629414563354,
          "rotation": 0,
          "target": "2-gauche-bat-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2958148942991503,
          "pitch": 0.11044041943633509,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">parking à vélo</font></font>",
          "text": "Text"
        },
        {
          "yaw": -0.040224960674702714,
          "pitch": 0.1975788327511694,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Parking</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">réservé aux professeurs et personnels</font></font>"
        }
      ]
    },
    {
      "id": "2-gauche-bat-e",
      "name": "gauche bat E",
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
          "yaw": -3.0725953306260685,
          "pitch": -0.004708984337156608,
          "rotation": 0,
          "target": "3-bat-e"
        },
        {
          "yaw": 0.34083268236557807,
          "pitch": 0.001630329470097891,
          "rotation": 0,
          "target": "1-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9486314283624182,
          "pitch": 0.006343336855849202,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">résidences</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-bat-e",
      "name": "bat E",
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
          "yaw": -1.577142929155384,
          "pitch": 0.016706756357399044,
          "rotation": 4.71238898038469,
          "target": "2-gauche-bat-e"
        },
        {
          "yaw": 1.647968544302052,
          "pitch": 0.05516416103904476,
          "rotation": 0,
          "target": "6-sculpture"
        },
        {
          "yaw": 2.6788935137940433,
          "pitch": -0.09713444123297066,
          "rotation": 0,
          "target": "8-queue-cantine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2339258846375145,
          "pitch": -0.05114986516990072,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Batiment E</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">administratif</font></font>"
        }
      ]
    },
    {
      "id": "4-cour-infrieure-d",
      "name": "cour inférieure D",
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
          "yaw": -2.76292085667043,
          "pitch": 0.14335678084080072,
          "rotation": 0,
          "target": "9-devant-mdl"
        },
        {
          "yaw": 1.5180847453146225,
          "pitch": 0.019814285124127196,
          "rotation": 0,
          "target": "7-devant-bat-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10444541090954118,
          "pitch": 0.2675327677294401,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Pot de fleures</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-arriere-bat-c",
      "name": "arriere bat C",
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
          "yaw": 0.28636856830253166,
          "pitch": -0.007254185556808679,
          "rotation": 0,
          "target": "0-entre"
        },
        {
          "yaw": 2.7835609075959447,
          "pitch": 0.03728760474527526,
          "rotation": 0,
          "target": "7-devant-bat-d"
        },
        {
          "yaw": 1.1542873285031856,
          "pitch": 0.035954047257497734,
          "rotation": 0,
          "target": "8-queue-cantine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0993484251143624,
          "pitch": 0.08941558836118091,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cuisine de la cantine</font></font></font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-sculpture",
      "name": "sculpture",
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
          "yaw": -2.1633563982110946,
          "pitch": 0.07817001690871095,
          "rotation": 0,
          "target": "9-devant-mdl"
        },
        {
          "yaw": 1.6742334567189978,
          "pitch": 0.04390549593622417,
          "rotation": 0,
          "target": "3-bat-e"
        },
        {
          "yaw": 0.318229776120738,
          "pitch": 0.005213288368913993,
          "rotation": 0,
          "target": "8-queue-cantine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0951238818497755,
          "pitch": 0.013603815457791768,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Sculpture</font></font></font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-devant-bat-d",
      "name": "devant bat D",
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
          "yaw": 2.3319218621192945,
          "pitch": 0.07859147037907022,
          "rotation": 6.283185307179586,
          "target": "4-cour-infrieure-d"
        },
        {
          "yaw": 1.114035008308086,
          "pitch": 0.0018020012726509549,
          "rotation": 0,
          "target": "5-arriere-bat-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9415310104809027,
          "pitch": 0.052105387923708335,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Vue</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Belle vue</font></font>"
        },
        {
          "yaw": 1.4747763427491156,
          "pitch": 0.03289877932543028,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">sortie cantine</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "8-queue-cantine",
      "name": "queue cantine",
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
          "yaw": -1.744575282291752,
          "pitch": 0.11019440902486721,
          "rotation": 12.566370614359176,
          "target": "6-sculpture"
        },
        {
          "yaw": 2.9700748985959438,
          "pitch": 0.06204714821210899,
          "rotation": 4.71238898038469,
          "target": "3-bat-e"
        },
        {
          "yaw": -0.9276739360577739,
          "pitch": -0.06062048784378682,
          "rotation": 1.5707963267948966,
          "target": "5-arriere-bat-c"
        },
        {
          "yaw": 1.9197861476490221,
          "pitch": 0.007468132505819014,
          "rotation": 1.5707963267948966,
          "target": "2-gauche-bat-e"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1857326669281623,
          "pitch": 0.04350936400042826,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Entrée cantine</font></font>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "9-devant-mdl",
      "name": "devant MDL",
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
          "yaw": 2.771116407311312,
          "pitch": 0.2172249913947244,
          "rotation": 0,
          "target": "6-sculpture"
        },
        {
          "yaw": -0.429256211312552,
          "pitch": 0.1180334773224434,
          "rotation": 0,
          "target": "4-cour-infrieure-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9819104397332268,
          "pitch": -0.009344803991259809,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">MDL</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Maison des lycée</font></font>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
