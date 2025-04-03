var APP_DATA = {
  "scenes": [
    {
      "id": "0-entre-du-lyce",
      "name": "Entrée du Lycée",
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
        "yaw": 2.5130932614232844,
        "pitch": 0.13544133904591504,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 1.4287666268639097,
          "pitch": -0.014976528358126018,
          "rotation": 0,
          "target": "1-rue"
        },
        {
          "yaw": 2.3712548234745636,
          "pitch": -0.1258474652324253,
          "rotation": 0,
          "target": "8-stade_ext"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.509673492586545,
          "pitch": 0.03995702804789403,
          "title": "A l'aide !!!!",
          "text": "... pour de faux"
        },
        {
          "yaw": -0.29218560886384104,
          "pitch": -0.2929520137074082,
          "title": "Lycée Jean Prévost",
          "text": "Notre lycée"
        }
      ]
    },
    {
      "id": "1-rue",
      "name": "Rue",
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
        "yaw": -2.066400506735981,
        "pitch": 0.10676988133435295,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 1.033359957279954,
          "pitch": 0.059615892488334765,
          "rotation": 0,
          "target": "0-entre-du-lyce"
        },
        {
          "yaw": -2.1581171036886424,
          "pitch": -0.01231183667759339,
          "rotation": 0,
          "target": "2-entre-parking-gymnase"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1263779558335667,
          "pitch": 0.573278426407402,
          "title": "place pour les cars (parfois en retard)",
          "text": "Ils peuvent être à l'heure aussi !"
        }
      ]
    },
    {
      "id": "2-entre-parking-gymnase",
      "name": "Entrée parking gymnase",
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
        "yaw": -2.8921054216940476,
        "pitch": 0.17876492702866464,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 0.9796718414940937,
          "pitch": 0.10212855811583843,
          "rotation": 0,
          "target": "1-rue"
        },
        {
          "yaw": -2.55797921211688,
          "pitch": 0.10282015781568177,
          "rotation": 0,
          "target": "3-skatepark"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.487089682704518,
          "pitch": 0.3999705822313473,
          "title": "siège pour l'attente du car",
          "text": "..."
        }
      ]
    },
    {
      "id": "3-skatepark",
      "name": "Skatepark",
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
        "yaw": -2.7443041009159295,
        "pitch": 0.2022379841039399,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 0.1788610699829647,
          "pitch": 0.048032945687667805,
          "rotation": 0,
          "target": "2-entre-parking-gymnase"
        },
        {
          "yaw": -2.5401958390264596,
          "pitch": 0.11413273382920508,
          "rotation": 0,
          "target": "5-skatepark-ct-gymnase"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.35735280392349367,
          "pitch": 0.035462944030514976,
          "title": "je cherche mon trajet",
          "text": "..."
        },
        {
          "yaw": 2.0033891746142816,
          "pitch": 0.3365455323995832,
          "title": "rambarde glissante",
          "text": "attention aux acrobaties"
        }
      ]
    },
    {
      "id": "4-city",
      "name": "City",
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
      "faceSize": 200,
      "initialViewParameters": {
        "yaw": 0.3558135804609588,
        "pitch": 0.10298281141402121,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 2.4865308879435677,
          "pitch": -0.10490660005169339,
          "rotation": 0,
          "target": "5-skatepark-ct-gymnase"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6673647897903336,
          "pitch": 0.4304718542912056,
          "title": "Attention sol glissant",
          "text": "Oups"
        }
      ]
    },
    {
      "id": "5-skatepark-ct-gymnase",
      "name": "Skatepark côté gymnase",
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
          "yaw": -0.9030387382863871,
          "pitch": 0.1218060514235706,
          "rotation": 0,
          "target": "3-skatepark"
        },
        {
          "yaw": 0.8013349932488776,
          "pitch": 0.13418754852900783,
          "rotation": 0,
          "target": "4-city"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.717320082706956,
          "pitch": -0.18248022290126187,
          "title": "Indice ICI",
          "text": "..."
        },
        {
          "yaw": 2.3573208768705713,
          "pitch": -0.008107380785686402,
          "title": "voiture du prof de sport",
          "text": "..."
        }
      ]
    },
    {
      "id": "6-pingpong",
      "name": "Pingpong",
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
          "yaw": -2.3306861702152943,
          "pitch": 0.016482191469251006,
          "rotation": 0,
          "target": "7-dojo"
        },
        {
          "yaw": 1.1928770916350597,
          "pitch": -0.00806275122046074,
          "rotation": 0,
          "target": "9-stade_in"
        },
        {
          "yaw": -0.38448426941993574,
          "pitch": 0.030619036923171805,
          "rotation": 0,
          "target": "0-entre-du-lyce"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5435077029475828,
          "pitch": -0.0032335388923065977,
          "title": "photos des frères Lebrun",
          "text": "deux champions"
        }
      ]
    },
    {
      "id": "7-dojo",
      "name": "Dojo",
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
        "yaw": 1.2882445484994687,
        "pitch": 0.271826748776391,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": 0.9418791188628113,
          "pitch": 0.06737856999379943,
          "rotation": 0,
          "target": "6-pingpong"
        },
        {
          "yaw": 1.828505641170656,
          "pitch": 0.009472058436179154,
          "rotation": 0,
          "target": "9-stade_in"
        },
        {
          "yaw": -2.8016241290142574,
          "pitch": 0.06157936373051598,
          "rotation": 0,
          "target": "0-entre-du-lyce"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6951688783969843,
          "pitch": 0.03201376683887247,
          "title": "sac préféré du prof",
          "text": "pour décompresser"
        }
      ]
    },
    {
      "id": "8-stade_ext",
      "name": "Stade_ext",
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
        "yaw": -0.686425224107527,
        "pitch": 0.029500577386588844,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": -1.0916438631790832,
          "pitch": 0.07818733705523684,
          "rotation": 0,
          "target": "9-stade_in"
        },
        {
          "yaw": -2.954330021693835,
          "pitch": -0.04673204056572544,
          "rotation": 0,
          "target": "0-entre-du-lyce"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5752252913396099,
          "pitch": -0.258967740291725,
          "title": "gymnase Christian Gand",
          "text": "un autre gymnase..."
        },
        {
          "yaw": 0.33934515100666474,
          "pitch": -0.09373286725111996,
          "title": "Piscine Belle Etoile",
          "text": "..."
        }
      ]
    },
    {
      "id": "9-stade_in",
      "name": "Stade_in",
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
        "yaw": 0.046293794183998926,
        "pitch": 0.02949378755410237,
        "fov": 1.525601287706261
      },
      "linkHotspots": [
        {
          "yaw": -1.4551477919870592,
          "pitch": 0.0498082150088095,
          "rotation": 0,
          "target": "7-dojo"
        },
        {
          "yaw": -0.5605959617683389,
          "pitch": 0.07029004114643556,
          "rotation": 0,
          "target": "6-pingpong"
        },
        {
          "yaw": 1.9090161794964091,
          "pitch": -0.06331071947437295,
          "rotation": 0,
          "target": "8-stade_ext"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.288357360281891,
          "pitch": -0.1486711822407596,
          "title": "image bugguée",
          "text": "..."
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
