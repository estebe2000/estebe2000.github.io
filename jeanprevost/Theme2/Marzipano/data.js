var APP_DATA = {
  "scenes": [
    {
      "id": "0-cdi",
      "name": "CDI",
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
        "yaw": 2.4529729861620435,
        "pitch": 0.0733084385366265,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 2.5290347873789436,
          "pitch": 0.19150387825719406,
          "rotation": 0,
          "target": "1-vercors"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.024672811754555823,
          "pitch": 0.14043863945766333,
          "title": "LA CAVALERIE EST LA !!",
          "text": "Indice ICI"
        },
        {
          "yaw": -1.6408098454858706,
          "pitch": 0.6106030234432236,
          "title": "Le CDI",
          "text": "Le centre de documentation et d'information du lycée, gardez votre calme."
        }
      ]
    },
    {
      "id": "1-vercors",
      "name": "Vercors",
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
        "yaw": 2.444119591004551,
        "pitch": 0.04001683258096378,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -2.3758497719989826,
          "pitch": 0.1169179548879633,
          "rotation": 0,
          "target": "2-mouette"
        },
        {
          "yaw": 0.8503732488962079,
          "pitch": 0.1234717543870616,
          "rotation": 9.42477796076938,
          "target": "0-cdi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.740653060061975,
          "pitch": 0.09064727279282181,
          "title": "Salle Vercors",
          "text": "Multifonction on y apprend le théâtre, écoute des conférences et c'est même l'endroit où l'on prend les photos de classe"
        },
        {
          "yaw": 1.984996569434391,
          "pitch": -0.8529227273077815,
          "title": "YEAAAAHAAAA",
          "text": ""
        }
      ]
    },
    {
      "id": "2-mouette",
      "name": "Mouette",
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
        "yaw": -0.2649727137118649,
        "pitch": -0.11171074875464626,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 0.3304314579373582,
          "pitch": 0.030222924906389892,
          "rotation": 0,
          "target": "3-salle-musique"
        },
        {
          "yaw": -3.136431878576536,
          "pitch": -0.016642518479740076,
          "rotation": 3.141592653589793,
          "target": "1-vercors"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.44540399933956465,
          "pitch": -0.31433602887182843,
          "title": "La mouette de JP",
          "text": "Oui, oui, c'est une mouette.."
        }
      ]
    },
    {
      "id": "3-salle-musique",
      "name": "Salle Musique",
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
        "yaw": -0.24886145088243516,
        "pitch": -0.13477851673085262,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": 1.7709861176941475,
          "pitch": 0.18335904025187055,
          "rotation": 0,
          "target": "4-salle-cinma"
        },
        {
          "yaw": 1.9613255743464864,
          "pitch": 0.15157019698365737,
          "rotation": 9.42477796076938,
          "target": "2-mouette"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.014876015174809964,
          "pitch": 0.003646242824071777,
          "title": "ARGHHHH",
          "text": ""
        },
        {
          "yaw": 2.8486556468216016,
          "pitch": 0.23229545242607763,
          "title": "Le club musique",
          "text": "Il est à la disposition des adhérent de la MDL.<div>ce club est à l'initiative de concerts à JP.</div><div>N'hésitez pas à vous inscrire ;)&nbsp;</div>"
        }
      ]
    },
    {
      "id": "4-salle-cinma",
      "name": "Salle Cinéma",
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
          "yaw": 2.4165922550416754,
          "pitch": 0.29472419406605255,
          "rotation": 0,
          "target": "5-salle-dart"
        },
        {
          "yaw": 2.65492472483204,
          "pitch": 0.29010465787348494,
          "rotation": 3.141592653589793,
          "target": "3-salle-musique"
        },
        {
          "yaw": 0.5750039759335479,
          "pitch": 0.13226105527720122,
          "rotation": 0,
          "target": "6-salle-cinma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03183115262497793,
          "pitch": 0.45911401104666183,
          "title": "Indice ICI",
          "text": "C'est ici que les idées des jeunes cinéphiles prennent vie"
        }
      ]
    },
    {
      "id": "5-salle-dart",
      "name": "Salle D'Art",
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
        "yaw": 0.7323592282784581,
        "pitch": -0.06950323774985989,
        "fov": 1.5070412331994232
      },
      "linkHotspots": [
        {
          "yaw": -0.8861246868185564,
          "pitch": 0.07482056124592518,
          "rotation": 6.283185307179586,
          "target": "0-cdi"
        },
        {
          "yaw": -2.7914731714746637,
          "pitch": 0.1000743739739356,
          "rotation": 3.141592653589793,
          "target": "4-salle-cinma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5306154170017514,
          "pitch": -0.04175640836785277,
          "title": "Mhhh, un trésor ?",
          "text": ""
        },
        {
          "yaw": -0.0012588265519148933,
          "pitch": -0.08739096733377671,
          "title": "QUESQUIFOU",
          "text": ""
        },
        {
          "yaw": 2.6954518504421756,
          "pitch": 0.04271029715623875,
          "title": "Salle d'Art / CIAV",
          "text": "Utilisée par les options art plastique et cinéma audiovisuel, cette salle est propice par sa disposition aux travaux manuels et de groupes"
        }
      ]
    },
    {
      "id": "6-salle-cinma",
      "name": "Salle Cinéma",
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
          "yaw": 2.5417338427403013,
          "pitch": 0.2508120431558041,
          "rotation": 0,
          "target": "0-cdi"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.022892128635152886,
          "pitch": 0.44603013072411635,
          "title": "???",
          "text": ""
        }
      ]
    }
  ],
  "name": "Thème 2 Culture",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
